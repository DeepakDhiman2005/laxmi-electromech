import React, { useMemo } from "react";
import { Box, Typography, Divider, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Heading from "../heading/Heading";

const Clientele = React.memo(() => {
    const theme = useTheme();

    // Memoize clients array to prevent re-renders
    const clients = useMemo(() => [
        { name: "Manufacturing", image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=300&h=200&auto=format&fit=crop" },
        { name: "Infrastructure", image: "https://images.unsplash.com/photo-1505238680356-667803448bb6?w=300&h=200&auto=format&fit=crop" },
        { name: "Commercial", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=300&h=200&auto=format&fit=crop" },
        { name: "Automotive", image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=300&h=200&auto=format&fit=crop" },
        { name: "Healthcare", image: "https://images.unsplash.com/photo-1576091160501-bbe57469278b?w=300&h=200&auto=format&fit=crop" },
        { name: "Technology", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&auto=format&fit=crop" },
    ], []);

    return (
        <Box py={2}>
            <Box maxWidth="lg" mx="auto" textAlign="center">
                {/* <Box sx={{ pb: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h4" fontWeight="bold">
                        Our <Typography component="span" sx={{ color: "primary.main", fontWeight: "bold" }} variant="h4">Clientele</Typography>
                        <Divider sx={{ background: theme.palette.primary.deep, height: "3px", width: "50px" }} />
                    </Typography>
                </Box> */}
                <Heading
                    startText="Our"
                    endText="Clientele"
                    pb={1}
                />
                <Typography color="textSecondary" mt={1}>
                    Trusted by leading industries in manufacturing, infrastructure, and commercial sectors.
                </Typography>
                <Grid container spacing={3} mt={1}>
                    {clients.map((client, index) => (
                        <Grid item xs={6} md={4} lg={2} key={index}>
                            <Card sx={{ borderRadius: 2, boxShadow: 1, textAlign: 'center' }}> {/* Lowered boxShadow */}
                                <CardMedia
                                    component="img"
                                    height="100"
                                    image={client.image || "https://via.placeholder.com/150"}
                                    alt={client.name}
                                    sx={{ objectFit: "cover" }}
                                    loading="lazy" // Lazy load images
                                />
                                <CardContent>
                                    <Typography fontWeight={600} color="textPrimary">
                                        {client.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
});

export default Clientele;
