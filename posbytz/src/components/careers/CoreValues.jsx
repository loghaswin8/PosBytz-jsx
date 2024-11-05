const CoreValues = ({ about, icon, image }) => {
    return (
        <section className="flex justify-center items-center w-full h-full pt-[100px]">
            <div className="grid grid-cols-2 gap-10 w-full max-w-screen-xl">
                <div id="left-container" className="flex flex-col pl-20">
                    <h2 className="font-roboto text-[35px] font-bold text-[#1E201E]">Our Core Values</h2>
                    {about.length > 0 ? (
                        about.map((item, index) => (
                            item && (
                                <p key={index} className="text-gray-800 font-roboto text-[19px] leading-[30px] w-[600px]">
                                    {item}
                                </p>
                            )
                        ))
                    ) : (
                        <p className="text-gray-800 font-roboto text-[19px] leading-[30px] w-[600px]">
                            No core values to display.
                        </p>
                    )}
                    <div className="grid grid-cols-2 gap-4 pt-10">
                        {icon.length > 0 ? (
                            icon.map((item, index) => (
                                <div key={index} className="flex items-center space-x-4">
                                    <img src={item.icon} alt={item.Text} className="w-7 h-7" />
                                    <p className="text-gray-800 font-roboto text-[18px] leading-[30px] font-bold">
                                        {item.Text}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p>No icons available for core values.</p>
                        )}
                    </div>
                </div>
                <div id="right-container" className="flex items-center justify-center">
                    <img src={image} alt="Core Values" className="max-w-full h-auto" />
                </div>
            </div>
        </section>
    );
};

export default CoreValues;
