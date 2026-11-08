import Link from "next/link";
import NavBar from "../_components/NavBar";

export const metadata = {
  title: "Workshops | HSN Hacks 2027",
  description: "Workshop information for HSN Hacks 2027.",
};

export default function WorkshopsPage() {
  return (
    <>
      <NavBar />
      <main className="inner-main section-wrap">
        <header className="inner-hero">
          <p className="section-kicker">/ LEARN & BUILD</p>
          <h1>Workshops<span className="punctuation">.</span></h1>
          <p>Explore the workshop program for HSN Hacks 2027.</p>
        </header>
        <section className="pending-panel">
          <div className="pending-glyph" aria-hidden="true">✳</div>
          <div>
            <span className="mini-label">2027 PROGRAM</span>
            <h2>Sessions to be announced</h2>
            <p>Workshop topics, speakers, and times are to be decided. We&apos;ll share the lineup here.</p>
            <Link href="/more-info" className="text-link">Event details ↗</Link>
          </div>
        </section>
      </main>
      <footer className="site-footer section-wrap"><span>HSN HACKS © 2027</span><span>ENVIRONMENTAL PROTECTION</span></footer>
    </>
  );
}
