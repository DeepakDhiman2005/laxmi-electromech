import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Autoplay, EffectFade, EffectCube } from 'swiper/modules';
import PrevArrow from '../arrows/PrevArrow';
import NextArrow from '../arrows/NextArrow';
import { useRef } from 'react';

const Introduction = () => {
    const swiperRef1 = useRef(null);
    const swiperRef2 = useRef(null);

    const images = [
        '/home-banners/control-panel.png',
        '/home-banners/Electrical-Panels.png'
    ];

    const images2 = [
        '/home-banners/Distribution-Boards.png',
        '/home-banners/MCC-panels.png',
    ];

    return (
        <section className="w-full grid grid-cols-1 lg:grid-cols-[2fr_1.07fr] justify-center items-center px-4 sm:px-8 py-2 gap-4">
            <div className="w-full relative overflow-hidden">
                <PrevArrow onClick={() => swiperRef1.current.swiper.slidePrev()} />
                <Swiper
                    ref={swiperRef1}
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
                        <SwiperSlide key={index} className="w-full flex justify-center items-center overflow-hidden bannerCard">
                            <a className='w-auto h-auto'>
                                <img
                                    src={src}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-auto object-contain"
                                />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <NextArrow onClick={() => swiperRef1.current.swiper.slideNext()} />
            </div>

            <div className="w-full overflow-hidden hidden lg:flex justify-center items-center">
                <Swiper
                    ref={swiperRef2}
                    modules={[Autoplay, EffectCube]}
                    effect="cube"
                    cubeEffect={{
                        shadow: false,
                        slideShadows: false,
                    }}
                    autoplay={{ delay: 3000 }}
                    speed={1500}
                    loop={true}
                    className="w-full"
                >
                    {images2.map((src, index) => (
                        <SwiperSlide key={index} className="w-full flex justify-center items-center overflow-hidden bannerCard">
                            <a className='w-auto h-auto'>
                                <img
                                    src={src}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-auto object-contain"
                                />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Introduction;
