import { Box, Typography, Avatar, Card, CardContent, Divider, useTheme } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Heading from "../../../components/heading/Heading";

// Team Members Data
const teamMembers = [
    {
        name: "John Doe",
        role: "CEO & Founder",
        image: "https://randomuser.me/api/portraits/men/10.jpg",
        description: "Leading with vision and excellence, John has 15+ years of experience in electrical automation & EPC solutions.",
    },
    {
        name: "Sarah Thompson",
        role: "CTO",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
        description: "A tech innovator, Sarah specializes in advanced automation solutions and technical strategy.",
    },
    {
        name: "David Wilson",
        role: "Head of Engineering",
        image: "https://randomuser.me/api/portraits/men/18.jpg",
        description: "Expert in cutting-edge engineering solutions, David ensures top-quality execution in all projects.",
    },
    {
        name: "Emily Carter",
        role: "Project Manager",
        image: "https://randomuser.me/api/portraits/women/22.jpg",
        description: "Emily excels in project coordination, ensuring seamless execution and client satisfaction.",
    },
    {
        name: "Michael Reed",
        role: "Lead Automation Engineer",
        image: "https://randomuser.me/api/portraits/men/25.jpg",
        description: "Michael leads automation projects with a focus on innovation and efficiency.",
    },
    {
        name: "Sophia Adams",
        role: "HR & Culture Lead",
        image: "https://randomuser.me/api/portraits/women/28.jpg",
        description: "Passionate about people, Sophia drives a strong company culture and values.",
    },
];


const TeamCard = ({ testimonial }) => {
    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                p: 3,
                pb: 0,
                my: 2,
                mb: 3,
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

                <Box sx={{ mt: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
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
                        {testimonial.description}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};


const OurTeam = () => {
    const theme = useTheme();
    return (
        <Box sx={{ bgcolor: "grey.100", py: 3, textAlign: "center" }}>
            {/* <Box sx={{ pb: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h4" fontWeight="bold">
                    Our <Typography component="span" sx={{ color: "primary.main", fontWeight: "bold" }} variant="h4">Team</Typography>
                    <Divider sx={{ background: theme.palette.primary.deep, height: "3px", width: "50px" }} />
                </Typography>
            </Box> */}
            <Heading
                startText="Our"
                endText="Team"
            />
            <Typography variant="h6" fontWeight="bold" color="text.primary">
                Leadership & Key Team Members
            </Typography>

            {/* Swiper Slider for Team Members */}
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
                    {teamMembers.map((member, index) => (
                        <SwiperSlide key={index}>
                            <TeamCard testimonial={member} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
};

export default OurTeam;
