
import React from 'react';


const Footer = ({footerData}) => {
    return (
        <>
            <section className="w-full h-[570px] bg-[#07112D] flex flex-col items-center">
                <section id="Top section" className="w-full grid grid-cols-4 gap-8 text-white pl-[100px] pt-[40px]">
                    <div>
                        <img src="https://posbytz.com/wp-content/uploads/2021/09/logo_light.svg" alt="Logo" />
                        <p className="mt-4">
                            PosBytz is your comprehensive platform to manage everything you need to sell and grow your business.
                        </p>
                        <p className="mt-2">PosBytz is a product of <a className="text-[#ff8c00]" href="https://bytize.org/">Bytize, Inc</a></p>
                    </div>
                    {footerData.slice(0, 3).map((section, index) => (
                        <div key={index}>
                            <span className="font-normal">{section.heading}</span>
                            <ul className="mt-2 space-y-2">
                                {section.items.map((item, idx) => (
                                    <li key={idx} className="flex items-center">
                                        <svg className="h-4 w-4 text-gray-800 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="9 18 15 12 9 6" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                <section id="bottom section" className="w-full grid grid-cols-3 gap-8 text-white pl-[420px] pt-[40px]">
                    {footerData.slice(3).map((section, index) => (
                        <div key={index}>
                            <span className="font-normal">{section.heading}</span>
                            {section.heading === "FIND US ON" ? (
                                <div id="media-icons" className="grid grid-cols-3 gap-[-60px] mt-4">
                                    {/* Icons for social media */}
                                    <span className="flex justify-center items-center h-10 w-10 rounded-full bg-white">
                                        <svg className="h-5 w-5 text-stone-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                        </svg>
                                    </span>
                                    <span className="flex justify-center items-center h-10 w-10 rounded-full bg-white">
                                        <svg className="h-5 w-5 text-stone-900" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z" />
                                        </svg>
                                    </span>
                                    <span className="flex justify-center items-center h-10 w-10 rounded-full bg-white">
                                        <svg className="h-5 w-5 text-stone-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                            <rect x="2" y="9" width="4" height="12" />
                                            <circle cx="4" cy="4" r="2" />
                                        </svg>
                                    </span>
                                </div>
                            ) : (
                                <ul className="mt-2 space-y-2">
                                    {section.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <svg className="h-4 w-4 text-gray-800 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="9 18 15 12 9 6" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                    <div className="relative flex flex-col items-center mt-4 w-full">
                        <hr className="w-[190vh] border-t border-gray-300 absolute left-1/2 transform -translate-x-1/3 ml-[-90px]" />
                        <span className="mt-2 text-gray-500 relative left-[625px] transform translate-x-1/2">@2023 Bytize</span>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Footer;
