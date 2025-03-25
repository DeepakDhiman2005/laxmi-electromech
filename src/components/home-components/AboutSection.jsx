import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Divider, Typography, useTheme, Grid } from "@mui/material";
import Heading from "../heading/Heading";

const AboutSection = () => {
    const theme = useTheme();

    useEffect(() => {
        AOS.init({
            duration: 300, // Animation duration
            once: true, // Ensures animation runs once
        });
    }, []);

    return (
        <Box
            sx={{
                // py: { xs: 3, sm: 6, md: 6, lg: 8 },
                py: 3,
                // px: { xs: 2, sm: 5, md: 6, lg: 10 },
                px: { md: 2, lg: 6, xl: 6, xs: 2 },
                backgroundColor: theme.palette.background.default,
                width: '100%',
                overflow: 'hidden'
            }}
        >
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6} data-aos="fade-right">
                    <Heading startText="About" endText="Us" justify="start" />
                    <Typography variant="h6" sx={{ lineHeight: 1.8, fontSize: 16 }}>
                        Laxmi Electromech Pvt. Ltd. has been a trusted name in the industry, delivering high-quality electrical and mechanical solutions for years. With a strong foundation built on expertise and innovation, we take pride in offering cutting-edge solutions that cater to various industries. Our commitment to excellence ensures that we exceed customer expectations, establishing ourselves as a reliable partner in the field with superior products and services that stand the test of time.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} data-aos="fade-left">
                    <Box
                        component="img"
                        src="/images/about-us.jpg"
                        alt="About Us"
                        sx={{ width: "100%", borderRadius: 2, boxShadow: 3 }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default AboutSection;
