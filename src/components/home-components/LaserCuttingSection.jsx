import CountCard from "../cards/CountCard";

const LaserCuttingSection = () => {
    const countcards = [
        {
            number: 16,
            content: 'Years of industry expertise',
        },
        {
            number: 8710,
            content: 'Successful elevator & escalator installations'
        },
        {
            number: 8617,
            content: 'Custom mobility solutions for every space',
        },
        {
            number: 129682,
            content: 'Trusted clients and business partners',
        },
    ]

    return (
        <>
            <section
                className="w-full bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url('/images/banners/banner3.png')] text-white gap-y-6 md:gap-y-8 flex flex-col justify-center items-center bg-fixed bg-cover bg-no-repeat py-3 md:py-10 px-4 md:px-8"
            >
                <h2 className="font-semibold text-[28px] sm:text-[35px] text-center">
                    Precision Laser Cutting for Industrial Excellence
                </h2>

                <div className="w-full xl:w-[85%] grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    {/* Left Image */}
                    <div className="w-full">
                        <img
                            src="/images/product-images/fabrication-plant/1.png"
                            alt="Laser Cutting Machine"
                            className="w-full h-auto max-h-[300px] object-contain mx-auto rounded"
                        />
                    </div>

                    {/* Center Text */}
                    <div className="text-center md:text-left">
                        <p className="mb-2 text-center">
                            Our laser cutting technology delivers unmatched precision, enabling the fabrication of intricate components with clean edges and minimal material waste. Designed for modern industrial needs, it ensures consistency, speed, and accuracy across a wide range of materials and thicknesses.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="w-full">
                        <img
                            src="/images/product-images/fabrication-plant/luser-cutting-2.png"
                            alt="Laser Cutting Process"
                            className="w-full h-auto max-h-[300px] object-contain mx-auto rounded"
                        />
                    </div>
                </div>

                <div className="w-full xl:w-[85%] gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                    {
                        countcards.map((item, index) => (
                            <CountCard key={index} {...item} />
                        ))
                    }
                </div>
            </section>
        </>
    );
};

export default LaserCuttingSection;
