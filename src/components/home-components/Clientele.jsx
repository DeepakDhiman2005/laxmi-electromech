import React, { useMemo } from "react";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Heading from "../heading/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

// Register Autoplay module
SwiperCore.use([Autoplay]);

const Clientele = React.memo(() => {
  const theme = useTheme();

  return (
    <div className="py-2 w-full">
      <div className="w-full mx-auto text-center">
        <Heading startText="Our" endText="Valuable Clients" pb={1} />
        <Typography color="textSecondary" className="mt-1">
          Trusted by leading industries in manufacturing, infrastructure, and commercial sectors.
        </Typography>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={0} // No space between slides
          slidesPerView={9} // Adjusted to match max breakpoint for consistency
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            speed: 1500,
          }}
          speed={5000}
          pagination={false}
          navigation={false}
          className="w-full"
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 0 },
            600: { slidesPerView: 3, spaceBetween: 0 },
            960: { slidesPerView: 4, spaceBetween: 0 },
            1280: { slidesPerView: 9, spaceBetween: 0 },
          }}
        >
          {Array(12)
            .fill(0)
            .map((_, index) => (
              <SwiperSlide key={index} className="py-3 m-0 flex justify-center items-center">
                <img
                  src={`/images/clients/${index + 1}.png`}
                  alt={`Client ${index + 1}`}
                  className="w-24 h-24 object-contain rounded-lg m-0 p-0" // Added h-24 for consistent height
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
});

export default Clientele;