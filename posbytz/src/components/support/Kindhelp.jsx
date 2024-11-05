import React from 'react';

const Kindhelp = ({ helpKindData }) => {
  return (
    <section className="text-center mx-auto mt-[80px]">
      <h4 className="text-black font-roboto text-[35px] font-normal font-poppins">
        {helpKindData.heading}
      </h4>
      <p className="text-gray-800 text-center mt-[20px]" style={{ color: 'grey' }}>
        {helpKindData.paragraph}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[60px]">
        {helpKindData.Kindofhelp.map((item, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-lg bg-white flex flex-col items-center p-6 mx-2 h-[300px] relative">
            <div className="flex flex-col items-center mb-4">
              <div className="flex items-center justify-center bg-white p-2 rounded-full border-4 border-orange-500">
                {/* Render the SVG using dangerouslySetInnerHTML */}
                <span
                  className="w-10 h-10 text-[orange]"
                  dangerouslySetInnerHTML={{ __html: item.img }}
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold text-[#051441]">{item.title}</h3>
              </div>
            </div>
            <p className="text-gray-700 text-center" style={{ color: 'grey' }}>
              {item.about}
            </p>
            <button className="bg-orange-500 text-white rounded-full text-sm font-semibold w-[140px] h-[50px] cursor-pointer mt-[30px]">
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Kindhelp;
