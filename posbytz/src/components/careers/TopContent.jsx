const TopContent = ({ careerTopData }) => {
    console.log('TopContent data:', careerTopData); // Log the incoming data

    if (!careerTopData) {
        return <div>No Top Content Data Available</div>; // Fallback for no data
    }

    return (
        <section className="relative w-full h-[630px]">
            <section
                className="w-full h-full bg-[#E1D7C6] grid grid-cols-2 items-center justify-center text-white"
                style={{ position: "absolute", top: '15px', zIndex: '-1' }}
            >
                <section id="content" className="flex flex-col items-start justify-center pl-[70px]">
                    <h2 className="font-roboto text-[20px] font-bold" style={{ color: '#3C3D37' }}>
                        {careerTopData.title}
                    </h2>
                    <h1 className="font-roboto text-[56px] font-bold text-[#1E201E]">
                        {careerTopData.headline}
                    </h1>
                    <p className="text-gray-800 font-roboto text-[19px] leading-[30px]" style={{ color: '#3C3D37' }}>
                        {careerTopData.description}
                    </p>
                    <button className="bg-[#ff8c00] text-white rounded-full text-sm font-semibold w-[200px] h-[50px] mt-4 cursor-pointer">
                        {careerTopData.buttonText}
                    </button>
                </section>
                <section id="Image-container" className="flex justify-center items-center">
                    <img 
                        src={careerTopData.imageUrl} 
                        alt="Career" 
                        className="w-[80%] h-[auto] object-cover"
                    />
                </section>
            </section>
        </section>
    );
};

export default TopContent;
