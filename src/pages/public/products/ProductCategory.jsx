import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import ProductFilter from './ProductFilter';
import ProductSubCategoryCard from './ProductSubCategoryCard';
import ProductDetailsCard from './ProductDetailsCard';

const ProductCategory = () => {
    return <>
        <Box
            sx={{
                px: 4,
                py: 6,
                width: '100%',
            }}
        >
            <Typography
                variant='h4'
                color='#1C85C6'
                fontWeight={600}
            >Push Buttons, Switches, Pilot Lights and Joysticks</Typography>
            <Typography
                variant='body1'
            >Discover Schneider Electric India’s wide range of push button switches & pilot lights to which are ideal for almost all industrial applications. A comprehensive range - available in metal & plastic versions, our products fit your needs of robustness, security and simplicity. Nearly all the basic aspects of our lives include electronic products in one way or the other.</Typography>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'start',
                    gap: 6,
                    py: 4,
                    width: '100%',
                }}
            >
                <Box
                    sx={{
                        width: '30%',
                    }}
                >
                    <Typography>Filter by:</Typography>
                    <ProductFilter />
                </Box>
                <Box
                    sx={{
                        width: '70%',
                    }}
                >
                    <Typography
                        variant='h5'
                        sx={{
                            color: '#1C85C6'
                        }}
                    >22mm Pushbuttons, switches, pilot lights - Local</Typography>
                    <Typography
                        variant='body1'
                    >
                        Schneider Electric attempts to meet all your workplace, industrial, and domestic electrical demands with efficiency. In order to achieve this goal, we ensure that we provide our customers with innovative and effective solutions that bring them ease, comfort, and peace of mind. Our skilled team of expert professionals has carefully designed a beautiful range of push buttons, switches, and pilot lights called Easy Harmony XA2E.
                    </Typography>
                    {/* <Box
                        width={"100%"}
                        sx={{
                            my: 2,
                        }}
                    >
                        <Typography
                            variant='h6'
                        >Browse by Ranges (3)</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <ProductSubCategoryCard />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <ProductSubCategoryCard />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <ProductSubCategoryCard />
                            </Grid>
                        </Grid>
                    </Box> */}
                    <Box
                        width={"100%"}
                        sx={{
                            my: 2,
                        }}
                    >
                        <Typography
                            variant='h6'
                        >Browse by products (297)</Typography>
                        <Grid container spacing={2} sx={{ my: 1 }}>
                            <Grid item xs={12} md={4}>
                                <ProductDetailsCard />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <ProductDetailsCard />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <ProductDetailsCard />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <ProductDetailsCard />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <ProductDetailsCard />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Box>
    </>
}

export default ProductCategory;