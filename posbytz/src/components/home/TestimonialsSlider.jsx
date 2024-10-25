import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialsSlider = ({ testimonialsData }) => {

  const PrevArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 left-[-30px] transform -translate-y-1/2 bg-white shadow-lg border rounded-full p-2 z-10"
      onClick={onClick}
      aria-label="Previous Slide"
    >
      <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 right-[-30px] transform -translate-y-1/2 bg-white shadow-lg border rounded-full p-2 z-10"
      onClick={onClick}
      aria-label="Next Slide"
    >
      <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="mt-[60px] px-4">
      <h2 className="text-[#051441] font-medium font-sans text-[40px] leading-[50px] mb-10 ml-[90px]">
        Customer Testimonials
      </h2>
      <div className="relative mx-auto max-w-[1200px]">
        <Slider {...settings}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white border border-white shadow-lg rounded-lg mx-2 h-[250px] relative">
              <div className="flex items-center mb-4">
                <img
                  src={require(`../../images/${testimonial.img}`)}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                </div>
              </div>
              <p className="text-gray-600 text-center">{testimonial.text}</p>
            </div>
          ))}
        </Slider>
      </div>
      <section className="w-full h-[410px] bg-[#F0F0F2] mt-[70px] grid grid-cols-2 items-center">
        <div className="flex flex-col justify-center items-start pl-[50px]">
          <h2 className="text-black font-roboto text-[45px] font-bold leading-[55px]">
            Run Your Business <span className="text-[#FF8C00]">With PosBytz</span>
            <br />
            <span className="text-[#FF8C00]">ERP Software</span>
          </h2>
          <button className="bg-orange-500 w-[200px] rounded-full text-white h-[50px] text-[18px] font-semibold cursor-pointer mt-[40px]">
            Signup for Free
          </button>
        </div>
        <div className="flex justify-center">
          <img
            src="https://posbytz.com/wp-content/uploads/2023/07/Untitled-13.png"
            className="w-[300px] h-[300px]"
            alt="PosBytz ERP Software"
          />
        </div>
      </section>
    </section>
  );
};

export default TestimonialsSlider;
