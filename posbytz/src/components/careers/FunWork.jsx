import React from 'react';

const FunWork = ({ title, description, backgroundImage }) => {
    return (
        <div className="relative w-full h-[450px]">
            <section
                id="image"
                className='bg-fixed bg-contain w-full h-[450px]'
                style={{
                    backgroundImage: `url('${backgroundImage}')`,
                }}
            >
                <div className="absolute inset-0 bg-orange-500 opacity-50"></div>

                <div className="relative z-20 flex items-center justify-start h-full px-10">
                    <div className="text-left">
                        <h1 className="text-6xl font-bold mb-4 text-white">{title}</h1>
                        <p className="text-gray-100 font-roboto text-[19px] leading-[30px] text-white">
                            {description}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FunWork;
