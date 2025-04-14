import { Title } from "react-head";
import Heading from "../../../components/heading/Heading";
import StarIcon from '@mui/icons-material/Star';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useMediaQuery, useTheme } from "@mui/material";
import CareerForm from "./CareerForm";

const Careers = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const employees = [
        {
            name: "Software Engineer",
            description: "We are looking for an experienced software engineer to join our development team. You will work on exciting projects using modern technologies.",
        },
        {
            name: "Product Manager",
            description: "Lead cross-functional teams to design and develop innovative products. Manage project timelines and collaborate with stakeholders.",
        },
        {
            name: "UI/UX Designer",
            description: "Create user-friendly interfaces and improve user experience. Work closely with developers to implement intuitive designs.",
        },
        {
            name: "Marketing Specialist",
            description: "Develop and execute marketing strategies to drive brand awareness and lead generation. Analyze market trends and customer insights.",
        },
        {
            name: "HR Manager",
            description: "Manage recruitment, employee engagement, and performance management. Foster a positive workplace culture and ensure compliance with policies.",
        },
        {
            name: "Customer Support Representative",
            description: "Provide excellent customer service by resolving inquiries and issues. Ensure a seamless experience for our customers.",
        },
    ];

    return (
        <>
            <Title>Careers at Our Company</Title>
            <div className="w-auto h-auto bannerCard">
                <a className="w-auto h-auto">
                    <img
                        src={isMobile ? "/banners/Career-mobile.png" : "/banners/Career.png"}
                        alt="Career Banner"
                        className="w-full"
                    />
                </a>
            </div>
            <div className="w-full py-3 px-4 lg:px-12 bg-gray-50">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-4">
                    Career
                </h1>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center mb-8 mx-auto">
                    We are always looking for talented and passionate individuals to join our growing team. If you have the skills, dedication, and ambition to make a difference, explore our career opportunities below.
                </p>

                {/* Why Work With Us Section */}
                <section className="mb-12 flex flex-col sm:flex-row justify-center w-full items-center gap-6">
                    <div className="sm:w-1/2 w-full flex justify-start items-start flex-col">
                        <Heading startText="Why Work" endText="With Us?" pb={1} />
                        <p className="text-gray-800 text-[17px] leading-relaxed">
                            We offer competitive salaries and benefits, providing our employees with financial security and growth opportunities. Our company fosters a culture of continuous learning, ensuring that every team member has access to career development resources. We prioritize work-life balance with a flexible and supportive work environment, allowing employees to thrive both professionally and personally. Our inclusive and collaborative company culture promotes teamwork and innovation, ensuring that every voice is heard.
                        </p>
                    </div>
                    <div className="sm:w-1/2 w-full flex justify-center items-center">
                        <img
                            src="https://neoprene.vn/wp-content/uploads/2021/09/work-with-us-header-2.jpg"
                            alt="Why Work With Us"
                            className="w-full h-auto object-cover rounded-lg shadow-md"
                        />
                    </div>
                </section>

                <CareerForm />

                {/* Employee Reviewers with Swiper Slider */}
                {/* <section className="mb-12">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 text-center">
                        Employee Reviewers
                    </h2>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        className="mySwiper"
                    >
                        {employees.map((reviewer, index) => (
                            <SwiperSlide key={index}>
                                <div className="border border-gray-300 rounded-lg shadow-lg p-6 bg-white flex flex-col items-center text-center h-full">
                                    <div className="flex justify-center mb-2">
                                        {Array(5)
                                            .fill(0)
                                            .map((_, i) => (
                                                <StarIcon key={i} fontSize="small" className="text-yellow-400" />
                                            ))}
                                    </div>
                                    <p className="text-gray-700 text-sm mb-4 italic flex-1">
                                        "{reviewer.description}"
                                    </p>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        - {reviewer.name}
                                    </h3>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section> */}
            </div>
        </>
    );
};

export default Careers;