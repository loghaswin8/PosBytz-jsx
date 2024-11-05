import React from 'react';
import Brandscarousel from './Brandscarousel';

const Trustedbrands = ({ brand, tagline }) => {
    return (
        <section className="mt-[190px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                {/* Left Column */}
                <div className="flex flex-col justify-center ml-4 md:ml-[100px] mb-8">
                    <h2 className="text-[#2c2c51] font-sans text-[40px] font-light leading-[55px]">
                        {tagline.title1}
                    </h2>
                    <h2 className="text-[#2c2c51] font-sans text-[50px] font-bold leading-[55px]">
                        {tagline.title2}
                    </h2>
                    <p className="font-thin leading-[55px] text-gray-700 mt-[10px]">
                        {tagline.description}
                    </p>
                    <button className="bg-orange-500 w-[180px] rounded-full text-white border-none h-[40px] text-[15px] font-semibold cursor-pointer mt-[40px]">
                        {tagline.buttonText}
                    </button>
                </div>

                {/* Right Column */}
                <div className="w-full max-w-4xl ml-[-60px]">
                    <Brandscarousel brandRows={brand} />
                </div>
            </div>
        </section>
    );
};

export default Trustedbrands;
