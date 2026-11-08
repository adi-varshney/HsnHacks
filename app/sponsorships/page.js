import Image from "next/image";
import NavBar from "../_components/NavBar";

export default function Sponsorships() {
  return (
    <>
      <NavBar />
      <main className="inner-main section-wrap">
        <header className="inner-hero">
          <p className="section-kicker">/ PARTNERS</p>
          <h1>Sponsors<span className="punctuation">.</span></h1>
          <p>Partners supporting student builders at HSN Hacks.</p>
        </header>
        <section className="sponsor-layout">
          <article className="sponsor-card">
            <span className="mini-label">FEATURED PARTNER</span>
            <div className="sponsor-logo"><Image src="/xyz.jpeg" alt=".xyz Domains logo" width={220} height={110} className="sponsor-image" /></div>
            <h2>.xyz Domains</h2>
            <a className="text-link" href="https://gen.xyz/" target="_blank" rel="noopener noreferrer">Visit .xyz Domains ↗</a>
          </article>
          <aside className="sponsor-aside">
            <span className="mini-label">HSN HACKS / 2027</span>
            <h2>More partners <em>to come.</em></h2>
            <p>Additional sponsor information will be shared here.</p>
            <div className="aside-lines" aria-hidden="true"><span/><span/><span/></div>
          </aside>
        </section>
      </main>
      <footer className="site-footer section-wrap"><span>HSN HACKS © 2027</span><span>ENVIRONMENTAL PROTECTION</span></footer>
    </>
  );
}
