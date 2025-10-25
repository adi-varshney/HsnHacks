"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import NavBar from "./_components/NavBar";

export default function Home() {
  const [typedChar, setTypedChar] = useState(0);
  const ctaItems = [
    {
      title: "More Info",
      description: "Dive into logistics, rules, and what to expect throughout the day.",
      href: "/more-info",
    },
    {
      title: "Registration Form",
      description: "Secure your spot on the roster before seats fill up.",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSe2fPYfUYEG-6bziI_BejrhoOyQfn4ff2hDg0y7QAU9imfeSg/viewform",
      external: true,
    },
    {
      title: "Meet the Team",
      description: "Get to know the student organizers behind HSN Hacks.",
      href: "/team",
    },
    {
      title: "Workshops",
      description: "Preview the technical sessions designed for every skill level.",
      href: "/workshops",
    },
    {
      title: "Sponsors",
      description: "See the partners powering our inaugural hackathon.",
      href: "/sponsorships",
    },
    {
      title: "Google Classroom",
      description: "Join with the code",
      code: "-------",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTypedChar((typedChar) => typedChar + 1);
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="pb-24">
      <NavBar />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-16">
        <section className="grid gap-12 md:grid-cols-[1.25fr,0.75fr] md:items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-[rgba(12,16,28,0.85)] px-4 py-1 text-xs uppercase tracking-[0.35em] text-cyan-200">
              HSN CS Club &times; Girls Who Code
            </div>
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
                2026 Hackathon
              </p>
              <h1 className="mono-display text-4xl leading-tight text-white sm:text-6xl lg:text-7xl">
                {"HSN Hacks".substring(0, typedChar)}
                <span className="animate-pulse text-cyan-400">|</span>
              </h1>
            </div>
            <p className="max-w-xl text-lg text-slate-300">
              Eight hours of building, shipping, and pitching software that tackles
              real community problems. Hosted by the High School North CS Club in
              partnership with our Girls Who Code chapter, HSN Hacks returns for its
              second year welcoming both seasoned hackers and first timers—mentors,
              workshops, food, and swag are all lined up.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe2fPYfUYEG-6bziI_BejrhoOyQfn4ff2hDg0y7QAU9imfeSg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_10px_35px_rgba(14,165,233,0.35)] transition hover:from-cyan-400 hover:via-cyan-500 hover:to-sky-400"
              >
                Register your team
              </a>
              <Link
                href="/more-info"
                className="rounded-full border border-cyan-400/30 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/70 hover:text-white"
              >
                Learn more
              </Link>
            </div>
          </div>

          <div className="terminal-panel relative overflow-hidden p-8">
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cyan-500/20 via-transparent to-transparent blur-3xl" />
            <div className="flex items-center justify-between text-xs font-medium text-slate-400">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span>hsn-hacks/terminal</span>
            </div>
            <div className="mt-6 space-y-6 text-sm">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                  When
                </p>
                <p className="mono-display text-2xl text-cyan-100">
                  January 31, 8AM - 4PM
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                  Snow Date
                </p>
                <p className="mono-display text-xl text-cyan-100">February 7</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                  Where
                </p>
                <p className="mono-display text-2xl text-cyan-100">
                  WW-P High School North
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                  Theme
                </p>
                <p className="mono-display text-2xl text-cyan-100">
                  Revealed Live!
                </p>
              </div>
            </div>
            <div className="mt-8 rounded-xl border border-cyan-400/15 bg-[rgba(5,8,16,0.9)] p-4 text-xs text-slate-300">
              <p className="font-semibold text-cyan-200">1st place prize pool</p>
              <p>$300 cash + sponsor swag + mentorship opportunities</p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ctaItems.map((item) => {
            const content = (
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-cyan-400/10 bg-[rgba(7,10,18,0.85)] p-6 shadow-[0_0_0_rgba(0,0,0,0)] transition hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.18)]">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                  <span className="text-cyan-300">
                    {item.href ? "\u2192" : item.code ? "</>" : ""}
                  </span>
                </div>
                <p className="text-sm text-slate-300 text-balance">{item.description}</p>
                {item.code && (
                  <div className="mt-auto rounded-lg border border-cyan-400/40 bg-[rgba(2,4,10,0.9)] px-4 py-2 text-center font-semibold text-cyan-300">
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
      </main>
    </div>
  );
}



