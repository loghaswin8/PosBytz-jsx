import React from 'react';

const TeamWork = ({ teamData }) => {
    return (
        <>
            <section>
                <section id="heading" className="text-center p-6 mt-[35px]">
                    <h2 className="font-roboto text-[56px] font-bold text-[#1E201E]">PosBytz is where we work as a team</h2>
                    <p className="text-gray-800 font-roboto text-[19px] leading-[30px]" style={{ fontWeight: '400' }}>
                        Every day, we learn, iterate and explore how to make work better for everyone. Join us in creating a better future of work that’s more connected, inclusive, and flexible for our clients and us.
                    </p>
                </section>
                
                <section id="teamwork-grid">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[60px]">
                        {teamData.map((item, index) => (
                            <div key={index} className="border p-4 bg-white flex flex-col items-center p-6 bg-white border-none mx-2 h-[300px] relative">
                                <div className="flex flex-col items-center mb-4">
                                    <div className="flex items-center justify-center bg-white p-2">
                                        <i
                                            className={`${item.img} text-6xl text-orange-400`} // Tailwind classes for size and color
                                            aria-hidden="true"
                                        ></i>
                                    </div>

                                    <div className="text-center mt-4">
                                        <h3 className="text-xl font-semibold text-[#051441]">{item.title}</h3>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-center text-gray-800 font-roboto text-[18px]" style={{ color: 'black' }}>
                                    {item.about}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </>
    );
};

export default TeamWork;
