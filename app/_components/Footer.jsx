import Link from "next/link";

const contacts = [
  { club: "HSN CS Club", email: "hsncsclub@wwprsd.org" },
  { club: "Girls Who Code", email: "hsn.girlswhocode@wwprsd.org" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-grid">
        <div className="footer-brand">
          <strong>HSN HACKS / 2027</strong>
          <p>Code for what comes next.</p>
        </div>
        <div className="footer-contacts">
          <p className="footer-heading">CONTACT THE ORGANIZERS</p>
          {contacts.map(({ club, email }) => (
            <a className="footer-contact-link" href={`mailto:${email}`} key={email}>
              <b>{club}</b>
              <small>{email}</small>
            </a>
          ))}
        </div>
        <div className="footer-end">
          <Link href="/more-info">EVENT DETAILS ↗</Link>
          <small>© 2027 HSN Hacks</small>
        </div>
      </div>
    </footer>
  );
}
