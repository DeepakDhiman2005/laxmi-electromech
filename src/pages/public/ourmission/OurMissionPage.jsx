import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Card, CardContent, Divider, Grid, Stack, Typography, useTheme } from "@mui/material";
import PointerBox from "../../../utils/PointerBox";
import Img1 from '../../../assets/icons/goal.png';
import Img2 from '../../../assets/icons/binocular.png';
import Img3 from '../../../assets/icons/value.png';

const OurMissionPage = () => {
    const theme = useTheme();

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
                "To design, manufacture, and deliver high-quality electrical panels, automation systems, and EPC solutions that exceed customer expectations, while fostering a culture of innovation, safety, and environmental responsibility.",
                "To provide tailored electrical and automation solutions that meet the unique needs of our customers, backed by exceptional service, support, and expertise.",
                "To empower our customers to achieve their goals by delivering reliable, efficient, and sustainable electrical and automation solutions, while promoting a culture of continuous improvement and excellence."
            ],
        },
        {
            image: Img1,
            title: "Our Mission",
            bgColor: "blue",
            bgColor1: "#e3f2fd",
            items: [
                "To be a global leader in delivering comprehensive electrical solutions, empowering industries to automate, optimize, and thrive.",
                "To illuminate the future of industry and infrastructure through innovative electrical panel, automation, and EPC solutions.",
                "To be the trusted partner for electrical and automation solutions, driving efficiency, sustainability, and growth for our customers and communities."
            ],
        },
        {
            image: Img3,
            title: "Our Values",
            bgColor: "purple",
            bgColor1: "#f3e5f5",
            items: [
                "Customer-centricity",
                "Innovation and excellence",
                "Safety and reliability",
                "Sustainability and environmental responsibility",
                "Collaboration and teamwork",
                "Integrity and transparency",
                "Quality and precision",
                "Adaptability and flexibility"
            ],
        },
    ];

    return (
        <Box sx={{
            py: 3, 
            // px: { xs: 2, sm: 2, md: 2, lg: 12, xl: 12 },
            px: { md: 2, lg: 6, xl: 6, xs: 2 },
            background: '#f1f2f9',
        }}>
            <Box sx={{ pb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h4" fontWeight="bold">
                    Our <Typography component="span" sx={{ color: "primary.main", fontWeight: "bold" }} variant="h4">Mission</Typography>
                    <Divider sx={{ background: theme.palette.primary.deep, height: "3px", width: "50px" }} />
                </Typography>
            </Box>
            <Grid container spacing={3}>
                {sections.map((section, index) => (
                    <Grid item xs={12} lg={4} key={index}>
                        <Box sx={{ py: 3, position: "relative" }} data-aos="fade-up">
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
                            <Card sx={{ background: section.bgColor1, p: 3, height: '440px' }} elevation={0}>
                                <CardContent>
                                    <Stack spacing={2}>
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
