import React from 'react';

const OpenPosition = ({ openPosition }) => { // Receive openPosition prop
    return (
        <div className="mx-auto mt-[90px]">
            <h2 className="font-roboto text-[32px] font-bold text-[#1E201E] ml-[60px]">Open Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[60px]">
                {openPosition.map((item, index) => (
                    <div 
                        key={index} 
                        className="border p-4 rounded-lg shadow-lg bg-white flex flex-col items-center p-6 mx-2 w-[375px] h-[260px] relative"
                    >
                        <div className="flex flex-col items-center mb-4">
                            <div className="flex items-center justify-center bg-white p-2">
                                <i
                                    className={`${item.img} text-5xl text-[#ff8c00]`} // Use Font Awesome classes for icons
                                    aria-hidden="true"
                                ></i>
                            </div>

                            <div className="text-center mt-4">
                                <h3 className="font-roboto text-[23px] font-bold text-[#1E201E]" style={{ textTransform: "uppercase" }}>
                                    {item.title}
                                </h3>
                            </div>
                        </div>

                        <button className="bg-[#ff8c00] text-white rounded-full text-sm font-semibold w-[140px] h-[50px] cursor-pointer mt-[30px]">
                            Apply Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OpenPosition;
