"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [["/more-info","Event details"],["/team","Our team"],["/workshops","Workshops"],["/sponsorships","Sponsors"]];

export default function NavBar() {
  const pathname = usePathname();
  return <header className="site-header"><div className="section-wrap nav-inner">
    <Link href="/" className="wordmark" aria-label="HSN Hacks 2027 home"><span className="wordmark-icon"><Image src="/favicon.ico" width={42} height={42} alt="" unoptimized /></span><span>HSN<span className="wordmark-sub">HACKS / 27</span></span></Link>
    <nav className="main-nav" aria-label="Main navigation">{links.map(([href,label]) => <Link href={href} key={href} className={pathname === href ? "active" : ""} aria-current={pathname === href ? "page" : undefined}>{label}</Link>)}</nav>
    <span className="nav-status"><span className="signal" /> JANUARY 30, 2027</span>
  </div></header>;
}
