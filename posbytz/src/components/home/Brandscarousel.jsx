// src/components/Brandscarousel.jsx

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Brandscarousel = ({ brandRows }) => {
    // Custom Previous Arrow
    const PrevArrow = ({ onClick }) => (
        <button
            className="absolute top-1/2 left-[-50px] transform -translate-y-1/2 bg-transparent"
            onClick={onClick}
            aria-label="Previous Slide"
        >
            <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
        </button>
    );

    // Custom Next Arrow
    const NextArrow = ({ onClick }) => (
        <button
            className="absolute top-1/2 right-[-50px] transform -translate-y-1/2 bg-transparent"
            onClick={onClick}
            aria-label="Next Slide"
        >
            <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
        </button>
    );

    // Slick carousel settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full px-4 py-8 mx-auto relative">
            {Object.keys(brandRows).map((rowKey, index) => (
                brandRows[rowKey].length > 0 && (
                    <div key={index} className="mb-8">
                        <Slider {...settings}>
                            {brandRows[rowKey].map((brand, idx) => (
                                <div key={idx} className="px-2">
                                    <img
                                        src={brand.image}
                                        alt={`Brand Logo ${idx + 1}`}
                                        className="w-[150px] h-[100px] object-contain rounded-lg shadow-md mx-auto"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                )
            ))}
        </div>
    );
};

export default Brandscarousel;
