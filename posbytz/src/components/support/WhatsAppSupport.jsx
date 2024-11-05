// src/components/support/WhatsAppSupport.jsx
import React from 'react';

const WhatsAppSupport = ({ whatsapp }) => {
    const { title, description, link, buttonText } = whatsapp; // Destructure the whatsapp object

    return (
        <section className="flex justify-between items-center pt-[130px] p-5 bg-gray-100 pl-24 py-10">
            <div className="w-[739.983px] max-w-full">
                <h2 className="text-3xl mb-2 text-black font-semibold">{title}</h2>
                <p className="text-base text-[#69727d] leading-6">{description}</p>
            </div>
            <div className="w-[359.983px] max-w-full text-right pr-40">
                <a
                    href={link}
                    className="inline-block px-8 py-2 text-base bg-[#FF8C00] text-white rounded-full transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i aria-hidden="true" className="fab fa-whatsapp"></i>
                    <span className="elementor-button-text">{buttonText}</span>
                </a>
            </div>
        </section>
    );
};

export default WhatsAppSupport;
