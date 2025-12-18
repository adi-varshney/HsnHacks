"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "./_components/NavBar";
import HeroBackground from "./_components/HeroBackground";

if (
  typeof window !== "undefined" &&
  gsap &&
  !gsap.core.globals().ScrollTrigger
) {
  gsap.registerPlugin(ScrollTrigger);
}

const HERO_TEXT = "HSN Hacks 2026";
const COUNTDOWN_TARGET = "2026-01-31T08:00:00-05:00";
const CLASSROOM_CODE = "32txdlk";

const HERO_STATS = [
  {
    label: "Hackers Expected",
    value: "50+",
    detail: "Students from WW-P North/South and partner schools across NJ",
  },
  {
    label: "Mentor",
    value: "10+",
    detail: "Alumni, engineers, and industry advisors supporting teams",
  },
  {
    label: "Prize Pool",
    value: "$300+",
    detail: "Cash awards, sponsor recognition, and ongoing mentorship",
  },
  {
    label: "Activities",
    value: "3",
    detail: "Launchpad • Impact • Wildcard challenges unveiled live",
  },
];

const QUICK_ACTIONS = [
  {
    title: "More Info",
    description: "Dive into logistics, rules, and the full event guide.",
    href: "/more-info",
  },
  {
    title: "Registration Form",
    description: "Secure your team slot before we hit room capacity.",
    href: "https://forms.gle/xQNis3JDuenmikqQ8",
    external: true,
  },
  {
    title: "Meet the Team",
    description: "Meet the directors, committee leads, and student organizers.",
    href: "/team",
  },
  {
    title: "Sponsor Deck",
    description: "Brands + orgs can fuel challenges, prizes, and activations.",
    href: "/sponsorships",
  },
  {
    title: "Workshop Studio",
    description: "See the sessions built for every skill level.",
    href: "/workshops",
  },
  {
    title: "Google Classroom",
    description:
      "Receive weekly announcements, prompts, and logistics updates.",
    code: CLASSROOM_CODE,
  },
];

const EXPERIENCE_TRACKS = [
  {
    title: "Start Strong",
    subtitle: "New Participants",
    highlights: [
      "Hands-on orientation, ideation prompts, and step-by-step resources for your first project.",
      "Mentors review implementation plans, testing strategies, and presentation outlines.",
    ],
  },
  {
    title: "Build for WW-P",
    subtitle: "Local Impact",
    highlights: [
      "Project prompts highlight challenges faced by students, educators, and township partners.",
      "Judging emphasizes clear problem statements, thoughtful UX, and practical next steps.",
    ],
  },
  {
    title: "Open Exploration",
    subtitle: "Advanced Builders",
    highlights: [
      "Bring any stack, hardware integration, or AI-assisted workflow. Dedicated stations support experimentation.",
      "Technical advisors provide code reviews, deployment tips, and debugging sessions throughout the day.",
    ],
  },
  {
    title: "Showcase Ready",
    subtitle: "Presentation Stage",
    highlights: [
      "Structured expo, finalist demos, and on-stage Q&A modeled after professional pitch events.",
      "Coaching on storytelling, slide design, and delivery so every team can present confidently.",
    ],
  },
];

const ATMOSPHERE_POINTS = [
  "Student-organized by the WW-P North Computer Science community to give every local builder a welcoming launchpad.",
  "All-day access to collaboration spaces, quiet corners, and resource tables for both new and returning teams.",
  "Evaluation led by alumni, educators, engineers, and civic partners who are invested in the region.",
];

