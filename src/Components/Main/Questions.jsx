import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: "01",
      question: "What is StreamVibe?",
      answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
    {
      id: "02",
      question: "How do I sign up for StreamVibe?",
      answer: "You can easily sign up by clicking the 'Sign Up' button on our homepage and following the simple registration process.",
    },
    {
      id: "03",
      question: "What is the StreamVibe free trial?",
      answer: "We offer a 7-day free trial for new users. You can explore all features without any charge during this period.",
    },
    {
      id: "04",
      question: "How much does StreamVibe cost?",
      answer: "StreamVibe offers multiple plans starting from $9.99/month. Check our pricing page for detailed plans and offers.",
    },
    {
      id: "05",
      question: "How do I contact StreamVibe customer support?",
      answer: "You can reach our support team 24/7 via live chat, email at support@streamvibe.com, or through the help center.",
    },
    {
      id: "06",
      question: "What content is available on StreamVibe?",
      answer: "StreamVibe features thousands of movies, TV shows, documentaries, and original content from around the world.",
    },
    {
      id: "07",
      question: "What are the StreamVibe payment methods?",
      answer: "We accept all major credit/debit cards, PayPal, Google Pay, and Apple Pay.",
    },
    {
      id: "08",
      question: "How can I watch StreamVibe?",
      answer: "You can watch StreamVibe on Smart TVs, smartphones, tablets, laptops, and streaming devices like Roku, Fire TV, and Chromecast.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#141414] text-white w-[100%] h-auto pt-[120px]">
      <div className="px-[80px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="font-[700] text-[28px] leading-[150%]">Frequently Asked Questions</h2>
            <p className="text-[#999999] font-[400] text-[16px]">
              Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.

            </p>
          </div>
          <button className="mt-6 md:mt-0 bg-red-600 hover:bg-red-700 w-[140px] h-[50px]  rounded-xl font-semibold transition-all">
            Ask a Question
          </button>
        </div>

        {/* Accordion */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-800 pb-6 last:border-none group"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center text-left group-hover:text-red-500 transition-colors "
              >
                <div className="flex items-center gap-5">
                  <span className="bg-[#1a1a1a] text-gray-400 text-sm font-mono w-8 h-8 flex items-center justify-center rounded-lg shrink-0">
                    {faq.id}
                  </span>
                  <span className="text-[20px] font-[500]">{faq.question}</span>
                </div>

                <span className={`text-3xl transition-transform duration-300 ${openIndex === index ? 'rotate-45 text-red-600' : 'text-gray-400'}`}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40 mt-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-400 pl-13 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll to top button */}
       
      </div>
    </div>
  );
};

export default FAQ;