import Link from "next/link";

const contacts = [
  { club: "HSN CS Club", email: "hsncsclub@wwprsd.org" },
  { club: "Girls Who Code", email: "hsn.girlswhocode@wwprsd.org" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-layout">
        <div className="footer-intro">
          <p className="footer-eyebrow">HSN HACKS / 2027</p>
          <h2>Contact the <em>organizers.</em></h2>
          <p>For questions about the event, reach out to either club.</p>
        </div>
        <div className="footer-contact-grid">
          {contacts.map(({ club, email }, index) => (
            <a className="footer-contact-card" href={`mailto:${email}`} key={email}>
              <span className="footer-card-arrow" aria-hidden="true">↗</span>
              <small>0{index + 1} / 02</small>
              <b>{club}</b>
              <strong>{email}</strong>
            </a>
          ))}
        </div>
        <div className="footer-bottom">
          <strong>© 2027 HSN Hacks</strong>
          <Link href="/more-info">Event details ↗</Link>
          <small>Code for what comes next.</small>
        </div>
      </div>
    </footer>
  );
}
