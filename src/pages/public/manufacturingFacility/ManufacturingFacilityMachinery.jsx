import { Title } from "react-head";

const ManufacturingFacilityMachinery = () => {
    const images = [
        "/images/product-images/power-plant/3.png",
        "/images/product-images/power-plant/2.png"
    ];

    const images2 = [
        "https://www.ooitech.com/upload/Image/20210422/20210422105618_92214.jpg",
        "https://www.assemblymag.com/ext/resources/Issues/2020/August/solar/asb0820solar1.jpg",
        "https://www.energetica-india.net/images/noticias/iiKqwHkl1dATeZXJOZXZZKLBDb2AlMGhDC7mYPCahNPH9ZrIaEVv8Kg.jpg",
        "https://www.shutterstock.com/image-photo/asian-mature-man-engineer-safety-600nw-2421474087.jpg",
    ];

    return (
        <>
            <Title>Manufacturing Facility & Machinery</Title>
            <img src="/banners/Our-Manufacturing-Facility-&-Machinery.png" alt="banner" className="w-full" />
            <div className="w-full py-12 px-2 lg:px-12">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-4">
                    Our Manufacturing Facility & Machinery
                </h1>

                <section className="mb-4 ">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-start">
                        Our state-of-the-art manufacturing facility is equipped with cutting-edge machinery and the latest technological advancements to ensure the highest standards of quality, precision, and efficiency. We take immense pride in our infrastructure, which allows us to streamline production processes and optimize resource utilization. By integrating innovation into every aspect of our operations, we consistently produce high-quality products that meet and exceed industry expectations.
                    </p>
                </section>

                <section className="mb-4 ">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 text-center">
                        Facility Highlights
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-start mb-6">
                        Our facility boasts an advanced manufacturing setup, designed to handle large-scale production with utmost efficiency. Every piece of machinery is strategically placed to ensure seamless workflow, reducing downtime and enhancing productivity. From automated assembly lines to high-precision cutting tools, our factory is a testament to modern engineering excellence.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {images.map((src, index) => (
                            <div key={index} className="overflow-hidden rounded-lg shadow-lg flex justify-center">
                                <img src={src} alt={`Manufacturing Equipment ${index + 1}`} className="w-full sm:w-[200px] object-cover transform hover:scale-105 transition-transform duration-300" />
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-4 ">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 text-center">
                        Our Advanced Machinery
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Our manufacturing unit is home to a diverse range of sophisticated machinery that enhances our ability to produce intricate and high-quality products. We utilize Computer Numerical Control (CNC) machines to achieve precise cutting, drilling, and shaping of raw materials, ensuring a flawless finish with minimal human intervention. Our injection molding machines enable mass production of complex plastic components with remarkable accuracy, making the production process faster and more efficient. Additionally, we have invested in advanced 3D printers that facilitate rapid prototyping, allowing us to test and refine our designs before full-scale manufacturing. To optimize internal logistics, our facility employs Automated Guided Vehicles (AGVs), which transport materials seamlessly across different production units, significantly reducing manual labor and improving overall efficiency.
                    </p>
                </section>

                <section className="mb-4 ">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 text-center">
                        Commitment to Quality
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Quality is the cornerstone of our manufacturing processes. From raw material procurement to final product packaging, we adhere to rigorous quality control measures at every stage. Our dedicated quality assurance team conducts thorough inspections, ensuring that every product meets industry standards and customer expectations. Advanced testing laboratories within our facility are equipped with cutting-edge tools to analyze material composition, durability, and functionality. This commitment to excellence has allowed us to build a reputation for delivering products that are not only reliable but also built to withstand the test of time.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                        {images2.map((src, index) => (
                            <div key={index} className="overflow-hidden flex justify-center">
                                <img src={src} alt={`Manufacturing Equipment ${index + 1}`} className="w-full sm:w-[300px] object-cover" />
                            </div>
                        ))}
                    </div>
                </section>

                <section className="">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 text-center">
                        Sustainable Practices
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        At our core, we are deeply committed to sustainable and eco-friendly manufacturing practices. Our facility is designed with energy efficiency in mind, incorporating smart lighting, automated power management, and environmentally responsible waste disposal systems. We actively seek ways to minimize our environmental impact, utilizing recycled materials whenever possible and reducing emissions through efficient production techniques. By continuously evolving and adopting greener technologies, we aim to contribute positively to the environment while maintaining the highest standards of operational efficiency.
                    </p>
                </section>
            </div>
        </>
    );
};

export default ManufacturingFacilityMachinery;