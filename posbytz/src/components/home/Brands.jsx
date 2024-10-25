import React, { useEffect, useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Brands = ({ brandsData }) => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        if (brandsData && brandsData.length > 0) {
            setBrands(brandsData);
        } else {
            console.error('No brands data available');
        }
    }, [brandsData]);

    return (
        <div className="pt-32 flex w-[1140px] mx-auto">
            {/* Left Side: Brand Information */}
            <div className="flex-1 bg-gray-200 p-5 shadow-md rounded-lg max-w-lg mr-8">
                <div className="py-24 text-center">
                    <h2 className="text-2xl mb-2">Trusted by</h2>
                    <h2 className="font-bold text-2xl mb-4">great brands</h2>
                    <p className="text-lg mb-5">Over 5000+ businesses in 15 countries have registered with PosBytz.</p>
                    <a href="#" className="inline-block px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                        Get started for free
                    </a>
                </div>
            </div>

            {/* Right Side: Brand Slider */}
            <div className="flex-1">
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={125}
                    totalSlides={brands.flat().length} // Total slides across all rows
                    visibleSlides={3} // Show 3 slides at a time
                >
                    <Slider className="flex overflow-hidden w-full">
                        {brands.map((row, rowIndex) => (
                            row.map((src, index) => (
                                <Slide index={index} key={index}>
                                    <div className="p-2 flex justify-center">
                                        <img 
                                            src={src} // Use the URL directly
                                            alt={`Brand ${rowIndex * 3 + index + 1}`} // Unique alt text
                                            className="w-[80%] h-auto rounded shadow-md"
                                            onError={() => console.error(`Image failed to load: ${src}`)}
                                            onLoad={() => console.log(`Image loaded: ${src}`)}
                                        />
                                    </div>
                                </Slide>
                            ))
                        ))}
                    </Slider>
                    <ButtonBack className="bg-transparent text-black text-xl hover:text-gray-700">
                        &#10094;
                    </ButtonBack>
                    <ButtonNext className="bg-transparent text-black text-xl hover:text-gray-700">
                        &#10095; 
                    </ButtonNext>
                </CarouselProvider>
            </div>
        </div>
    );
};

export default Brands;
