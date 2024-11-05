import React from 'react';

const Principle = ({ title, description, buttonText }) => {
    return (
        <section className="relative w-full h-[400px] mt-[50px]">
            <section
                className="w-full h-full bg-[#000] flex flex-col items-center justify-center text-white"
                style={{ position: "absolute", top: '5px', zIndex: '-1' }}
            >
                <h1 className="text-6xl font-bold mb-4">{title}</h1>
                {description.map((text, index) => (
                    <p key={index} className="text-white font-roboto text-[19px] leading-[30px]">
                        {text}
                    </p>
                ))}
                <button className="bg-[#ff8c00] text-white rounded-full text-sm font-semibold w-[165px] h-[55px] cursor-pointer mt-[30px]">
                    {buttonText}
                </button>
            </section>
        </section>
    );
}

export default Principle;