const TIMELINE = [
  {
    time: "7:45 AM",
    phase: "Doors Open/Check-in",
    detail:
      "Participants arrive, bring breakfast (not provided), and get settled with their teams.",
  },
  {
    time: "8:15 AM",
    phase: "Opening Ceremony",
    detail:
      "Welcome remarks, rule overview, revealing theme, and sponsor shoutouts.",
  },
  {
    time: "9:15 AM",
    phase: "Hacking Begins!",
    detail: "Coding Begins! Optional workshop sessions start.",
  },
  {
    time: "12:00 PM",
    phase: "Lunch Break",
    detail: "Pizza/food served. Concessions available throughout the day.",
  },
  {
    time: "3:30 PM",
    phase: "Hacking Ends",
    detail:
      "STOP CODING. All projects must be submitted (e.g., to Devpost) by this time.",
  },
  {
    time: "3:00 PM",
    phase: "Closing Ceremony",
    detail:
      "Closing Remarks. (judging will be done virtually and announced later).",
  },
  {
    time: "4:00 PM",
    phase: "Event Ends",
    detail: "Cleanup and dismissal.",
  },
];

const CTA_GRID = [
  {
    title: "Student Teams",
    description:
      "Assemble 2-4 friends or solo queue, we'll match you at check-in.",
    action: "Claim a spot",
    href: "https://forms.gle/xQNis3JDuenmikqQ8",
    external: true,
  },
  {
    title: "Mentors & Workshop Leads",
    description:
      "Lead a sprint, host a studio session, or coach teams through demos.",
    action: "View workshops",
    href: "/workshops",
  },
  {
    title: "Sponsors & Partners",
    description:
      "Show up on the LED wall, host a challenge, or recruit top talent.",
    action: "See sponsor brief",
    href: "/sponsorships",
  },
];

const LOG_LINES = [
  { label: "boot", detail: "lighting rig synced • volumetric haze online" },
  {
    label: "mentors",
    detail: "alumni, local engineers, and designers confirmed",
  },
  {
    label: "studio",
    detail: "AI and design system workshops finalized in the schedule",
  },
  {
    label: "swag",
    detail:
      "participant badges, premium stickers, and apparel queued for distribution",
  },
  {
    label: "ops",
    detail: "stage and projection cues rehearsed for the closing program",
  },
];

