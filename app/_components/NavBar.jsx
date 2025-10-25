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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-md">
            <Image
              src="/favicon.ico"
              alt="HSN Hacks favicon"
              width={48}
              height={48}
              className="h-8 w-8"
              priority
            />
          </span>
          <span className="text-lg font-semibold tracking-wide text-slate-100">
            HSN Hacks
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
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
                className="transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe2fPYfUYEG-6bziI_BejrhoOyQfn4ff2hDg0y7QAU9imfeSg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cyan-500/90 px-5 py-2 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-cyan-400"
          >
            Register
          </a>
        </div>
      </div>
    </header>
  );
}
