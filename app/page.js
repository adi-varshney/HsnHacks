"use client";

import { useState, useEffect } from "react";
import NavBar from "./_components/NavBar";

export default function Home() {
  const [typedChar, setTypedChar] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTypedChar((typedChar) => typedChar + 1);
    }, 100);
    return () => clearInterval(intervalId);
  }, []);



  return (
    <div>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-auto">
        <div className="text-7xl font-mono z-10">
          <h1>
            {"HSN Hacks".substring(0, typedChar)}
            <span className="animate-pulse">|</span>
          </h1>
        </div>

        <div className="text-3xl flex flex-row font-mono z-10">
          <div className="flex-1 text-center">
            <p>
              When: 1/18 <br></br> 8am to 4pm
            </p>
          </div>
          <div className="flex-1 text-center">
            <p>What: First-Ever <br></br> WWP Hackathon</p>
          </div>
          <div className="flex-1 text-center">
            <p>Where: WW-P High School North</p>
          </div>
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-00 lg:grid-cols-5 lg:text-left">
          <a
            href="/more-info"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              More Info{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Find in-depth information from location to logistics
            </p>
          </a>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe2fPYfUYEG-6bziI_BejrhoOyQfn4ff2hDg0y7QAU9imfeSg/viewform"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Registration Form{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Register now to secure your spot
            </p>
          </a>

          <a
            href="/team"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Meet the Team{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Meet the team bringing this hackathon to life
            </p>
          </a>

          <a
            href="/workshops"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Workshops{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
              See the various workshops we have planned for the day
            </p>
          </a>

          <a
            href="/sponsorships"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Sponsors{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
              See the incredible organizations supporting our mission
            </p>
          </a>

          <a
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>Google Classroom </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
              Join our Google Classroom with the code <b>32txdlk</b>
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
