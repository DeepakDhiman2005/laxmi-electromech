import React from "react";
import { Card, CardMedia, CardContent, Typography, Stack } from "@mui/material";

const ServiceCard = ({ title, imagePath, details, layout }) => {
    return (
        <Card elevation={0}
            sx={{
                display: "flex",
                flexDirection: {
                    xs: "column", // Always column on small screens
                    md: layout, // Use the layout prop for medium screens
                },
            }}
        >
            <CardMedia
                component="img"
                image={imagePath}
                alt={title}
                sx={{ m: 2, width: { md: "40%", xs: '90%' }, height: 'auto' }}
            />
            <CardContent>
                <Typography variant="h5" color="primary" gutterBottom>
                    {title}
                </Typography>
                <Stack spacing={1}>
                    {details.map((item, i) => (
                        <Typography key={i} variant="body2">
                            <Typography variant="body1" component="span" fontWeight="bold">
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