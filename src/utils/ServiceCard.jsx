import React from "react";
import { Card, CardMedia, CardContent, Typography, Stack } from "@mui/material";

const ServiceCard = ({ title, imagePath, details, layout, imageWidth, imageHeight }) => {
    return (
        <Card
            elevation={0}
            sx={{
                display: "flex",
                flexDirection: {
                    xs: "column", // Stack vertically on small screens
                    md: layout, // Use layout prop (row or row-reverse) on medium screens+
                },
                alignItems: { xs: "center", md: "flex-start" }, // Center on small screens
                maxWidth: "100%", // Prevent overflow
            }}
        >
            <CardMedia
                component="img"
                image={imagePath}
                alt={title}
                sx={{
                    m: 2, // Margin around the image
                    width: imageWidth || { xs: "90%", sm: "70%", md: "40%" }, // Use prop or fallback
                    height: imageHeight || { xs: "200px", md: "auto" }, // Use prop or fallback
                    objectFit: "cover", // Ensure image scales properly without distortion
                    borderRadius: 1, // Optional: slight rounding for aesthetics
                }}
            />
            <CardContent
                sx={{
                    flex: 1, // Take remaining space
                    p: 2, // Consistent padding
                }}
            >
                <Typography variant="h5" color="primary" gutterBottom>
                    {title}
                </Typography>
                <Stack spacing={1}>
                    {details.map((item, i) => (
                        <Typography key={i} variant="body2">
                            <Typography
                                variant="body1"
                                component="span"
                                fontWeight="bold"
                            >
                                {item.title}:{" "}
                            </Typography>
                            {item.desc}
                        </Typography>
                    ))}
                </Stack>
            </CardContent>
        </Card>
    );
};

export default ServiceCard;