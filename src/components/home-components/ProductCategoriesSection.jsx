import { Box, Grid, Typography, Card, CardContent, useTheme } from "@mui/material";
import { Bolt, Dns, Build } from "@mui/icons-material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Heading from "../heading/Heading";

const productCategories = [
    {
        title: "Electrical Automation",
        description: "Control Panels, MCCs, PLCs, HMIs, SCADA Systems.",
        icon: <Bolt fontSize="large" color="primary" />
    },
    {
        title: "Panel Manufacturing",
        description: "Electrical Panels, Distribution Boards, PDUs, Bus Ducts.",
        icon: <Dns fontSize="large" color="primary" />
    },
    {
        title: "EPC Contracts",
        description: "Turnkey Projects, Electrical Infrastructure, Renewable Energy.",
        icon: <Build fontSize="large" color="primary" />
    },
];

const ProductCategoriesSection = () => {
    const theme = useTheme();

    useEffect(() => {
        AOS.init({
            duration: 300,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <Box
            sx={{
                py: 5,
                px: { md: 2, lg: 4, xl: 4, xs: 2 },
                overflow: "hidden",
                backgroundImage: `url('/images/background.jpg')`, // Background image for the section
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Heading startText="Product" endText="Categories" />
            <Grid container spacing={3} justifyContent="center">
                {productCategories.map((category, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            sx={{
                                textAlign: "center",
                                p: 2,
                                boxShadow: 3,
                                backgroundImage: `url('/images/categoryBg.jpg')`, // Background image for each card
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                display: "flex",
                                flexDirection: "column",
                                height: "100%", 
                                transition: "all 0.4s ease-in-out",
                                // cursor: "pointer",
                                "&:hover": {
                                    transform: "translateY(-5px)",
                                    scale: 1.05,
                                },
                            }}
                            data-aos={index === 0 ? "fade-right" : index === 1 ? "fade-up" : "fade-left"}
                        >
                            <CardContent sx={{ flexGrow: 1, borderRadius: 2 }}>
                                {category.icon}
                                <Typography variant="h6" fontWeight="bold" mt={1}>
                                    {category.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {category.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ProductCategoriesSection;
