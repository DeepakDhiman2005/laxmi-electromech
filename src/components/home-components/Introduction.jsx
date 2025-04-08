import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import PrevArrow from '../arrows/PrevArrow';
import { useRef } from 'react';
import NextArrow from '../arrows/NextArrow';

const Introduction = () => {
    const swiperRef = useRef(null);
    const images = [
        '/home-banners/1.png',
        // '/home-banners/2.png',
        '/home-banners/3.png',
        '/home-banners/4.png',
    ];

    return (
        <section className="w-full grid grid-cols-1 lg:grid-cols-[2fr_1.07fr] justify-center items-center px-4 sm:px-8 py-2 gap-4">
            <div className="w-full relative overflow-hidden">
                {/* Swiper slider with fade effect */}
                <PrevArrow onClick={() => swiperRef.current.swiper.slidePrev()} />
                <Swiper
                    ref={swiperRef}
                    modules={[Pagination, Autoplay, EffectFade]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    speed={1500}
                    loop={true}
                    className="w-full"
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index} className="w-full flex justify-center items-center overflow-hidden">
                            <img
                                src={src}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-auto object-contain"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <NextArrow onClick={() => swiperRef.current.swiper.slideNext()} />
            </div>
            <div className="w-full hidden lg:flex justify-center items-center">
                <img
                    src="./home-banners/side-banner.png"
                    alt="image"
                    className="w-full h-auto object-contain"
                />
            </div>
        </section>
    );
};

export default Introduction;
