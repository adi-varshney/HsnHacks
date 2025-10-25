import Accordion from "./accordion";
import NavBar from "../_components/NavBar";

const generalFaqData = [
  {
    question: "What is HSN Hacks?",
    answer:
      "HSN Hacks is a one day hackathon hosted by the High School North CS Club and Girls Who Code. Students work in small teams to build technology projects that solve meaningful problems.",
  },
  {
    question: "When and where is the event?",
    answer:
      "HSN Hacks takes place on January 31 from 8:00 AM to 4:00 PM at West Windsor-Plainsboro High School North. Our snow date is February 7 at the same time and location.",
  },
  {
    question: "When will the 2026 theme be announced?",
    answer:
      "We are keeping the theme under wraps until the morning of the hackathon. Expect a live reveal during opening ceremony to keep the playing field level for every team.",
  },
  {
    question: "What should I expect during the day?",
    answer:
      "The day includes opening ceremonies, ideation time, mentor hours, technical workshops, meals, project build time, judging, and a closing showcase. Expect a fast paced but supportive environment.",
  },
  {
    question: "How do project submissions work?",
    answer:
      "Teams submit their finished projects through DevPost before the submission deadline announced on-site. You will include a project description, screenshots, and a short demo video or live demo.",
  },
  {
    question: "What should I bring to the hackathon?",
    answer:
      "Bring a laptop or tablet you can code on, chargers, headphones, and any hardware you plan to use. Personal snacks and a reusable water bottle are also recommended.",
  },
  {
    question: "Is food provided?",
    answer:
      "Yes. Breakfast snacks, lunch pizza (two slices per participant), and assorted snacks will be available. You are welcome to bring additional food if you have dietary preferences.",
  },
];

const teamsFaqData = [
  {
    question: "Who is eligible to participate?",
    answer:
      "HSN Hacks is strictly for West Windsor Plainsboro highschoolers and middle schoolers. ",
  },
  {
    question: "What if I’ve never coded before?",
    answer:
      "You do not need any prior coding experience. This is a great way to get introduced to programming. Workshops will help you get started with the basics.",
  },
  {
    question: "How will teams work?",
    answer: "Each team can have anywhere from 1-3 members. If you show up with a team, you can compete with them. If not, we can put you in a team.",
  },
  {
    question: "Are you required to have a team to register? ",
    answer:
      "No, you can compete independently. However, having a team gives you a better hackathon experience.",
  },
  {
    question: "Can I team up with students from another grade or school?",
    answer:
      "Yes. As long as everyone attends WW-P North/South or a WW-P middle school, mixed-grade teams are encouraged. We also host a team formation activity during check-in for individuals.",
  },
  {
    question: "What if my teammates need to leave early?",
    answer:
      "Teams should plan to stay for the entire event. If someone must leave, the remaining teammates can continue and submit as long as at least one member is present for judging.",
  },
];

const logisticsFaqData = [
  {
    question: "Will transportation be reimbursed?",
    answer: "No, transportation costs must be accounted for independently.",
  },
  {
    question: "Do I have to come to workshops?",
    answer:
      "No, you do not have to come to workshops. However, it’s highly recommended.",
  },
  {
    question: "Do I have to stay for the full event?",
    answer: "Yes, you must stay for the full event. You cannot leave half way through the event. ",
  },
  {
    question: "Do I need to fill any forms?",
    answer:
      "Yes, please fill out the registration form on the home page and join the Google Classroom. ",
  },
  {
    question: "What time should I arrive and when does check-in close?",
    answer:
      "Check-in opens at 7:30 AM and closes at 8:30 AM. Opening remarks start right after, so please arrive early enough to grab breakfast, settle in, and join a team if needed.",
  },
  {
    question: "Will Wi-Fi and power be available?",
    answer:
      "Yes. The venue provides high-speed Wi-Fi and extension cords, but we ask teams to bring a personal power strip if you plan to plug in multiple devices.",
  },
  {
    question: "Do guardians need to sign any permission slips?",
    answer:
      "Yes. We will email a participation waiver and emergency contact form to parents/guardians after you register. Bring the signed documents to check-in or submit them digitally beforehand.",
  },
];

const judgesFaqData = [
  {
    question: "Will judging be done on site?",
    answer: "Judging will be done on site.",
  },
  {
    question: "Who are the judges?",
    answer: "Our judges include distinguished CS professionals and past alumni.",
  },
  {
    question: "How will they grade projects?",
    answer:
      "Judges will use a rubric to grade projects. They will be given to everyone before the hackathon via our Google Classroom.",
  },
  {
    question: "How long is the judging presentation?",
    answer:
      "Each team has 3 minutes to pitch followed by 2 minutes for Q&A. Judges will visit your table during the expo-style showcase, so bring a laptop to demo your project.",
  },
  {
    question: "What criteria matter the most?",
    answer:
      "We score on impact, technical execution, creativity, and presentation. Even if you are new to coding, a well scoped idea with clear storytelling can score highly.",
  },
];

const prizesFaqData = [
  {
    question: "Are there prizes?",
    answer: "Prizes will be given out to the top three teams out of a cash pool of $300. ",
  },
  {
    question: "Are there participation awards?",
    answer: "No, there are no participation awards. ",
  },
  {
    question: "Do we receive anything just for attending?",
    answer:
      "All hackers receive event stickers, access to workshops, and sponsor swag (while supplies last). Meals, snacks, and mentorship are also provided to every participant.",
  },
  {
    question: "Are there category or sponsor awards?",
    answer:
      "Yes. In addition to the overall top three, sponsors may offer specialty awards such as Best Design, Best Social Impact, or Best First-Time Hacker project. Details will be announced at opening ceremony.",
  },
  {
    question: "How and when are winners announced?",
    answer:
      "Winners are announced on stage during closing ceremony. Prizes are distributed immediately after judging finishes, and we will email results and DevPost links to all participants.",
  },
];

const faqSections = [
  { title: "General FAQ", data: generalFaqData },
  { title: "Registration & Teams", data: teamsFaqData },
  { title: "Logistics", data: logisticsFaqData },
  { title: "Judging", data: judgesFaqData },
  { title: "Prizes", data: prizesFaqData },
];

const FAQ = () => {
  return (
    <div className="pb-24">
      <NavBar />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16">
        <header className="space-y-6 text-center">
          <span className="chip mx-auto inline-flex items-center gap-2 px-5 py-2 text-xs uppercase tracking-[0.4em]">
            FAQ Uplink
          </span>
          <h1 className="text-4xl font-bold sm:text-5xl">
            Everything you need to know before launch day
          </h1>
          <p className="mx-auto max-w-3xl text-base text-muted">
            We pulled together the most common questions about logistics, judging,
            prizes, and how to prepare. Still unsure about something? Reach out to
            the CS Club organizers and we will get you squared away.
          </p>
        </header>

        <section className="grid gap-8 lg:grid-cols-2">
          {faqSections.map((section) => (
            <div
              key={section.title}
              className="glass-card relative overflow-hidden p-8"
            >
              <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
              <h2 className="mb-4 text-2xl font-semibold">
                {section.title}
              </h2>
              <div>
                {section.data.map((item) => (
                  <Accordion
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default FAQ;

