import Accordion from "./accordion";

const generalFaqData = [
  {
    question: "What is HSN Hacks?",
    answer:
      "HSN Hacks is a coding competition where students can create solutions to problems through technology, run by students from the High School North CS Club and Girls Who Code.",
  },
  {
    question: "When is HSN Hacks?",
    answer:
      "A date will be provided in the coming weeks. It will most likely take place in the fall, around October or November.",
  },
  {
    question: "Is this hackathon purely coding-based?",
    answer: "Yes, this hackathon is purely coding based.",
  },
  {
    question: "Where can I find an event schedule?",
    answer:
      "An event schedule will be released shortly in the coming weeks. It will be available on our Discord Server. Join using the link on the homepage.",
  },
  {
    question: "What will I build? ",
    answer: "Placeholder",
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
    answer: "Breakfast, lunch, and dinner will be provided.",
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
      "HSN Hacks is strictly for highschoolers and middle schoolers. College students will not be allowed to attend. ",
  },
  {
    question: "What if I’ve never coded before?",
    answer:
      "You do not need any prior coding experience. This is a great way to get introduced to programming. Workshops will help you get started with the basics.",
  },
  {
    question: "How will teams work?",
    answer: "Placeholder",
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
    answer: "Yes, you must stay for the full event. ",
  },
  {
    question: "Do I need to fill any forms?",
    answer:
      "Yes, please join the Discord Server; it contains the required forms and registration process. It's on the home page. ",
  },
];

const judgesFaqData = [
  {
    question: "Will judging be done on site?",
    answer: "Judging will be done on site.",
  },
  {
    question: "Who are the judges?",
    answer: "Placeholder",
  },
  {
    question: "How will they grade projects?",
    answer:
      "Judges will use a rubric to grade projects. They will be given to everyone before the hackathon via our Discord Server.",
  },
];

const prizesFaqData = [
  {
    question: "What are the prizes?",
    answer: "Prizes will vary from gift cards to textbooks. ",
  },
  {
    question: "Are there participation awards?",
    answer: "No, there are no participation awards. ",
  },
];

const FAQ = () => {

  const NavBar = () => {
    return (
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="flex items-center">
          <img src="../favicon.ico" alt="favicon" className="w-9 h-9 mr-2" />
          <div className="text-xl font-bold">HSN Hacks</div>
        </div>
        <ul className="flex gap-4">
          <li><a className="hover:text-gray-400" href="/">Home</a></li>
          <li><a className="hover:text-gray-400" href="/more-info">FAQ</a></li>
          <li><a className="hover:text-gray-400" href="/team">Our Team</a></li>
          <li><a className="hover:text-gray-400" href="/sponsorships">Sponsors</a></li>
        </ul>
      </nav>
    );
  };

  return (
    <div>
      <NavBar />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <main>
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-4">General FAQ</h1>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              {generalFaqData.map((item, index) => (
                <Accordion
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-4">Registration/Teams FAQ</h1>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              {teamsFaqData.map((item, index) => (
                <Accordion
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-4">Logistics FAQ</h1>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              {logisticsFaqData.map((item, index) => (
                <Accordion
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-4">Judges FAQ</h1>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              {judgesFaqData.map((item, index) => (
                <Accordion
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-4">Prizes FAQ</h1>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              {prizesFaqData.map((item, index) => (
                <Accordion
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FAQ;
