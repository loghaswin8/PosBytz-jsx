import React, { useState, useEffect } from 'react';

const FaqSection = ({ faqData }) => {
  const [faqs, setFaqs] = useState(faqData);

  const toggleAnswer = (index) => {
    setFaqs(
      faqs.map((item, i) =>
        i === index ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <section>
      <h2 className="text-black font-roboto text-[45px] font-bold leading-[65px] flex justify-center mt-[100px]">
        Frequently Asked Questions (FAQ)
      </h2>
      <section className="ml-[200px] mt-[100px]">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <span
              onClick={() => toggleAnswer(index)}
              className={`cursor-pointer font-light text-xl flex items-center transition-all duration-300 ${
                faq.isOpen
                  ? 'text-orange-600 text-[1rem] font-semibold'
                  : 'text-black text-[1rem] font-semibold'
              }`}
            >
              <svg
                className={`h-4 w-4 mr-2 transition-transform duration-300 ${
                  faq.isOpen ? 'rotate-90' : ''
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              {faq.question}
            </span>
            <div
              style={{
                maxHeight: faq.isOpen ? '1000px' : '0',
                transition: 'max-height 0.5s ease-in-out',
                overflow: 'hidden',
              }}
              className="transition-max-height duration-500 ease-in-out"
            >
              <p
                id="answer"
                className="mt-2 text-gray-300"
                style={{ color: 'grey' }}
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              ></p>
            </div>
            <hr className="border-t border-gray-200 w-[80%] mx-auto mt-[20px] mr-[250px]" />
          </div>
        ))}
      </section>
      <section className="w-full h-[380px] bg-[#ff8c00] mt-[70px] flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-white font-roboto text-[40px] font-bold leading-[65px]">
            Ready to Automate your business operations?
            <br />
            Try our powerful ERP software today and
            <br />
            experience the growth!
          </h2>
          <button className="bg-white w-[200px] rounded-full text-[#FF8C00] h-[50px] text-[18px] font-semibold cursor-pointer mt-4">
            Get started now
          </button>
        </div>
      </section>
    </section>
  );
};

export default FaqSection;
