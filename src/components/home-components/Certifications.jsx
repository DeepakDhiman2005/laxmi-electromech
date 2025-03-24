import { Box, Typography, Grid, Card, CardMedia, CardContent, Divider, useTheme } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const certifications = [
    {
        title: "ISO Certified",
        image: "/images/certificates/iso.png", // Replace with actual image URL
    },
    {
        title: "CPRI Certified",
        image: "/images/certificates/cpri.png", // Replace with actual image URL
    },
    {
        title: "MSME Certified",
        image: "/images/certificates/msme.png", // Replace with actual image URL
    },
];

const Certifications = () => {
    const theme = useTheme();


    useEffect(() => {
        AOS.init({
            duration: 300, // Duration of animation
            once: true, // Ensures animation runs only once
            easing: "ease-in-out",
        });
    }, []);

    return (
        <Box sx={{ py: 4, px: { xs: 3, sm: 6, md: 10 }, textAlign: "center", bgcolor: "background.paper", overflow: 'hidden' }}>
            <Box sx={{ pb: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h4" fontWeight="bold">
                    Certifications <Typography component="span" sx={{ color: "primary.main", fontWeight: "bold" }} variant="h4">& Accreditations</Typography>
                    <Divider sx={{ background: theme.palette.primary.deep, height: "3px", width: "50px" }} />
                </Typography>
            </Box>
            {/* <Typography variant="h4" fontWeight="bold" mb={3}>
                Certifications & Accreditations
            </Typography> */}

            <Grid container spacing={4} justifyContent="center">
                {certifications.map((cert, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            sx={{
                                textAlign: "center",
                                borderRadius: 3,
                                boxShadow: 4,
                                transition: "0.3s",
                                "&:hover": { boxShadow: 8, transform: "translateY(-5px)" },
                            }}
                            data-aos={index === 0 ? "fade-right" : index === 1 ? "fade-up" : "fade-left"}
                        >
                            <CardMedia
                                component="img"
                                image={cert.image}
                                alt={cert.title}
                                sx={{
                                    maxHeight: 200, // Adjust this value as needed
                                    maxWidth: "100%", // Ensures it doesn't exceed card width
                                    objectFit: "contain",
                                    p: 2,
                                    bgcolor: "#f5f5f5",
                                }}
                            />

                            <CardContent>
                                <Typography variant="h6" fontWeight="bold">
                                    {cert.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Certifications;
