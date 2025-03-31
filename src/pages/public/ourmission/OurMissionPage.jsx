import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Card, CardContent, Divider, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import PointerBox from "../../../utils/PointerBox";
import Img1 from '../../../assets/icons/goal.png';
import Img2 from '../../../assets/icons/binocular.png';
import Img3 from '../../../assets/icons/value.png';

const OurMissionPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    useEffect(() => {
        AOS.init({
            duration: 500, // Duration of animation
            once: true, // Ensures animation runs only once
            easing: "ease-in-out",
        });
    }, []);

    const sections = [
        {
            image: Img2,
            title: "Our Vision",
            bgColor: "green",
            bgColor1: '#ffffff',
            items: [
                "Deliver high-quality electrical panels, automation systems, and EPC solutions with innovation, safety, and sustainability.",
                "Provide tailored electrical and automation solutions with exceptional service and expertise.",
                "Empower customers with reliable, efficient, and sustainable solutions while driving continuous improvement."
            ],
        },
        {
            image: Img1,
            title: "Our Mission",
            bgColor: "blue",
            bgColor1: "#e3f2fd",
            items: [
                "Lead in comprehensive electrical solutions, empowering industries to automate and thrive.",
                "Innovate industry and infrastructure with advanced electrical, automation, and EPC solutions.",
                "Be the trusted partner in electrical and automation, driving efficiency and sustainability."
            ],
        },
        {
            image: Img3,
            title: "Our Values",
            bgColor: "purple",
            bgColor1: "#f3e5f5",
            items: [
                "Customer Focus",
                "Innovation & Excellence",
                "Safety & Reliability",
                "Sustainability",
                "Collaboration",
                // "Integrity & Transparency",
                "Quality & Precision",
                // "Adaptability"
            ],
        },
    ];

    return (
        <Box sx={{
            py: 2,
            pt: 4,
            // px: { xs: 2, sm: 2, md: 2, lg: 12, xl: 12 },
            px: { md: 2, lg: 6, xl: 6, xs: 2 },
            background: '#f1f2f9',
        }}>
            <Grid container spacing={3}>
                {sections.map((section, index) => (
                    <Grid item xs={12} lg={4} key={index}>
                        <Box sx={{ py: 1, position: "relative" }} data-aos="fade-up">
                            <PointerBox
                                bgColor={section.bgColor}
                                image={section.image}
                                textColor="white"
                                width="80%"
                                sx={{
                                    position: "absolute",
                                    top: "-20px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    zIndex: 9999,
                                }}
                            />
                            <Card sx={{ background: section.bgColor1, px: 3, py: 1, height: isMobile ? 'auto': '265px' }} elevation={0}>
                                <CardContent>
                                    <Stack spacing={1}>
                                        <Typography variant="h4" textAlign={'center'}>{section.title}</Typography>
                                        {section.items.map((item, idx) => (
                                            <Stack direction={'row'} key={idx}>
                                                <Typography variant="body2">
                                                    • {item}
                                                </Typography>
                                            </Stack>
                                        ))}
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default OurMissionPage;
