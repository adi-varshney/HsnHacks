"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/more-info", label: "FAQ" },
  { href: "/team", label: "Our Team" },
  { href: "/workshops", label: "Workshops" },
  { href: "/sponsorships", label: "Sponsors" },
];

export default function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="nav-shell sticky top-0 z-50">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="logo-ring relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full">
            <Image
              src="/favicon.ico"
              alt="HSN Hacks favicon"
              width={48}
              height={48}
              className="h-8 w-8"
              priority
              unoptimized
            />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="nav-title text-lg font-semibold tracking-wide">HSN Hacks</span>
            <span className="nav-subtitle">2026</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link relative">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-between gap-3 md:justify-end">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <span
              aria-hidden="true"
              className={`theme-toggle-thumb ${isDark ? "dark" : ""}`}
            />
            <span className="theme-toggle-label">
              <span>DM</span>
              <span>LM</span>
            </span>
          </button>

          <nav className="flex items-center gap-4 text-xs font-medium md:hidden">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link relative">
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe2fPYfUYEG-6bziI_BejrhoOyQfn4ff2hDg0y7QAU9imfeSg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="register-btn px-6 py-2 text-sm font-semibold"
          >
            Register
          </a>
        </div>
      </div>
    </header>
  );
}
