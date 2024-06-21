"use client";

import { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 border-gray-200">
      <button
        className="w-full py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium ml-2 hover:font-bold">{question}</h3>
      </button>
      {isOpen && <p className="px-4 pb-4">{answer}</p>}
    </div>
  );
};

export default Accordion;
