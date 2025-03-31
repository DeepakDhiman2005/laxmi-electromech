/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Typography, Grid, Divider, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Ab1 from "../../../assets/images/footer2.jpg";
import { serviceData } from "./serviceData";
import ServiceCard from "../../../utils/ServiceCard";
import Heading from "../../../components/heading/Heading";

const OurServices = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                background: '#f1f2f9',
                // background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${Ab1})`,
                // backgroundSize: "cover",
                // backgroundAttachment: "fixed",
                // backgroundPosition: "center",
                // py: { xs: 2, sm: 5, md: 5, lg: 5 },
                // px: { xs: 2, sm: 5, md: 5, lg: 8 },
                py: 2,
                px: { md: 2, lg: 6, xl: 6, xs: 2 },
            }}
        >
            {/* <Box sx={{ pb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h4" fontWeight="bold">
                    Our <Typography component="span" sx={{ color: "primary.main", fontWeight: "bold" }} variant="h4">Services</Typography>
                    <Divider sx={{ background: theme.palette.primary.deep, height: "3px", width: "50px" }} />
                </Typography>
            </Box> */}
            <Heading
                startText="Our"
                endText="Services"
            />

            <Grid container alignItems="center">
                {serviceData?.map((service, index) => (
                    <Grid
                        container
                        key={index}
                        component={motion.div}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        sx={{
                            flexDirection: {
                                md: index % 2 === 0 ? "row" : "row-reverse", // Alternate on medium screens
                            },
                            alignItems: "center",
                        }}
                    >
                        <Grid item xs={12}>
                            {/* Use the reusable ServiceCard component */}
                            <ServiceCard
                                title={service.title}
                                imagePath={service.imagePath}
                                details={service.details}
                                layout={index % 2 === 0 ? "row" : "row-reverse"} // Pass layout as prop
                            />
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default OurServices;