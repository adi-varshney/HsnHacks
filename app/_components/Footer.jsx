import Link from "next/link";

const contacts = [
  { club: "HSN CS Club", email: "hsncsclub@wwprsd.org" },
  { club: "Girls Who Code", email: "hsn.girlswhocode@wwprsd.org" },
];
const emailBothClubs = `mailto:${contacts.map(({ email }) => email).join(",")}?subject=HSN%20Hacks%202027%20Question`;

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-layout">
        <div className="footer-intro">
          <p className="footer-eyebrow">HSN HACKS / 2027</p>
          <h2>Contact the <em>organizers.</em></h2>
          <p>Select either card to email both the HSN CS Club and Girls Who Code.</p>
        </div>
        <div className="footer-contact-grid">
          {contacts.map(({ club, email }, index) => (
            <a className="footer-contact-card" href={emailBothClubs} key={email}>
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
