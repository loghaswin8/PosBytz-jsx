import React from 'react';

const HeroSection = ({ title, breadcrumbs }) => {
    return (
        <section className="relative w-full h-[460px]">
            {/* Background Image */}
            <img
                src="https://posbytz.com/wp-content/themes/saasland/assets/img/banners/banner_bg2.png"
                alt="Background"
                className="w-full h-full object-cover"
                style={{ zIndex: '5' }}
            />

            {/* Overlay Section */}
            <section
                className="w-full h-full bg-[#694F8E] flex flex-col items-center justify-center text-white"
                style={{ position: "absolute", top: '0px', zIndex: '-1' }}
            >
                {/* Title */}
                <h1 className="text-4xl font-bold mb-4">{title}</h1>

                {/* Breadcrumb */}
                <ol className="flex space-x-4 items-center">
                    {breadcrumbs.map((item, index) => (
                        <React.Fragment key={index}>
                            <li>
                                <a href={item.link} className="hover:underline">{item.name}</a>
                            </li>
                            {index < breadcrumbs.length - 1 && (
                                <svg className="h-6 w-6 text-gray-200 mx-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            )}
                        </React.Fragment>
                    ))}
                </ol>
            </section>
        </section>
    );
};

export default HeroSection;
