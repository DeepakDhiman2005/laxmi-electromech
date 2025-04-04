/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Grid, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Ab1 from "../../../assets/images/footer2.jpg";
import ServiceCard from "../../../utils/ServiceCard";
import Heading from "../../../components/heading/Heading";
import { FaCheckCircle } from "react-icons/fa";

import C1 from '../../../assets/images/automation.png';
import C2 from '../../../assets/images/epc.avif';
import C3 from '../../../assets/images/panel-manufacturing.png';

const CheckPoint = ({ children }) => (
    <div className="flex justify-start items-center gap-x-2">
        <FaCheckCircle size={18} className="text-[var(--colorOne)]" />
        <span className="font-medium">{children}</span>
    </div>
);

const serviceData = [
    {
        id: 1,
        title: "Electrical Automation Services",
        imagePath: C1,
        clipPath: 'right',
        details: (
            <div className="flex flex-col justify-start items-start gap-y-2">
                <p>
                    We specialize in providing state-of-the-art electrical automation services tailored to enhance
                    efficiency, safety, and productivity. Our solutions ensure seamless integration with existing
                    infrastructure, delivering optimal performance across industrial and commercial applications.
                </p>
                <p>
                    From initial design to final commissioning, our team of experts ensures that your automation
                    systems are built to the highest standards. We offer end-to-end solutions, including panel
                    manufacturing, programming, and seamless system integration.
                </p>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <CheckPoint>Custom Design & Engineering</CheckPoint>
                    <CheckPoint>High-Quality Panel Manufacturing</CheckPoint>
                    <CheckPoint>Advanced PLC, HMI & SCADA Programming</CheckPoint>
                    <CheckPoint>Flawless Installation & Commissioning</CheckPoint>
                    <CheckPoint>Ongoing Maintenance & Upgrades</CheckPoint>
                </div>
            </div>
        ),
    },
    {
        id: 2,
        title: "EPC Contracts Services",
        clipPath: 'left',
        imagePath: C2,
        details: (
            <div className="flex flex-col justify-start items-start gap-y-4">
                <p>
                    Our EPC (Engineering, Procurement, and Construction) services provide end-to-end solutions for industrial and infrastructure projects. From project management and engineering to procurement, construction, and commissioning, we ensure seamless execution with high-quality standards and cost efficiency. Our expertise spans electrical, mechanical, and civil engineering, delivering customized solutions with long-term reliability.
                </p>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    <CheckPoint>Comprehensive Project Planning</CheckPoint>
                    <CheckPoint>Expert Engineering & Design</CheckPoint>
                    <CheckPoint>High-Quality Material Procurement</CheckPoint>
                    <CheckPoint>Efficient Construction Execution</CheckPoint>
                    <CheckPoint>Seamless System Commissioning</CheckPoint>
                    <CheckPoint>Maintenance & Repair Services</CheckPoint>
                    <CheckPoint>Optimized Performance & Reliability</CheckPoint>
                </div>
            </div>
        ),
    },
    {
        id: 3,
        title: "Panel Manufacturing",
        clipPath: 'right',
        imagePath: C3,
        details: (
            <div className="flex flex-col justify-start items-start gap-y-4">
                <p>
                    We provide high-quality, custom-built panel solutions to meet diverse electrical and automation needs.
                    Our motor control panels (MCPs) ensure precise motor operations, improving efficiency and system reliability.
                    Power distribution units (PDUs) guarantee safe, scalable, and energy-efficient management across industrial,
                    commercial, and residential applications.
                </p>
                <p>
                    Our bus duct systems enable high-capacity power transmission, minimizing energy losses and optimizing
                    electrical distribution for large-scale installations. Additionally, our electrical control and automation
                    panels integrate cutting-edge technologies, streamlining industrial processes for enhanced flexibility
                    and productivity.
                </p>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    <CheckPoint>Precision Motor Control Panels (MCPs)</CheckPoint>
                    <CheckPoint>Reliable Power Distribution Units (PDUs)</CheckPoint>
                    <CheckPoint>High-Capacity Bus Duct Systems</CheckPoint>
                    <CheckPoint>Advanced Automation & Control Panels</CheckPoint>
                </div>
            </div>
        ),
    },
];

const OurServices = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                background: '#f1f2f9',
                py: 2,
                px: { md: 2, lg: 4, xl: 4, xs: 2 },
            }}
        >
            <Heading startText="Our" endText="Services" />
            <Grid container alignItems="center">
                {serviceData.map((service, index) => (
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
                                md: index % 2 === 0 ? "row" : "row-reverse",
                            },
                            alignItems: "center",
                        }}
                    >
                        <Grid item xs={12}>
                            <ServiceCard
                                title={service.title}
                                imagePath={service.imagePath}
                                clipPath={service?.clipPath}
                                details={service.details}
                                layout={index % 2 === 0 ? "row" : "row-reverse"}
                            />
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default OurServices;
