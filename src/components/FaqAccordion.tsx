"use client";
import { useState, ReactNode } from 'react';

type FaqItemProps = {
  question: string;
  children: ReactNode;
};

const FaqItem = ({ question, children }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4 last:border-0">
      <button
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 hover:text-[--highlight] transition-colors py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} text-[--highlight]`}>
          ▼
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-gray-600 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

interface FaqData {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqData[];
}

export const FaqAccordion = ({ items }: FaqAccordionProps) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      {items.map((faq, index) => (
        <FaqItem key={index} question={faq.question}>
          <p>{faq.answer}</p>
        </FaqItem>
      ))}
    </div>
  );
};
