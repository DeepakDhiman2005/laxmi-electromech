import { Title } from "react-head";
import FacilityImage from "./FacilityImage";

const ManufacturingFacilityMachinery = () => {
    const images = [
        {
            title: 'Brake Shoe Curing Oven',
            src: "/images/product-images/power-plant/1.png",
        },
        {
            title: 'Manual Powder Coating Machine',
            src: "/images/product-images/power-plant/2.png",
        },
        {
            title: 'Conveyorized Powder Coating Booth',
            src: "/images/product-images/power-plant/3.png",
        }
    ];

    const images2 = [
        "https://www.ooitech.com/upload/Image/20210422/20210422105618_92214.jpg",
        "https://www.assemblymag.com/ext/resources/Issues/2020/August/solar/asb0820solar1.jpg",
        "https://www.energetica-india.net/images/noticias/iiKqwHkl1dATeZXJOZXZZKLBDb2AlMGhDC7mYPCahNPH9ZrIaEVv8Kg.jpg",
        "https://www.shutterstock.com/image-photo/asian-mature-man-engineer-safety-600nw-2421474087.jpg",
    ];

    const images3 = [
        {
            title: 'Laser Cutting',
            src: "/images/product-images/fabrication-plant/1.png",
        },
        {
            title: 'CNC Bending Machine',
            src: "/images/product-images/fabrication-plant/2.png",
        },
        {
            title: 'NC Shearing Machine',
            src: "/images/product-images/fabrication-plant/3.png",
        },
        {
            title: 'Deep Pneumatics DP15D Screw Air Compressor',
            src: "/images/product-images/fabrication-plant/4.png",
        },
        {
            title: 'Power Press Punching Machine',
            src: "/images/product-images/fabrication-plant/5.png",
        },
        {
            // title: 'Electra Welding Machine',
            title: 'MIG Welding Machine',
            src: "/images/product-images/fabrication-plant/6.png",
        },
        {
            title: 'Inverter Welding Machine',
            src: "/images/product-images/fabrication-plant/7.png",
        },
    ];

    return (
        <>
            <Title>Manufacturing Facility & Machinery</Title>
            <img src="/banners/Our-Manufacturing-Facility-&-Machinery.png" alt="banner" className="w-full" />
            <div className="w-full py-6 px-2 lg:px-12">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-5">
                    Our Manufacturing Facility & Machinery
                </h1>

                <section className="mb-8">
                    {/* <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 text-center">
                        Fabrication Plant
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                        Our state-of-the-art fabrication plant is equipped with advanced machinery to ensure precision,
                        efficiency, and durability. We employ cutting-edge technology to process various metals, ensuring
                        the highest quality output. Our plant specializes in producing industrial components with minimal
                        material wastage and superior structural integrity. The facility boasts automated and semi-automated
                        machines that allow for seamless production.
                    </p>
                    <ul className="text-gray-700 list-disc pl-5 mb-6">
                        <li><strong>Laser Cutting:</strong> Enables highly precise cutting with minimal thermal distortion, reducing material loss.</li>
                        <li><strong>CNC Welding Machines & Press Brakes:</strong> Automate metal bending and welding, ensuring flawless accuracy and consistency.</li>
                        <li><strong>Metal Shaving Machine:</strong> Provides a fine finish by efficiently removing excess material, improving overall aesthetics.</li>
                        <li><strong>Automated Assembly Systems:</strong> Streamline production, reducing errors and improving output efficiency.</li>
                        <li><strong>Material Handling Systems:</strong> Enhance safety and operational efficiency by automating the movement of raw materials and finished products.</li>
                    </ul> */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[...images3, ...images].map((item, index) => (
                          <FacilityImage key={index} {...item} />  
                        ))}
                    </div>
                </section>

                {/* <section className="mb-8">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 text-center">
                        Powder Coating Plant
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                        Our powder coating plant is designed to provide durable and corrosion-resistant finishes to metal surfaces.
                        The facility is equipped with state-of-the-art electrostatic spray booths and automated curing ovens,
                        ensuring a consistent and long-lasting finish. Our powder coating technology enhances durability,
                        aesthetics, and environmental sustainability, as it reduces the use of harmful solvents.
                    </p>
                    <ul className="text-gray-700 list-disc pl-5 mb-6">
                        <li><strong>Boulder Coating Plant Machine:</strong> Ensures high-quality finishes with even powder distribution.</li>
                        <li><strong>Electrostatic Spraying Technology:</strong> Guarantees superior adhesion and coverage, reducing material waste.</li>
                        <li><strong>Automated Curing Ovens:</strong> Securely bond the coating, increasing resistance to wear and environmental factors.</li>
                        <li><strong>Eco-Friendly Coating Process:</strong> Reduces emissions and minimizes waste, making it a sustainable option.</li>
                    </ul>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {images.map((src, index) => (
                            <div key={index} className="overflow-hidden rounded-lg shadow-lg flex justify-center">
                                <img src={src} alt={`Powder Coating Equipment ${index + 1}`} className="w-full sm:w-[200px] object-cover transform hover:scale-105 transition-transform duration-300" />
                            </div>
                        ))}
                    </div>
                </section> */}

                {/* <section className="mb-8">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 text-center">
                        Quality Assurance & Testing
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Quality is at the heart of our manufacturing process. Our dedicated quality assurance team ensures that
                        every product undergoes rigorous testing to meet industry standards. We employ cutting-edge testing
                        instruments to analyze material strength, corrosion resistance, and overall durability. With meticulous
                        inspections at every stage, we guarantee that our products meet global standards of excellence.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                        {images2.map((src, index) => (
                            <div key={index} className="overflow-hidden flex justify-center">
                                <img src={src} alt={`Quality Control Equipment ${index + 1}`} className="w-full sm:w-[300px] object-cover" />
                            </div>
                        ))}
                    </div>
                </section> */}
            </div>
        </>
    );
};

export default ManufacturingFacilityMachinery;
