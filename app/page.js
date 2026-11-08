import Link from "next/link";
import Footer from "./_components/Footer";
import NavBar from "./_components/NavBar";

const facts = [
  ["DATE", "JAN 30, 2027", "Event day"],
  ["THEME", "ENVIRONMENTAL PROTECTION", "2027 challenge"],
  ["TEAM SIZE", "UP TO 4", "People per team"],
  ["PRIZES", "$500+", "Prize pool"],
];

const participation = [
  ["01", "WW-P students", "All district middle and high school students are welcome."],
  ["02", "Other NJ schools & clubs", "Contact the event organizers for participation details."],
  ["03", "Registration", "The sign-up form will be shared here when available."],
];

export default function Home() {
  return <>
    <NavBar />
    <main>
      <section className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow"><span className="signal" /> HSN HACKS / 2027 <span className="eyebrow-line" /> THE NEXT CHAPTER</p>
          <h1>Code for <em>what comes next.</em></h1>
          <p className="hero-lede">A student hackathon for ideas that protect the environment. Bring your curiosity, form a team, and build something that could make a difference.</p>
          <div className="hero-actions"><Link href="/more-info" className="button button-primary">Explore the event <span aria-hidden="true">↗</span></Link><Link href="/team" className="hero-secondary-link">Meet the team <span aria-hidden="true">↗</span></Link></div>
          <div className="hero-date">JAN 30 <span>—</span> 2027</div>
        </div>
        <div className="hero-art" role="img" aria-label="Graphic of a growing plant over land and water contour lines">
          <div className="art-topline"><span>FIELD NOTE 001</span><span>HSN / 27</span></div>
          <svg viewBox="0 0 600 560" className="field-illustration" aria-hidden="true">
            <defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#305044" /></pattern><linearGradient id="leaf" x2="1" y2="1"><stop stopColor="#b8df8c"/><stop offset="1" stopColor="#3a8a68"/></linearGradient></defs>
            <rect width="600" height="560" fill="url(#grid)" opacity=".45"/>
            <g fill="none" stroke="#4f8a7b" strokeWidth="1.3" opacity=".8"><path d="M-50 405c130-110 240-25 343-95s165-188 355-147"/><path d="M-50 432c130-110 240-25 343-95s165-188 355-147"/><path d="M-50 459c130-110 240-25 343-95s165-188 355-147"/><path d="M-50 486c130-110 240-25 343-95s165-188 355-147"/><path d="M-50 513c130-110 240-25 343-95s165-188 355-147"/><path d="M-50 540c130-110 240-25 343-95s165-188 355-147"/></g>
            <circle cx="320" cy="240" r="167" fill="#0d2525" stroke="#52846f"/><circle cx="320" cy="240" r="136" fill="none" stroke="#628f78" strokeDasharray="4 9"/><circle cx="320" cy="240" r="105" fill="none" stroke="#4b7b67"/>
            <path d="M320 378V230" stroke="#d0edaa" strokeWidth="5" strokeLinecap="round"/><path d="M320 286c-74 4-99-37-94-77 60 0 96 32 94 77Z" fill="url(#leaf)" stroke="#d0edaa" strokeWidth="2"/><path d="M320 251c0-67 40-108 95-110-1 59-39 104-95 110Z" fill="url(#leaf)" stroke="#d0edaa" strokeWidth="2"/>
            <path d="M317 367c-36-12-75-10-104 3m108-3c35-16 72-16 111-3" fill="none" stroke="#b8df8c" strokeWidth="2"/><g fill="none" stroke="#70bdbb" strokeWidth="2"><path d="M160 416c88-21 235-17 323 12"/><path d="M140 444c105-24 271-20 366 13"/><path d="M123 475c115-29 305-22 398 15"/></g>
            <path d="M72 82h60m-60 0v60m455 322h-60m60 0v-60" fill="none" stroke="#a8d890" strokeWidth="2"/>
          </svg>
          <div className="art-bottomline"><span>PROTECT / RESTORE / REIMAGINE</span><span>IDEAS TAKE ROOT</span></div>
        </div>
      </section>

      <section className="facts-band" aria-label="Event at a glance"><div className="section-wrap facts-grid">{facts.map(([label,value,note]) => <div className="fact" key={label}><span>{label}</span><strong>{value}</strong><small>{note}</small></div>)}</div></section>

      <section className="section-wrap split-section theme-section"><div><p className="section-kicker">/ 01 — THE CHALLENGE</p><h2>Build with the <em>planet</em> in mind.</h2></div><div className="section-copy"><p>Environmental protection is the theme for HSN Hacks 2027. We&apos;re inviting students to explore problems they care about and turn ideas into projects.</p><p>Whether you&apos;re drawn to technology, design, or research, the challenge is to think creatively about a healthier world. The event guide will provide the full rules and judging details.</p><Link className="text-link" href="/more-info">Explore event details ↗</Link></div></section>

      <section className="section-wrap planning-section"><div className="section-heading"><div><p className="section-kicker">/ 02 — EVENT OVERVIEW</p><h2>The essentials.</h2></div><span className="draft-stamp">HSN HACKS / 2027</span></div><div className="planning-grid"><article className="plan-feature"><span className="plan-symbol">04</span><div><h3>Build together</h3><p>Bring a team of up to four people and tackle an environmental challenge together.</p></div></article><article className="plan-feature"><span className="plan-symbol">$</span><div><h3>Make an impact</h3><p>Compete for a prize pool of $500+. Award categories and judging details will appear in the event guide.</p></div></article></div></section>

      <section className="section-wrap split-section updates-section"><div><p className="section-kicker">/ 03 — PARTICIPATION</p><h2>Bring your <em>point of view.</em></h2><p>HSN Hacks brings students together across schools and experience levels.</p></div><div className="updates-list">{participation.map(([number,label,detail]) => <div className="update-row" key={number}><span>{number}</span><strong>{label}</strong><p>{detail}</p><span aria-hidden="true">↗</span></div>)}</div></section>

      <section className="section-wrap close-section"><span className="close-mark" aria-hidden="true">✳</span><p className="section-kicker">HSN HACKS 2027</p><h2>Small teams.<br/><em>Big possibilities.</em></h2><p>Join us January 30, 2027. Registration details and the full event guide will be shared here.</p><Link href="/team" className="button button-light">Meet the 2027 team <span aria-hidden="true">↗</span></Link></section>
    </main>
    <Footer />
  </>;
}
