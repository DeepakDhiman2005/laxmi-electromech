import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';
import CountCard from "../cards/CountCard";

const LaserCuttingSection = () => {
    const countcards = [
        { number: 16, content: 'Years of industry expertise' },
        { number: 8710, content: 'Successful elevator & escalator installations' },
        { number: 8617, content: 'Custom mobility solutions for every space' },
        { number: 129682, content: 'Trusted clients and business partners' },
    ];

    return (
        <section className="w-full bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)),url('/images/bg-project.png')] bg-bottom text-white gap-y-6 flex flex-col justify-center items-center bg-fixed bg-cover bg-no-repeat py-3 md:py-4 px-4 md:px-8">
            <h2 className="font-semibold text-[28px] sm:text-[35px] uppercase text-center">
                Our Projects
            </h2>

            <div className="w-full xl:w-[85%] grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Left Image */}
                <div className="w-full space-y-5">
                    <div className='w-full'>
                        <Swiper
                            effect="cube"
                            grabCursor={true}
                            loop={true}
                            speed={1200}
                            cubeEffect={{
                                // shadow: true,
                                // slideShadows: true,
                                // shadowOffset: 20,
                                // shadowScale: 0.94,
                            }}
                            autoplay={{ delay: 2000 }}
                            modules={[EffectCube, Autoplay]}
                            className="w-full max-h-[300px]"
                        >
                            {[
                                // "/images/product-images/fabrication-plant/1.png",
                                // "/images/product-images/fabrication-plant/1.png"
                                'https://detricaelectromechanical.com/assets/img/service/Commercial-electrical-works.jpg',
                                'https://detricaelectromechanical.com/assets/img/service/Commercial-electrical-works.jpg',
                                'https://detricaelectromechanical.com/assets/img/service/Commercial-electrical-works.jpg',
                            ].map((img, idx) => (
                                <SwiperSlide key={idx}>
                                    <img
                                        src={img}
                                        alt={`Slide ${idx + 1}`}
                                        className="w-full h-auto max-h-[300px] object-contain mx-auto rounded"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div
                        style={{
                            backgroundColor: "#585858cc",
                            boxShadow: "0 2px 10px #00000033",
                        }}
                        className="w-full h-full rounded-lg p-2 text-white flex flex-col justify-start items-center gap-y-1"
                    >
                        <p className="text-[14px] text-center">We provide custom electrical panels with design, installation, and commissioning for safe, efficient power control in industrial and commercial use.</p>

                    </div>

                    {/* <CountCard
                        number={900}
                        content='Years of industry expertise'
                    /> */}
                </div>

                {/* Center Text */}
                <div className="text-center md:text-left">
                    <p className="mb-2 text-center main-size">
                        Laxmi Electromech Pvt. Ltd. has a strong track record in executing turnkey projects across industrial, commercial, and infrastructure sectors. We specialize in EPC contracts covering electrical infrastructure development, substation installation, transmission lines, and renewable energy integration. Our expertise includes automation and control systems (PLCs, HMIs, SCADA), energy-efficient solutions, and customized panel manufacturing. Backed by ISO, CPRI, and MSME certifications, we ensure reliable, high-quality execution with a focus on performance, sustainability, and innovation.
                    </p>
                </div>

                {/* Right Image Swiper */}
                <div className="w-full space-y-5">
                    <div className='w-full'>
                        <Swiper
                            effect="cube"
                            grabCursor={true}
                            loop={true}
                            speed={1200}
                            cubeEffect={{
                                shadow: true,
                                slideShadows: true,
                                shadowOffset: 20,
                                shadowScale: 0.94,
                            }}
                            autoplay={{ delay: 2000 }}
                            modules={[EffectCube, Autoplay]}
                            className="w-full max-h-[300px]"
                            dir='rtl' // reverse
                        >
                            {[
                                // "/images/product-images/fabrication-plant/luser-cutting-2.png",
                                // "/images/product-images/fabrication-plant/luser-cutting-2.png",
                                'https://tiimg.tistatic.com/fp/1/003/230/commercial-electrical-contractors-service-965.jpg',
                                'https://tiimg.tistatic.com/fp/1/003/230/commercial-electrical-contractors-service-965.jpg',
                                'https://tiimg.tistatic.com/fp/1/003/230/commercial-electrical-contractors-service-965.jpg',
                            ].map((img, idx) => (
                                <SwiperSlide key={idx}>
                                    <img
                                        src={img}
                                        alt={`Slide ${idx + 1}`}
                                        className="w-full h-auto max-h-[300px] object-contain mx-auto rounded"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div
                        style={{
                            backgroundColor: "#585858cc",
                            boxShadow: "0 2px 10px #00000033",
                        }}
                        className="w-full h-full rounded-lg p-2 text-white flex flex-col justify-start items-center gap-y-1"
                    >
                        <p className="text-[14px] text-center">Reliable control and PLC panels designed for efficient automation and seamless industrial performance.</p>
                    </div>
                    {/* <CountCard
                        number={900}
                        content='Years of industry expertise'
                    /> */}
                </div>
            </div>

            {/* <div className="w-full xl:w-[85%] gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                {countcards.map((item, index) => (
                    <CountCard key={index} {...item} />
                ))}
            </div> */}
        </section>
    );
};

export default LaserCuttingSection;
