import Image from "next/image";
import NavBar from "../_components/NavBar";

const sponsors = [
  {
    name: "Party City",
    logo: "/partycity.png",
    url: "https://www.partycity.com/",
    blurb: "Supplying decor and energy to turn our venue into a true hacker hub.",
  },
  {
    name: "Art of Problem Solving",
    logo: "/aops.png",
    url: "https://artofproblemsolving.com/",
    blurb: "Fueling advanced problem solving and creativity for every attendee.",
  },
  {
    name: ".xyz Domains",
    logo: "/xyz.jpeg",
    url: "https://gen.xyz/",
    blurb: "Giving teams a launchpad on the web with free domains and resources.",
  },
  {
    name: "Jane Street",
    logo: "/jane-street.png",
    url: "https://www.janestreet.com/",
    blurb: "Supporting the next generation of technologists and innovators.",
  },
];

export default function Sponsorships() {
  return (
    <div className="pb-24">
      <NavBar />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16">
        <header className="space-y-6 text-center">
          <span className="chip mx-auto inline-flex items-center gap-2 px-5 py-2 text-xs uppercase tracking-[0.4em]">
            Partners & Backers
          </span>
          <h1 className="text-4xl font-semibold sm:text-5xl">
            Meet the sponsors powering HSN Hacks
          </h1>
          <p className="mx-auto max-w-3xl text-base text-muted">
            These companies and organizations believe in student builders. Their
            support covers prizes, food, swag, and the resources that make the day
            unforgettable.
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-2">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group card-tile relative overflow-hidden rounded-3xl p-8 transition"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/15 opacity-0 transition group-hover:opacity-100" />
              <div className="flex h-full flex-col gap-6">
                <div className="flex items-center gap-4">
                  <span className="panel-strong flex h-16 w-16 items-center justify-center rounded-2xl p-0 shadow-none">
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      width={64}
                      height={64}
                      className="h-12 w-24 object-contain"
                    />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold">
                      {sponsor.name}
                    </h2>
                    <p className="text-xs uppercase tracking-[0.3em] opacity-80 text-accent">
                      Official Sponsor
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted">{sponsor.blurb}</p>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  Visit sponsor site <span aria-hidden="true">?</span>
                </span>
              </div>
            </a>
          ))}
        </section>

        <div className="glass-card p-8 text-center">
          <h2 className="text-2xl font-semibold">
            Interested in sponsoring?
          </h2>
          <p className="mt-3 text-sm text-muted">
            We’re still onboarding partners for mentorship, prizes, and student
            resources. Reach out to the CS Club for our sponsorship deck and
            benefits.
          </p>
          <a
            href="mailto:hsnhackathon@gmail.com"
            className="secondary-btn mt-6 inline-flex items-center justify-center px-5 py-2 text-sm font-semibold"
          >
            Email the organizers
          </a>
        </div>
      </main>
    </div>
  );
}

