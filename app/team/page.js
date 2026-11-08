import Image from "next/image";
import Footer from "../_components/Footer";
import NavBar from "../_components/NavBar";

const departments = [
  {
    name: "Leads",
    description: "Setting the vision, scope, and overall experience for HSN Hacks.",
    members: [
      { name: "Rajveer Dharkar", role: "Hackathon Director" },
      { name: "Karon Joseph Pulikottil", role: "Hackathon Director" },
      { name: "Shriya Pachgade", role: "Hackathon Director" },
    ],
  },
  {
    name: "Operations",
    description: "Coordinating venue operations, check-in, judging, workshops, curriculum, guest speakers, and day-of flow.",
    members: [
      { name: "Jahnvi Joshi", role: "Department Leader" },
      { name: "Adi Varshney", role: "Member" },
      { name: "Kavin Muthiah", role: "Member" },
      { name: "Prerana Goteti", role: "Member" },
    ],
  },
  {
    name: "Sponsorship",
    description: "Partner outreach, sponsor relations, and prize procurement.",
    members: [
      { name: "Samuel Holt", role: "Department Director" },
      { name: "Jenil Thakkar", role: "Member" },
      { name: "Nicholas Negoita", role: "Member" },
      { name: "Swathi Venkatesh", role: "Member" },
    ],
  },
  {
    name: "Outreach",
    description: "Marketing, communications, and community engagement.",
    members: [
      { name: "Ishaan Cherukuri", role: "Department Director" },
      { name: "Prem Patel", role: "Member" },
      { name: "Prerana Goteti", role: "Member" },
      { name: "Olympia Xu", role: "Member" },
      { name: "Ayse Sakli", role: "Member" },
    ],
  },
];

export const metadata = {
  title: "Our Team | HSN Hacks 2027",
  description: "Meet the HSN Hacks 2027 student organizing team.",
};

export default function Team() {
  return (
    <>
      <NavBar />
      <main className="inner-main section-wrap team-main">
        <header className="team-intro">
          <div className="club-logo club-logo-gwc">
            <Image src="/girlsWhoCode.png" alt="Girls Who Code logo" width={160} height={160} priority />
          </div>
          <div className="team-intro-copy">
            <p className="section-kicker">/ ORGANIZING CREW</p>
            <h1>Meet the students <em>building HSN Hacks.</em></h1>
            <p>From securing sponsors to shaping workshops, this cross-club team from the CS Club and Girls Who Code is bringing the next HSN Hacks to life.</p>
          </div>
          <div className="club-logo club-logo-cs">
            <Image src="/CsClub.png" alt="HSN CS Club logo" width={180} height={180} priority />
          </div>
        </header>

        <div className="team-departments">
          {departments.map((department, index) => (
            <section className="department" key={department.name}>
              <div className="department-heading">
                <span className="department-index">0{index + 1} / 04</span>
                <div>
                  <h2>{department.name}</h2>
                  <p>{department.description}</p>
                </div>
                <span className="member-count">{department.members.length} members</span>
              </div>
              <div className="department-members">
                {department.members.map((member) => (
                  <article className="member-card" key={member.name}>
                    <span className="member-card-mark" aria-hidden="true">↗</span>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
