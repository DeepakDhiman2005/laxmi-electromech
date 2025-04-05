import { FaLightbulb } from "react-icons/fa";
import { MdOutlineElectricBolt } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa6";

const HomeCards = () => {
    return (
        <section className="py-3 px-4 sm:px-8 grid grid-cols-1 md:grid-cols-3">
            <div className="flex items-center gap-x-5 group px-6 py-5 bg-gray-200 text-black transition-transform duration-500">
                <FaLightbulb
                    size={25}
                    className="text-blue-700 transition-transform duration-500 group-hover:rotate-[360deg]"
                />
                <div className="flex flex-col">
                    <h2 className="font-semibold text-lg text-black">Creative Solutions</h2>
                    <p className="text-sm main-size">Driving innovation with smart, efficient, and forward-thinking solutions.</p>
                </div>
            </div>

            <div className="flex justify-start items-center gap-x-5 px-6 py-5 bg-[#f19e21] group transition-transform duration-500">
                <MdOutlineElectricBolt
                    size={35}
                    className="text-black transition-transform duration-500 group-hover:rotate-[360deg]"
                />
                <div className="flex flex-col justify-start items-start">
                    <h2 className="font-semibold text-[20px] text-black">Tagline Ideas</h2>
                    <p className="text-[15px] main-size">Empowering technology to transform industries and enhance everyday life.</p>
                </div>
            </div>

            <div className="flex justify-start items-center gap-x-5 px-6 py-5 bg-[#3c3c3c] text-white group transition-transform duration-500">
                <FaCalendarCheck
                    size={35}
                    className="text-gray-100 transition-transform duration-500 group-hover:rotate-[360deg]"
                />
                <div className="flex flex-col justify-start items-start">
                    <h2 className="font-semibold text-[18px] text-white">About Us</h2>
                    <p className="text-[14px] text-white main-size">Laxmi Electromech Pvt. Ltd. provides reliable electrical solutions with expertise in industrial and commercial sectors.</p>
                </div>

            </div>
        </section>
    );
};

export default HomeCards;
