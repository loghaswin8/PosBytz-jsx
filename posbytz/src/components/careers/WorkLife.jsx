import React from 'react';

const WorkLife = ({ about, activities, image }) => { 
    return (
        <section className="flex justify-center items-center w-full h-full pt-[100px]">
            <section className="grid grid-cols-2 gap-10">
                <section id="image-container" className="flex items-center justify-center">
                    <img src={image} alt="Working Life Balance" className="max-w-full h-auto" /> {/* Use image prop */}
                </section>
                <section id="content-container">
                    <h2 className="font-roboto text-[35px] font-bold text-[#1E201E]">Working Life Balance</h2>
                    {about.map((item, index) => (
                        item.type === "heading" && (
                            <p key={index} className="text-gray-800 font-roboto text-[19px] leading-[30px] w-[600px]">
                                {item.data}
                            </p>
                        )
                    ))}
                    <section className='pt-[70px]'>
                        {activities.map((item, index) => ( // Iterate over activities
                            <div key={index} className="flex items-center space-x-4">
                                <i aria-hidden="true" className="fas fa-check text-orange-500"></i>
                                <p className="text-gray-800 font-roboto text-[16px] leading-[30px]" style={{ color: "grey" }}>
                                    {item.Activity}
                                </p>
                            </div>
                        ))}
                    </section>
                </section>
            </section>
        </section>
    );
};

export default WorkLife;
