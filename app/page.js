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
            <div className="chip inline-flex items-center gap-3 px-4 py-1 text-xs uppercase tracking-[0.35em]">
              HSN CS Club &times; Girls Who Code
            </div>
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.4em] text-muted">
                2026 Hackathon
              </p>
              <h1 className="hero-title mono-display text-4xl leading-tight sm:text-6xl lg:text-7xl">
                <span className="hero-title-text">
                  {"HSN Hacks".substring(0, typedChar)}
                </span>
                <span className="hero-title-cursor text-accent">|</span>
              </h1>
            </div>
            <p className="text-muted max-w-xl text-lg">
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
                className="primary-btn inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
              >
                Register your team
              </a>
              <Link
                href="/more-info"
                className="secondary-btn inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
              >
                Learn more
              </Link>
            </div>
          </div>

          <div className="terminal-panel relative overflow-hidden p-8">
            <div className="flex items-center justify-between text-xs font-medium text-muted">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span>hsn-hacks/terminal</span>
            </div>
            <div className="mt-6 space-y-6 text-sm">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-muted">
                  When
                </p>
                <p className="mono-display text-2xl text-accent">
                  January 31 &middot; 8AM - 4PM
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
                  Where
                </p>
                <p className="mono-display text-2xl text-accent">
                  WW-P High School North
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-muted">
                  Theme
                </p>
                <p className="mono-display text-2xl text-accent">
                  Revealed Live!
                </p>
              </div>
            </div>
            <div className="panel-strong mt-8 p-4 text-xs text-muted">
              <p className="font-semibold text-accent">1st place prize pool</p>
              <p className="text-muted">$300 cash + sponsor swag + mentorship opportunities</p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ctaItems.map((item) => {
            const content = (
              <div className="card-tile flex h-full flex-col gap-4 p-6 transition">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <span className="text-accent">
                    {item.href ? "\u2192" : item.code ? "</>" : ""}
                  </span>
                </div>
                <p className="text-sm text-muted text-balance">{item.description}</p>
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
      </main>
    </div>
  );
}




