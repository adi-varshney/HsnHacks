import NavBar from "../_components/NavBar";

const workshops = [
  {
    title: "Web Dev Advanced",
    summary:
      "Build full-stack web apps with modern tooling, from React components to realtime data.",
    sections: [
      {
        heading: "Topics",
        bullets: [
          "Component-driven React patterns and state management with hooks",
          "Designing communication between nested components",
          "Firebase setup, configuration, and secure data access",
          "Rendering database reads/writes in a polished UI",
        ],
      },
      {
        heading: "APIs",
        bullets: [
          "How APIs power modern apps and products",
          "Consuming third-party REST APIs for live data",
          "Designing your own REST endpoints with Express.js",
          "POST vs GET: sending and receiving JSON payloads",
        ],
      },
    ],
  },
  {
    title: "Python Beginner",
    summary:
      "Start coding from scratch and pick up the fundamentals you’ll use everywhere.",
    sections: [
      {
        heading: "Essentials",
        bullets: [
          "Setting up Python, running scripts, and using input/output",
          "Variables, data types, conditionals, functions, and loops",
          "Problem solving strategies and debugging tips",
        ],
      },
      {
        heading: "HTML Foundations",
        bullets: [
          "Structuring content with semantic tags",
          "Styling basics and layout techniques",
          "Pairing HTML knowledge with React workshop content",
        ],
      },
    ],
  },
  {
    title: "Machine Learning",
    summary:
      "Train your first model with TensorFlow and understand the core ideas behind ML.",
    sections: [
      {
        heading: "Intro to ML & TensorFlow",
        bullets: [
          "How ML differs from traditional programming",
          "Supervised vs. unsupervised learning patterns",
          "Building a neural network to classify clothing images",
          "Evaluating accuracy and avoiding overfitting",
        ],
      },
    ],
  },
];

export default function WorkshopsPage() {
  return (
    <div className="pb-24">
      <NavBar />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16">
        <header className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            Skill-Building Tracks
          </p>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            Workshops to level up every hacker
          </h1>
          <p className="mx-auto max-w-3xl text-base text-slate-300">
            Whether you’re building your first website or shipping a machine
            learning model, our mentor-led sessions are designed to get you hacking
            faster. Each workshop is paced so you can follow along live and apply it
            directly to your project.
          </p>
        </header>

        <section className="grid gap-8 lg:grid-cols-3">
          {workshops.map((workshop) => (
            <div
              key={workshop.title}
              className="glass-card border-white/10 bg-white/5 p-8"
            >
              <h2 className="text-2xl font-semibold text-white">{workshop.title}</h2>
              <p className="mt-3 text-sm text-slate-300">{workshop.summary}</p>
              <div className="mt-6 space-y-6">
                {workshop.sections.map((section) => (
                  <div key={section.heading}>
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                      {section.heading}
                    </p>
                    <ul className="mt-2 space-y-2 text-sm text-slate-200">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2 text-left text-sm"
                        >
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
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
