import Accordion from "./accordion";
import NavBar from "../_components/NavBar";

const generalFaqData = [
  {
    question: "What is HSN Hacks?",
    answer:
      "HSN Hacks is a coding competition where students can create solutions to problems through technology, run by students from the High School North CS Club and Girls Who Code.",
  },
  {
    question: "When is HSN Hacks?",
    answer:
      "Jan 18th from 8 AM to 4 PM",
  },
  {
    question: "Is this hackathon purely coding-based?",
    answer: "Yes, this hackathon is purely coding based.",
  },
  {
    question: "Where can I find an event schedule?",
    answer:
      "An event schedule has been released it is available on our Google Classroom. Join using the link on the homepage.",
  },
  {
    question: "What will I build? ",
    answer: "Build an app, website, or any sort of software that addresses our theme of social justice."
  },
  {
    question: "How will I submit?",
    answer: "All submissions will take place through our DevPost.",
  },
  {
    question: "What should I bring to the hackathon?",
    answer:
      "You should bring a personal laptop or something to code on, a charger, and snacks you enjoy.",
  },
  {
    question: "Is food provided?",
    answer: "Two slices of pizza per person for lunch will be provided. Breakfast and dinner will not be provided. Participants also are free to bring their own food and snacks. Snacks such as chips will be provided aswell.",
  },
  {
    question: "Is this hackathon purely coding-based?",
    answer: "Yes, this hackathon is purely coding based. ",
  },
];

const teamsFaqData = [
  {
    question: "Who is eligible to participate?",
    answer:
      "HSN Hacks is strictly for West Windsor Plainsboro highschoolers and middle schoolers. ",
  },
  {
    question: "What if I've never coded before?",
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
];

const logisticsFaqData = [
  {
    question: "Will transportation be reimbursed?",
    answer: "No, transportation costs must be accounted for independently.",
  },
  {
    question: "Do I have to come to workshops?",
    answer:
      "No, you do not have to come to workshops. However, it's highly recommended.",
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
];

const judgesFaqData = [
  {
    question: "Will judging be done on site?",
    answer: "Judging will be done on site.",
  },
  {
    question: "Who are the judges?",
    answer: "Our judges include distinguished CS professionals and past alumini. ",
  },
  {
    question: "How will they grade projects?",
    answer:
      "Judges will use a rubric to grade projects. They will be given to everyone before the hackathon via our Google Classroom.",
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
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            Frequently Asked Questions
          </p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Everything you need to know before launch day
          </h1>
          <p className="mx-auto max-w-3xl text-base text-slate-300">
            We pulled together the most common questions about logistics, judging,
            prizes, and how to prepare. Still unsure about something? Reach out to
            the CS Club organizers and we’ll get you squared away.
          </p>
        </header>

        <section className="grid gap-8 lg:grid-cols-2">
          {faqSections.map((section) => (
            <div key={section.title} className="glass-card p-8">
              <h2 className="mb-4 text-2xl font-semibold text-white">
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
