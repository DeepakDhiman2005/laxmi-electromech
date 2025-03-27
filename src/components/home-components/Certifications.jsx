import { Box, Typography, Grid, Card, CardMedia, CardContent, Modal, IconButton, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close"; // Import CloseIcon
import AOS from "aos";
import "aos/dist/aos.css";
import Heading from "../heading/Heading";

const certifications = [
    {
        title: "ISO Certified",
        image: "/images/certificates/iso.png",
    },
    {
        title: "CPRI Certified",
        image: "/images/certificates/cpri.png",
    },
    {
        title: "MSME Certified",
        image: "/images/certificates/msme.png",
    },
    {
        title: "Registration Certificate",
        image: "/images/certificates/registration-certificate.jpg",
    },
];

const Certifications = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false); // Modal open state
    const [selectedImage, setSelectedImage] = useState(null); // Track selected image

    useEffect(() => {
        AOS.init({
            duration: 300,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    // Handle opening the modal with the clicked image
    const handleOpen = (image) => {
        setSelectedImage(image);
        setOpen(true);
    };

    // Handle closing the modal
    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    };

    return (
        <Box
            sx={{
                py: 3,
                px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 6 },
                textAlign: "center",
                bgcolor: "background.paper",
                overflow: "hidden",
            }}
        >
            <Heading startText="Certifications" endText="& Accreditations" />

            <Grid container spacing={3} justifyContent="center">
                {certifications.map((cert, index) => (
                    <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
                        <Card
                            sx={{
                                textAlign: "center",
                                width: "100%",
                                mx: "auto",
                                borderRadius: 3,
                                boxShadow: 4,
                                transition: "0.3s",
                                "&:hover": { boxShadow: 8, transform: "translateY(-5px)" },
                                cursor: "pointer",
                            }}
                            data-aos={
                                index === 0
                                    ? "fade-right"
                                    : index === 1
                                    ? "fade-up"
                                    : index === 2
                                    ? "fade-down"
                                    : "fade-left"
                            }
                            onClick={() => handleOpen(cert.image)}
                        >
                            <CardMedia
                                component="img"
                                image={cert.image}
                                alt={cert.title}
                                sx={{
                                    height: 130,
                                    width: "100%",
                                    objectFit: "contain",
                                    bgcolor: "#f5f5f5",
                                }}
                            />
                            <CardContent sx={{ padding: "8px", pb: "5px !important", pt: "5px !important" }}>
                                <Typography variant="body1" fontWeight="bold">
                                    {cert.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Modal for Image Viewer */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="certificate-image-viewer"
                aria-describedby="view-certificate-image"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        outline: "none",
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        borderRadius: 2,
                        p: 2,
                        maxWidth: "90vw",
                        maxHeight: "90vh",
                        overflow: "auto",
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    {/* Close Button */}
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: "absolute",
                            top: 8,
                            right: 8,
                            // color: theme.palette.error.main, // Set color to red (or any theme color)
                            bgcolor: "rgba(255, 255, 255, 0.8)", // Background for visibility
                            "&:hover": {
                                bgcolor: "rgba(255, 255, 255, 1)",
                            },
                            zIndex: 1, // Ensure it’s above the image
                        }}
                    >
                        <CloseIcon fontSize="large" /> {/* Increase icon size */}
                    </IconButton>

                    {selectedImage && (
                        <img
                            src={selectedImage}
                            alt="Selected Certificate"
                            style={{
                                maxWidth: "100%",
                                maxHeight: "80vh",
                                objectFit: "contain",
                            }}
                        />
                    )}
                </Box>
            </Modal>
        </Box>
    );
};

export default Certifications;