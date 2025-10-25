"use client";

import { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        className="flex w-full items-center justify-between py-4 text-left text-[color:var(--text-primary)] transition hover:text-accent focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <span
          className={`text-accent transition-transform duration-200 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {isOpen && (
        <p className="pb-6 text-sm text-muted md:text-base">{answer}</p>
      )}
    </div>
  );
};

export default Accordion;

