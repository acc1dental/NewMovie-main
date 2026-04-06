import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { id: "01", question: "What is StreamVibe?", answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand." },
    { id: "02", question: "How do I sign up for StreamVibe?", answer: "You can easily sign up by clicking the 'Sign Up' button on our homepage." },
    { id: "03", question: "What is the StreamVibe free trial?", answer: "We offer a 7-day free trial for new users." },
    { id: "04", question: "How much does StreamVibe cost?", answer: "StreamVibe offers multiple plans starting from $9.99/month." },
    { id: "05", question: "How do I contact StreamVibe customer support?", answer: "You can reach our support team 24/7 via live chat or email." },
    { id: "06", question: "What content is available on StreamVibe?", answer: "StreamVibe features thousands of movies and TV shows." },
    { id: "07", question: "What are the StreamVibe payment methods?", answer: "We accept all major credit cards, PayPal, and Apple Pay." },
    { id: "08", question: "How can I watch StreamVibe?", answer: "You can watch on Smart TVs, smartphones, and laptops." },
  ];

  const toggleAccordion = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  // Split FAQs into two groups
  const leftColumn = faqs.filter((_, i) => i % 2 === 0);
  const rightColumn = faqs.filter((_, i) => i % 2 !== 0);

  const renderFaqItem = (faq) => (
    <div key={faq.id} className="border-b border-gray-800 pb-6 mb-4 last:border-none group">
      <button
        onClick={() => toggleAccordion(faq.id)}
        className="w-full flex justify-between items-center text-left group-hover:text-red-500 transition-colors"
      >
        <div className="flex items-center gap-5">
          <span className="bg-[#1a1a1a] text-gray-400 text-sm font-mono w-8 h-8 flex items-center justify-center rounded-lg shrink-0">
            {faq.id}
          </span>
          <span className="text-[20px] font-[500]">{faq.question}</span>
        </div>
        <span className={`text-3xl transition-transform duration-300 ${openIndex === faq.id ? 'rotate-45 text-red-600' : 'text-gray-400'}`}>
          {openIndex === faq.id ? '−' : '+'}
        </span>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${openIndex === faq.id ? 'max-h-40 mt-4' : 'max-h-0'}`}>
        <p className="text-gray-400 pl-13 leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-[#141414] text-white w-full h-auto pt-[120px] ">
      <div className="px-[80px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="font-[700] text-[28px] leading-[150%]">Frequently Asked Questions</h2>
            <p className="text-[#999999] text-[16px]">Got questions? We've got answers!</p>
          </div>
          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold transition-all">
            Ask a Question
          </button>
        </div>

        {/* Accordion Layout - Now using 2 vertical columns */}
        <div className="grid md:grid-cols-2 gap-x-12 items-start">
          <div className="flex flex-col">{leftColumn.map(renderFaqItem)}</div>
          <div className="flex flex-col">{rightColumn.map(renderFaqItem)}</div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;