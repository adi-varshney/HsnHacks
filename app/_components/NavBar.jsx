import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/more-info", label: "FAQ" },
  { href: "/team", label: "Our Team" },
  { href: "/workshops", label: "Workshops" },
  { href: "/sponsorships", label: "Sponsors" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-500/10 bg-[rgba(1,2,5,0.92)] backdrop-blur-2xl shadow-[0_5px_35px_rgba(14,165,233,0.08)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-cyan-400/20 bg-[rgba(8,12,24,0.8)] shadow-[0_0_25px_rgba(14,165,233,0.35)]">
            <Image
              src="/favicon.ico"
              alt="HSN Hacks favicon"
              width={48}
              height={48}
              className="h-8 w-8"
              priority
            />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-semibold tracking-wide text-white">
              HSN Hacks
            </span>
            <span className="text-xs uppercase tracking-[0.4em] text-cyan-400/80">
              2026
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative transition-colors hover:text-cyan-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:via-sky-500 after:to-transparent after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-between gap-3 md:justify-end">
          <nav className="flex items-center gap-4 text-xs font-medium text-slate-300 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative transition-colors hover:text-cyan-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:via-sky-500 after:to-transparent after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe2fPYfUYEG-6bziI_BejrhoOyQfn4ff2hDg0y7QAU9imfeSg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-full border border-cyan-400/40 px-6 py-2 text-sm font-semibold text-cyan-100 shadow-[0_10px_35px_rgba(14,165,233,0.18)] transition hover:border-cyan-300/70 hover:text-white"
          >
            <span className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/60 via-sky-500/70 to-cyan-400/50 opacity-60 transition group-hover:opacity-100" />
            Register
          </a>
        </div>
      </div>
    </header>
  );
}
