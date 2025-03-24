import { Box, Typography, Stack, Button, Card } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCube } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useMediaQuery, useTheme } from "@mui/material";
import { bannerData } from "./bannerData";

const Banner = () => {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("sm")); // Check if screen is xs (small)

    return (
        // <Box sx={{ position: "relative", width: '98.9vw', overflow: "hidden" }}>
        <Box sx={{ position: "relative", width: '100%', overflow: "hidden" }}>
            {/* <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation={!isXs} // Enable navigation only for large screens
                pagination={{ clickable: true }}
                spaceBetween={10}
                slidesPerView={1}
                className="swiper-container"
            > */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectCube]}
                effect="cube"
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                speed={1600}
                navigation={!isXs} // Enable navigation only for large screens
                pagination={{ clickable: true }}
                className="swiper-container"
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
            >
                {bannerData.map((item, i) => (
                    <SwiperSlide key={i}>
                        <Card elevation={0} >
                            {/* Card Media (Image) */}
                            <Box sx={{ position: "relative", width: "100%", height: { xl: "82vh", md: "70vh", sm: "70vh", xs: "50vh" } }}>
                                <Box
                                    sx={{
                                        background: `url(${item.imagePath}) no-repeat center/cover`,
                                        objectFit: "cover",
                                        height: "100%",
                                    }}
                                />

                                {/* Overlay Card Content */}
                                <Stack
                                    sx={{
                                        position: "absolute",
                                        top: { xs: "10%", sm: "20%", md: "30%" },
                                        left: { xs: "5%", sm: "10%" },
                                        backgroundColor: "rgba(0,0,0,0.5)",
                                        color: "white",
                                        padding: "20px",
                                        width: { xs: "80%", sm: "60%", md: "40%" },
                                        borderRadius: "8px",
                                    }}
                                >
                                    <Typography variant="h3" fontWeight="bold" sx={{ fontSize: { md: "50px", xs: "30px" } }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ mt: 1 }}>
                                        {item.description}
                                    </Typography>
                                    <Box>
                                        <Button variant="contained" color="primary" sx={{ mt: 2 }}>View Details</Button>
                                    </Box>
                                </Stack>
                            </Box>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default Banner;
