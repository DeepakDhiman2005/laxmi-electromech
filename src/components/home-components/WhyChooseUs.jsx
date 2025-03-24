import { Box, Grid, Typography, Card, CardContent, Divider, useTheme } from "@mui/material";
import { Verified, Speed, SupportAgent, Insights } from "@mui/icons-material";

const uniqueSellingPoints = [
    {
        title: "Proven Expertise",
        description: "Years of experience in delivering cutting-edge solutions.",
        icon: <Verified fontSize="large" sx={{ color: "white" }} />,
    },
    {
        title: "Fast & Efficient",
        description: "Quick turnaround times with top-tier quality assurance.",
        icon: <Speed fontSize="large" sx={{ color: "white" }} />,
    },
    {
        title: "24/7 Support",
        description: "Dedicated customer support available round the clock.",
        icon: <SupportAgent fontSize="large" sx={{ color: "white" }} />,
    },
    {
        title: "Data-Driven Insights",
        description: "Leveraging AI & analytics for smarter decision-making.",
        icon: <Insights fontSize="large" sx={{ color: "white" }} />,
    },
];

const WhyChooseUs = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                py: 8,
                px: { xs: 3, sm: 6, md: 10 },
                backgroundImage: `url('/images/banners/banner1.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                position: "relative",
                color: "white", // Ensure text is visible
            }}
        >
            {/* Overlay for better readability */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay
                }}
            />

            {/* Content Wrapper */}
            <Box sx={{ position: "relative", zIndex: 2 }}>
                <Box sx={{ pb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h4" fontWeight="bold">
                        Why <Typography component="span" sx={{ color: "primary.main", fontWeight: "bold" }} variant="h4">Choose Us?</Typography>
                        <Divider sx={{ background: theme.palette.primary.deep, height: "3px", width: "50px" }} />
                    </Typography>
                </Box>

                <Grid container spacing={4} justifyContent="center">
                    {uniqueSellingPoints.map((point, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: "flex" }}>
                            <Card
                                sx={{
                                    textAlign: "center",
                                    p: 3,
                                    borderRadius: 3,
                                    boxShadow: 4,
                                    transition: "0.4s",
                                    bgcolor: "white",
                                    display: "flex",
                                    flexDirection: "column",
                                    flexGrow: 1,
                                    "&:hover": { boxShadow: 8, transform: "translateY(-5px)" },
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: "50%",
                                        bgcolor: "primary.main",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        mx: "auto",
                                        mb: 2,
                                    }}
                                >
                                    {point.icon}
                                </Box>
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" fontWeight="bold">
                                        {point.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" mt={1}>
                                        {point.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default WhyChooseUs;
