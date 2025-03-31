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
                    <Heading startText="About" endText="Us" justify="start" pb={0.5} />
                    <Typography variant="h6" sx={{ lineHeight: 1.8, fontSize: 16 }}>
                        LEPL is a new generation professionally managed engineering organization with dedicated
                        team having in depth knowledge of designing, manufacturing and execution of Switchboards
                        & Bus ducts upto 415 V.
                        Established by engineering professionals with experience of more than 25 years in the field
                        of LV / MV Switchboards & bus ducts manufacturing and has earned itself a distinguished
                        reputation within industry for its innovative product design, unmatched quality, prompt
                        Delivery & After Sales Service.
                        Laxmi Electromech Pvt. Ltd. has state of the art manufacturing facility in NOIDA.
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
