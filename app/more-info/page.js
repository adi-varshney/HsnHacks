import NavBar from "../_components/NavBar";

const overview = [
  ["Date", "January 30, 2027"],
  ["Theme", "Environmental protection"],
  ["Team size", "Up to 4 people"],
  ["Prizes", "$500+"],
];

export const metadata = {
  title: "Event Details | HSN Hacks 2027",
  description: "Date, theme, eligibility, team size, and prizes for HSN Hacks 2027.",
};

export default function Info() {
  return (
    <>
      <NavBar />
      <main className="inner-main section-wrap">
        <header className="inner-hero">
          <p className="section-kicker">/ HSN HACKS 2027</p>
          <h1>Event <em>details.</em></h1>
          <p>Everything you need to know about the event so far, from who can join to what you&apos;ll build.</p>
        </header>

        <div className="info-columns">
          <section className="info-card">
            <div className="info-card-head"><span className="mini-label">01 / OVERVIEW</span><h2>At a glance</h2></div>
            <dl>{overview.map(([term, detail]) => (
              <div className="info-row" key={term}><dt>{term}</dt><dd>{detail}</dd></div>
            ))}</dl>
          </section>
          <section className="info-card eligibility-card">
            <div className="info-card-head"><span className="mini-label">02 / ELIGIBILITY</span><h2>Who can participate?</h2></div>
            <p><strong>All WW-P (West Windsor-Plainsboro) district middle and high school students are welcome!</strong></p>
            <p>Students from other New Jersey schools or clubs may participate; please contact the event organizers for further information.</p>
          </section>
        </div>

        <section className="details-section">
          <div><span className="mini-label">03 / MORE TO COME</span><h2>More event information</h2></div>
          <p>Details for registration, the event guide, workshops, venue, hours, schedule, judging, food, and transportation are TBD. We&apos;ll add them here as they&apos;re confirmed.</p>
        </section>
      </main>
      <footer className="site-footer section-wrap"><span>HSN HACKS © 2027</span><span>ENVIRONMENTAL PROTECTION</span></footer>
    </>
  );
}
