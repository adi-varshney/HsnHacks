"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function EnergyField() {
  const pointsRef = useRef();
  const basePositions = useMemo(() => {
    const count = 1600;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const stride = i * 3;
      positions[stride] = (Math.random() - 0.5) * 8;
      positions[stride + 1] = (Math.random() - 0.5) * 4;
      positions[stride + 2] = (Math.random() - 0.5) * 4;
    }
    return positions;
  }, []);

  const offsets = useMemo(() => {
    const count = basePositions.length / 3;
    const arr = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      arr[i] = Math.random();
    }
    return arr;
  }, [basePositions]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const t = clock.getElapsedTime();
    const positions = pointsRef.current.geometry.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const stride = i * 3;
      positions.array[stride + 1] =
        basePositions[stride + 1] + Math.sin(t * 0.7 + offsets[i] * 12) * 0.3;
      positions.array[stride + 2] =
        basePositions[stride + 2] + Math.cos(t * 0.5 + offsets[i] * 10) * 0.2;
    }
    positions.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={basePositions}
          count={basePositions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#1ed5ff"
        size={0.05}
        sizeAttenuation
        transparent
        opacity={0.65}
      />
    </points>
  );
}

function NeonRings() {
  const group = useRef();
  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.rotation.z = t * 0.15;
    group.current.rotation.x = Math.sin(t * 0.2) * 0.1;
  });

  return (
    <group ref={group}>
      {[1.5, 2.1, 2.7].map((radius, index) => (
        <mesh key={radius} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[radius, 0.02 + index * 0.01, 16, 200]} />
          <meshBasicMaterial
            color={index % 2 === 0 ? "#0ea5ff" : "#6f7dff"}
            opacity={0.35}
            transparent
          />
        </mesh>
      ))}
    </group>
  );
}

function FloatingOrbs() {
  const group = useRef();
  const orbs = useMemo(
    () =>
      Array.from({ length: 8 }).map((_, index) => ({
        position: [
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2,
        ],
        scale: 0.12 + Math.random() * 0.15,
        speed: 0.2 + Math.random() * 0.4,
        offset: index * 0.6,
      })),
    [],
  );

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.children.forEach((child, index) => {
      const { speed, offset } = orbs[index];
      child.position.y = Math.sin(t * speed + offset) * 0.8;
    });
  });

  return (
    <group ref={group}>
      {orbs.map((orb, index) => (
        <mesh key={index} position={orb.position} scale={orb.scale}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            emissive="#3ee3ff"
            emissiveIntensity={2.5}
            opacity={0.65}
            transparent
            color="#1b5fff"
          />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroBackground() {
  return (
    <div className="hero-canvas" aria-hidden="true">
      <Suspense fallback={null}>
        <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
          <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />
          <color attach="background" args={["transparent"]} />
          <ambientLight intensity={0.35} />
          <pointLight position={[2, 2, 5]} intensity={1} color="#4ad8ff" />
          <EnergyField />
          <NeonRings />
          <FloatingOrbs />
        </Canvas>
      </Suspense>
    </div>
  );
}
