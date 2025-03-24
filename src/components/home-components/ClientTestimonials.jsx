import { Box, Typography, Avatar, Card, CardContent, Divider, useTheme } from "@mui/material";
import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

const testimonials = [
    {
        title: "Love the simplicity",
        feedback:
            "They understood our brand and created a stunning website design. Professional, responsive, and on-time delivery. Highly recommended!",
        name: "Allan Collins",
        designation: "Managing Director",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        title: "Excellent Designs",
        feedback:
            "Efficient, reliable, and results-oriented. Visually appealing website, improved online visibility. Highly recommended!",
        name: "Tanya Grant",
        designation: "CEO & Founder",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        title: "Efficient and Reliable",
        feedback:
            "Best decision we made. Stunning website, exceptional support. Always available and prompt issue resolution. Hassle-free experience!",
        name: "Clay Washington",
        designation: "Fashion Designer",
        image: "https://randomuser.me/api/portraits/men/58.jpg",
    },
    {
        title: "Exceptional Development",
        feedback:
            "Their development team built a fast and scalable application for us. Top-notch coding standards and great communication throughout the process.",
        name: "Samantha Reed",
        designation: "Product Manager",
        image: "https://randomuser.me/api/portraits/women/37.jpg",
    },
    {
        title: "Marketing Excellence",
        feedback:
            "Their digital marketing strategies brought us more leads than ever. Data-driven and innovative solutions that actually work!",
        name: "Michael Dawson",
        designation: "Head of Marketing",
        image: "https://randomuser.me/api/portraits/men/21.jpg",
    },
    {
        title: "Reliable Support",
        feedback:
            "Their IT support team is always available. Quick response times and proactive solutions keep our systems running smoothly.",
        name: "Rachel Parker",
        designation: "Operations Manager",
        image: "https://randomuser.me/api/portraits/women/29.jpg",
    },
];

const TestimonialCard = ({ testimonial }) => {
    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                p: 3,
                pb: 0,
                my: 2,
                mb: 6,
                textAlign: "center",
                position: "relative",
                boxShadow: 3,
                borderRadius: 3,
                overflow: "hidden",
            }}
        >
            {/* Quote Design */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 100,
                    height: 100,
                    bgcolor: "#1C85C6",
                    borderBottomRightRadius: "120%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <FormatQuoteIcon sx={{ fontSize: 35, transform: "rotate(180deg)", color: "white" }} />
            </Box>

            <CardContent sx={{ flexGrow: 1, mt: 4 }}>
                <Typography variant="h6" fontWeight="bold" color="#1C85C6">
                    {testimonial.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {testimonial.feedback}
                </Typography>

                <Box sx={{ mt: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Avatar
                        src={testimonial.image}
                        alt={testimonial.name}
                        sx={{
                            width: 60,
                            height: 60,
                            border: "2px solid #1C85C6",
                        }}
                    />
                    <Typography fontWeight="bold" color="primary.dark" sx={{ mt: 1 }}>
                        {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {testimonial.designation}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

const ClientTestimonials = () => {
    const theme = useTheme();
    return (
        <Box sx={{ bgcolor: "grey.100", py: 3, textAlign: "center" }}>
            <Box sx={{ pb: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h4" fontWeight="bold">
                    Client <Typography component="span" sx={{ color: "primary.main", fontWeight: "bold" }} variant="h4">Testimonials</Typography>
                    <Divider sx={{ background: theme.palette.primary.deep, height: "3px", width: "50px" }} />
                </Typography>
            </Box>
            <Typography variant="h6" fontWeight="bold" color="text.primary">
                What our customers say
            </Typography>

            {/* Swiper Slider for Testimonials */}
            <Box sx={{ px: 2 }}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={true}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        600: { slidesPerView: 1 },
                        900: { slidesPerView: 2 },
                        1200: { slidesPerView: 3 },
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <TestimonialCard testimonial={testimonial} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
};

export default ClientTestimonials;