export default function Home() {
  const [typedChar, setTypedChar] = useState(1);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });
  const [logCursor, setLogCursor] = useState(0);
  const heroRef = useRef(null);
  const timelineRef = useRef(null);
  const quickRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTypedChar((prev) => {
        if (prev >= HERO_TEXT.length) {
          clearInterval(intervalId);
          return HERO_TEXT.length;
        }
        return prev + 1;
      });
    }, 90);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const computeCountdown = () => {
      const eventDate = new Date(COUNTDOWN_TARGET);
      const now = new Date();
      const diff = Math.max(eventDate.getTime() - now.getTime(), 0);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      setCountdown({ days, hours, minutes });
    };

    computeCountdown();
    const countdownInterval = setInterval(computeCountdown, 60000);
    return () => clearInterval(countdownInterval);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLogCursor((prev) => (prev + 1) % LOG_LINES.length);
    }, 3500);

    return () => clearInterval(intervalId);
  }, []);

  const visibleLogs = [0, 1, 2].map((offset) => {
    const actualIndex = (logCursor + offset) % LOG_LINES.length;
    return {
      ...LOG_LINES[actualIndex],
      key: `${offset}-${actualIndex}`,
    };
  });

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );

      gsap.fromTo(
        ".stat-pill",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.2,
        }
      );

      gsap.fromTo(
        ".hero-lab",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.3,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !timelineRef.current) return;
    const ctx = gsap.context(() => {
      const timelineItems = gsap.utils.toArray(".timeline-item");
      timelineItems.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
            },
          }
        );
      });

      const dots = gsap.utils.toArray(".timeline-dot");
      dots.forEach((dot) => {
        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: dot.parentElement,
              start: "top 80%",
            },
          }
        );
      });

      const axis = document.querySelector(".timeline-axis");
      if (axis) {
        gsap.fromTo(
          axis,
          { height: 0 },
          {
            height: "100%",
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: axis.parentElement,
              start: "top 80%",
            },
          }
        );
      }
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !quickRef.current) return;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".quick-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });
    }, quickRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="pb-24">
      <NavBar />
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 pb-16 pt-6 sm:gap-20 sm:px-6 lg:px-10 lg:gap-28 lg:pb-24 lg:pt-10">
        <section ref={heroRef} className="hero-shell">
          <HeroBackground />
          <div className="hero-grid glass-panel grid gap-12 lg:grid-cols-[1.15fr,0.85fr] lg:items-center">
            <div className="space-y-8">
              <div className="chip inline-flex items-center gap-3 px-4 py-1 text-xs uppercase tracking-[0.35em]">
                HSN CS Club &times; Girls Who Code
              </div>
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.4em] text-muted">
                  January 31 &middot; WW-P High School North Princeton Junction,
                  NJ
                </p>
                <h1 className="hero-title mono-display text-4xl leading-tight sm:text-6xl xl:text-7xl">
                  <span className="hero-title-text">
                    {HERO_TEXT.substring(
                      0,
                      Math.min(typedChar, HERO_TEXT.length)
                    )}
                  </span>
                </h1>
              </div>
              <p className="text-muted max-w-2xl text-lg">
                Eight hours of building, shipping, and pitching software that
                tackles real community problems. Hosted by the High School North
                CS Club in partnership with our Girls Who Code chapter, HSN
                Hacks returns for its second year welcoming both seasoned
                hackers and first timers. Mentors, workshops, food, and swag are
                all lined up!
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://forms.gle/xQNis3JDuenmikqQ8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-btn glow-btn inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
                >
                  Register your team
                </a>
                <Link
                  href="/more-info"
                  className="secondary-btn inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
                >
                  Event guide
                </Link>
                <div className="countdown-chip">
                  <span className="text-[0.6rem] uppercase tracking-[0.45em] text-muted">
                    Kickoff in
                  </span>
                  <p className="mono-display text-xl text-accent">
                    {String(countdown.days).padStart(2, "0")}d &middot;{" "}
                    {String(countdown.hours).padStart(2, "0")}h &middot;{" "}
                    {String(countdown.minutes).padStart(2, "0")}m
                  </p>
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {HERO_STATS.map((stat) => (
                  <div key={stat.label} className="stat-pill">
                    <p className="mono-display text-3xl text-accent">
                      {stat.value}
                    </p>
                    <p className="text-xs uppercase tracking-[0.35em] text-muted">
                      {stat.label}
                    </p>
                    <p className="text-sm text-muted">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-lab flex flex-col gap-8 p-6 sm:p-9">
              <div className="orbital-card">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-muted">
                    Main Event
                  </p>
                  <p className="mono-display text-xl text-accent">
                    Sat, January 31 · 8AM-4PM
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-muted">
                    Location
                  </p>
                  <p className="mono-display text-xl text-accent">
                    WW-P High School North
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-muted">
                    Snow Date
                  </p>
                  <p className="mono-display text-xl text-accent">February 7</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-muted">
                    Theme Drop
                  </p>
                  <p className="mono-display text-xl text-accent">
                    Revealed live on stage
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-muted">
                    Fuel
                  </p>
                  <p className="mono-display text-xl text-accent">
                    Meals, snacks, & hydration
                  </p>
                </div>
              </div>
              <div className="hero-terminal p-5">
                <div className="flex items-center justify-between text-xs font-semibold text-muted">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span>hsn-hacks/live-log</span>
                </div>
                <div className="hero-terminal-log" aria-live="polite">
                  {visibleLogs.map((line) => (
                    <div key={line.key} className="hero-terminal-log-line">
                      <span>&gt;</span>
                      <div>
                        <span className="mono-display text-[0.6rem] uppercase tracking-[0.45em] text-muted">
                          {line.label}
                        </span>
                        <p className="text-sm text-muted">{line.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-pill">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-muted">
                    Google Classroom
                  </p>
                  <p className="mono-display text-2xl text-accent">
                    {CLASSROOM_CODE}
                  </p>
                </div>
                <span className="pill-badge">Updates shared weekly</span>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={quickRef}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {QUICK_ACTIONS.map((item) => {
            const content = (
              <div className="quick-card flex h-full flex-col gap-4 p-6 transition">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <span className="text-accent">
                    {item.href ? "\u2192" : item.code ? "</>" : ""}
                  </span>
                </div>
                <p className="text-sm text-muted text-balance">
                  {item.description}
                </p>
                {item.code && (
                  <div className="code-chip mt-auto px-4 py-2 text-center text-sm font-semibold">
                    {item.code}
                  </div>
                )}
              </div>
            );

            if (item.external) {
              return (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-full"
                >
                  {content}
                </a>
              );
            }

            if (item.href) {
              return (
                <Link key={item.title} href={item.href} className="h-full">
                  {content}
                </Link>
              );
            }

            return (
              <div key={item.title} className="h-full">
                {content}
              </div>
            );
          })}
        </section>

        <section
          ref={timelineRef}
          className="glass-panel space-y-10 p-6 sm:p-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-muted">
                January 31 Schedule
              </p>
              <h2 className="text-3xl font-semibold">Knight-run timeline</h2>
            </div>
            <div className="chip px-4 py-1 text-xs uppercase tracking-[0.35em]">
              8 hours of magic
            </div>
          </div>
          <div className="timeline-grid flex flex-col gap-8">
            <span className="timeline-axis" aria-hidden="true" />
            {TIMELINE.map((item) => (
              <div key={item.time} className="timeline-item">
                <span className="timeline-dot" aria-hidden="true" />
                <p className="mono-display text-xl text-accent">{item.time}</p>
                <h3 className="text-lg font-semibold">{item.phase}</h3>
                <p className="text-sm text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.85fr,1.15fr] lg:items-center">
          <div className="glass-panel space-y-6 p-6 sm:p-8">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.35em] text-muted">
                Atmosphere
              </p>
              <h2 className="text-3xl font-semibold">
                A bigger, louder, darker knight energy
              </h2>
            </div>
            <p className="text-sm text-muted">
              HSN Hacks is an independent program built by WW-P North students
              for the local community. The event blends practical
              resources(mentorship, workshops, and logistics support) with a
              polished staging so every team, especially first-time
              participants, can focus on learning and delivering a thoughtful
              demo.
            </p>
            <ul className="space-y-4 text-sm text-muted">
              {ATMOSPHERE_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="gradient-dot mt-1" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {EXPERIENCE_TRACKS.map((track) => (
              <div
                key={track.title}
                className="experience-card flex flex-col gap-4"
              >
                <span className="experience-badge">{track.subtitle}</span>
                <h3 className="text-2xl font-semibold">{track.title}</h3>
                <ul className="space-y-3 text-sm text-muted">
                  {track.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span
                        className="gradient-dot mt-1.5"
                        aria-hidden="true"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {CTA_GRID.map((card) => {
            const content = (
              <div className="cta-card flex h-full flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <span className="text-accent">↗</span>
                </div>
                <p className="flex-1 text-sm text-muted">{card.description}</p>
                <span className="text-sm font-semibold text-accent">
                  {card.action}
                </span>
              </div>
            );

            if (card.external) {
              return (
                <a
                  key={card.title}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-full"
                >
                  {content}
                </a>
              );
            }

            return (
              <Link key={card.title} href={card.href} className="h-full">
                {content}
              </Link>
            );
          })}
        </section>

        <div className="cta-ribbon glass-panel flex flex-col gap-4 p-6 text-center sm:p-10">
          <p className="text-sm uppercase tracking-[0.4em] text-muted">
            Ready to disrupt?
          </p>
          <h3 className="text-2xl font-semibold sm:text-3xl">
            Bring your boldest idea to HSN Hacks 2026.
          </h3>
          <p className="text-sm text-muted sm:text-base">
            Mentors, workshops, media support, and operations volunteers are
            ready so you can focus on building. Every team leaves with polished
            assets, pro photos, and the confidence to keep shipping.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://forms.gle/xQNis3JDuenmikqQ8"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn glow-btn inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
            >
              Lock in your team
            </a>
            <Link
              href="/workshops"
              className="secondary-btn inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
            >
              Explore workshops
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
