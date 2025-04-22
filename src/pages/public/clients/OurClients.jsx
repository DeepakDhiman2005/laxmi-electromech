import { Title } from "react-head";
import Heading from "../../../components/heading/Heading";
import { useMediaQuery, useTheme } from "@mui/material";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurClients = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return <>
        <Title>Our Clients</Title>
        <div className='w-auto h-auto bannerCard'>
            <a className="w-auto h-auto">
                <img src={isMobile ? "/banners/Our-Client-mobile.png" : "/banners/our-client.png"} alt="image" className="w-auto" />
            </a>
        </div>
        <main className="w-full px-4 py-6 lg:px-12">
            {/* Page Heading */}
            <Heading startText="Our" endText="Valuable Clients" pb={0} />

            {/* Top Section: Trusted Clients & Testimonials */}
            <div className="w-full flex flex-col justify-center items-center">
                <h2 className="text-[20px] text-gray-900 font-bold my-4">See what our clients say about us</h2>
                <section className="flex w-full justify-center gap-6 flex-col sm:flex-row">
                    {/* Trusted Clients Card */}
                    <div className="bg-gradient-to-br from-blue-50 to-white shadow-sm border border-gray-200 p-8 rounded-xl w-full sm:w-1/2 text-center transform hover:-translate-y-2 transition-all duration-300"
                        data-aos="fade-up"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine"
                    >
                        <h2 className="text-2xl sm:text-3xl text-orange-500 font-bold mb-4">
                            Trusted by Industry Leaders
                        </h2>
                        <p className="text-gray-700 mb-4">
                            We take pride in serving a diverse range of clients across multiple industries, ensuring
                            quality and trust in every collaboration.
                        </p>
                        <p className="text-gray-600 text-sm italic">
                            Partnering with over <strong>50+ global companies</strong>, we deliver tailored solutions
                            that drive success and foster long-term relationships.
                        </p>
                        <div className="mt-6">
                            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full">
                                50+ Happy Clients
                            </span>
                        </div>
                    </div>

                    {/* Testimonials Card */}
                    <div className="bg-gradient-to-br from-blue-50 to-white shadow-sm border border-gray-200 p-8 rounded-xl w-full sm:w-1/2 text-center transform hover:-translate-y-2 transition-all duration-300"
                        data-aos="fade-up"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine"
                    >
                        <h3 className="text-2xl sm:text-3xl text-orange-500 font-bold mb-4">
                            What Our Clients Say
                        </h3>
                        <p className="text-gray-600 mb-4">
                            "The team consistently delivers high-quality solutions that help us drive innovation. Their
                            dedication to excellence is unparalleled." – <strong>Ashish Gupta, CEO of Laxmi Electromech Pvt. Ltd.</strong>
                        </p>
                        <p className="text-gray-600 text-sm">
                            "Their proactive approach and attention to detail have transformed our business operations." –
                            <strong> Bhuvan Pichai JT Electrical Engineer CPWD, Ashish Gupta G.M DLF India Ltd.</strong>
                        </p>
                        <div className="mt-6">
                            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full">
                                5-Star Reviews
                            </span>
                        </div>
                    </div>
                </section>
            </div>

            {/* Clients Logos Grid */}
            <div className="flex flex-col w-full justify-center items-center gap-y-2">
                {/* <h2 className="text-2xl sm:text-3xl text-gray-900 font-bold my-4">
                    We have served over <strong>12 customers</strong> across <strong>8 countries</strong>
                </h2> */}
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 my-6 md:grid-cols-6 lg:grid-cols-8 gap-y-6">
                    {/* {Array.from({ length: 12 }).map((_, index) => ( */}
                    {Array.from({ length: 11 }).map((_, index) => (
                        <div key={index} className="flex w-full justify-center items-center">
                            <img
                                src={`/images/clients/${index + 1}.png`}
                                alt={`Client ${index + 1}`}
                                className="w-24 h-24 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    </>
};

export default OurClients;
