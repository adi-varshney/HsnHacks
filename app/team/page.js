import Image from "next/image";
import NavBar from "../_components/NavBar";

const departments = [
  {
    name: "Leads",
    description: "Setting the vision, scope, and overall experience for HSN Hacks.",
    members: [
      { name: "Akshat Mehta", role: "Hackathon Director" },
      { name: "Aliza Borker", role: "Hackathon Director" },
    ],
  },
  {
    name: "Logistics",
    description: "Coordinating venue operations, check-in, judging, and day-of flow.",
    members: [
      { name: "Rajveer Dharkar", role: "Department Leader" },
      { name: "Adi Varshney", role: "Member" },
      { name: "Kavin Muthiah", role: "Member" },
      { name: "Samuel Holt", role: "Member" },
      { name: "Ishaan Indukuri", role: "Member" },
    ],
  },
  {
    name: "Sponsorship",
    description: "Partner outreach, sponsor relations, and prize procurement.",
    members: [
      { name: "Pragnya Goteti", role: "Department Director" },
      { name: "Simrun Sabhlok", role: "Member" },
      { name: "Sally Mundia", role: "Member" },
    ],
  },
  {
    name: "Outreach",
    description: "Marketing, communications, and community engagement.",
    members: [
      { name: "Saanvi Vezzu", role: "Department Director" },
      { name: "Prathyush Yeturi", role: "Member" },
      { name: "Karon Joseph", role: "Member" },
    ],
  },
  {
    name: "Curriculum",
    description: "Workshop content, mentor playbooks, and educational resources.",
    members: [
      { name: "Ayushi Kagarana", role: "Department Director" },
      { name: "Shriya Pachgade", role: "Member" },
      { name: "Tanya Agrawal", role: "Member" },
    ],
  },
];

export default function Team() {
  return (
    <div className="pb-24">
      <NavBar />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16">
        <header className="grid gap-8 text-center md:grid-cols-[1fr,auto,1fr] md:text-left">
          <div className="flex justify-center md:justify-end">
            <Image
              src="/girlsWhoCode.png"
              alt="Girls Who Code"
              width={220}
              height={60}
              className="h-12 w-auto opacity-80 md:h-16"
              priority
            />
          </div>
          <div className="space-y-4">
            <span className="chip inline-flex items-center gap-2 px-5 py-2 text-xs uppercase tracking-[0.4em]">
              Organizing Crew
            </span>
            <h1 className="text-4xl font-semibold sm:text-5xl">
              Meet the students building HSN Hacks
            </h1>
            <p className="text-muted text-base md:max-w-xl">
              From securing sponsors to crafting workshops, this cross-club team
              from the CS Club and Girls Who Code is orchestrating every detail to
              make our second hackathon even more unforgettable.
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <Image
              src="/CsClub.png"
              alt="CS Club"
              width={220}
              height={60}
              className="h-12 w-auto opacity-80 md:h-16"
              priority
            />
          </div>
        </header>

        <section className="grid gap-10">
          {departments.map((dept) => (
            <div key={dept.name} className="glass-card relative overflow-hidden p-6 sm:p-8">
              <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-3xl font-semibold">{dept.name}</h2>
                  <p className="mt-2 max-w-2xl text-sm text-muted">
                    {dept.description}
                  </p>
                </div>
                <div className="chip px-4 py-2 text-xs uppercase tracking-[0.3em]">
                  {dept.members.length} members
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {dept.members.map((member) => (
                  <div
                    key={member.name}
                    className="panel-strong p-5"
                  >
                    <h3 className="text-lg font-semibold">
                      {member.name}
                    </h3>
                    <p className="text-sm text-accent">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

