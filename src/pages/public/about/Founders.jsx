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
                {/* <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <img
                        src={image || "https://via.placeholder.com/150"}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div> */}

                {/* Founder Info */}
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
                <p className="text-blue-600 font-medium mb-1">{title}</p>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        );
    };

    const foundersData = [
        {
            name: "Akhilesh Prasad Gupta",
            title: "Director & CEO",
            description: "Mr. A.P. Gupta, the first director of the company, has over 9 years of experience as a Maintenance Engineer at M/s Hindustan Developers Corporation Ltd. He later served as Head of Department at M/s Nice Diesel Engine (P) Ltd. With 13+ years at LEPL, he has been instrumental in driving innovation and excellence in electrical engineering and company operations.",
            image: "https://ambit.in/ambitImages/team/Rakesh_Jain.png"
        },
        {
            name: "Vandana Gupta",
            title: "Director",
            description: "Mrs. Vandana Gupta, the second director of the company, plays a key role in managing operations, human resources, and financial planning. With her strong leadership and expertise, she ensures seamless coordination across departments, contributing to the overall growth and success of the organization.",
            image: "https://ambit.in/ambitImages/team/Anand_Singhal.png"
        },
        {
            name: "Mr. Y C GAUR",
            title: "Technical & Project Consultant",
            description: "Mr. Y.C. Gaur is a highly experienced technical and project consultant with deep expertise in engineering solutions and project management. His strategic insights and technical knowledge help in optimizing processes, enhancing efficiency, and ensuring the successful execution of various projects.",
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
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
                <div className="flex justify-center items-center w-full">
                    {/* {foundersData.map((founder, index) => (
                        <FounderCard
                            key={index}
                            name={founder.name}
                            title={founder.title}
                            description={founder.description}
                            image={founder.image}
                            data-aos="fade-up"
                            data-aos-delay={`${index * 200}`}
                        />
                    ))} */}

                    <div
                        className="bg-white py-3 rounded-md border border-solid border-gray-300 shadow-md px-4 grid grid-cols-1 md:grid-cols-2 w-full sm:w-3/4 lg:w-[55%] gap-x-6 justify-center items-center gap-y-4"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="w-full">
                            <img src="/images/laxmi-director.jpg" alt="" className="rounded-md" />
                        </div>
                        <div className="w-full space-y-1">
                            <h2 className="font-semibold text-[24px] leading-tight">Akhilesh Prasad Gupta</h2>
                            <h3 className="font-semibold text-[15px] text-orange-500">Director & CEO</h3>
                            <p className="text-[14px]">About CEO Mr. A.P. Gupta, 1st director of the company, had worked 9+ years with M/s Hindustan Developers Corporation Ltd.  Howrah (W.B) as a Maintenance Engineer and after that he  have been appointed as a head of department with M/s.  Nice Diesel Engine (P) Ltd. New Delhi. Mr A.P Gupta is Director of LEPL since last 13 years as  Electrical Engineer and whole sole of Company.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founders;