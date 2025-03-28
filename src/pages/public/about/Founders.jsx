import { useEffect } from "react"; // Import useEffect
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Heading from "../../../components/heading/Heading";

const Founders = () => {
    // Initialize AOS using useEffect
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Whether animation should happen only once
            offset: 100, // Offset (in px) from the original trigger point
        });
        // Optional: Refresh AOS when content changes (if dynamic content is added)
        AOS.refresh();
    }, []); // Empty dependency array means it runs once on mount

    const FounderCard = ({ name, title, description, image }) => {
        return (
            <div
                className="bg-white rounded-lg shadow-lg px-6 py-4 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                {/* Founder Image */}
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <img
                        src={image || "https://via.placeholder.com/150"}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Founder Info */}
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
                <p className="text-blue-600 font-medium mb-1">{title}</p>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        );
    };

    // Sample founder data
    const foundersData = [
        {
            name: "John Doe",
            title: "CEO & Founder",
            description: "Visionary leader with 20+ years in electrical automation.",
            image: "https://ambit.in/ambitImages/team/Anand_Singhal.png"
        },
        {
            name: "Jane Smith",
            title: "CTO",
            description: "Tech innovator specializing in panel manufacturing.",
            image: "https://ambit.in/ambitImages/team/Rakesh_Jain.png"
        },
        {
            name: "Mike Johnson",
            title: "COO",
            description: "Operations expert with a focus on EPC contracts.",
            image: "https://ambit.in/ambitImages/team/Akansha_Jain.png"
        }
    ];

    return (
        <section className="py-4 bg-gray-100 overflow-hidden">
            <div className="mx-auto px-4 sm:px-6 lg:px-12">
                {/* Section Title */}
                <div
                    className="text-center mb-2"
                    data-aos="fade-down"
                    data-aos-duration="800"
                >
                    <Heading
                        startText="Our"
                        endText="Founders"
                        pb={0.5}
                    />
                    <p className="mt-1 text-gray-600">The visionary minds behind our success</p>
                </div>

                {/* Founders Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {foundersData.map((founder, index) => (
                        <FounderCard
                            key={index}
                            name={founder.name}
                            title={founder.title}
                            description={founder.description}
                            image={founder.image}
                            data-aos="fade-up"
                            data-aos-delay={`${index * 200}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Founders;