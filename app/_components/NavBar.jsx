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
            data-mode={isDark ? "dark" : "light"}
          >
            <span className="theme-toggle-track" aria-hidden="true">
              <span className="theme-toggle-icon theme-toggle-icon--dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              </span>
              <span className="theme-toggle-icon theme-toggle-icon--light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              </span>
            </span>
            <span className="theme-toggle-thumb" aria-hidden="true" />
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
