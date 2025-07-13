'use client';
import { useState } from 'react';

const questions = [
  {
    question: 'What types of properties do you sell?',
    answer:
      'We specialize in residential, commercial, and luxury properties, offering a wide range of options to suit every buyer’s needs and preferences. We connect you with trusted lenders offering competitive mortgage options and financial advice. We arrange private showings for you to visit and evaluate properties before making a decision. Properties range across different price points, catering to various budgets and investment goals.',
  },
  {
    question: 'How do I know if a property is a good investment?',
    answer:
      'We analyze market trends, location advantages, and potential returns. Our team provides personalized advice based on your financial goals and risk tolerance.',
  },
  {
    question: 'Do I need to hire a real estate agent?',
    answer:
      'While not mandatory, having a real estate agent simplifies the process. They handle paperwork, negotiations, and property research on your behalf.',
  },
  {
    question: 'What’s the process for buying a property?',
    answer:
      'Start by defining your budget, then get pre-approved for a mortgage. Search for listings, visit properties, make an offer, and complete the transaction through closing.',
  },
  {
    question: 'Can I tour a property before purchasing?',
    answer:
      'Yes, we arrange private showings or virtual tours at your convenience. It’s highly recommended to inspect the property before making any purchase decision.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
          <p className="text-gray-600 text-lg">
            Our experts guide you in making informed investment decisions based on market insights. We offer residential, commercial, and luxury properties tailored to different preferences and budgets.
          </p>
        </div>

        <div className="space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="border rounded-lg p-4">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left font-medium text-gray-900 text-lg flex justify-between"
              >
                {item.question}
                <span>{openIndex === index ? '▲' : '▼'}</span>
              </button>
              {openIndex === index && (
                <p className="mt-4 text-gray-700 text-sm">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
