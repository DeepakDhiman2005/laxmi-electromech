import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import DiscoverSection from './DiscoverSection';
import ExploreSection from './ExploreSection';
import ProductSection3 from './ProductSection3';
import ProductSubCategoryCard from './ProductSubCategoryCard';
import { useLocation } from 'react-router-dom';
import { Title } from 'react-head';

const Product = () => {
    const { pathname } = useLocation();
    return <>
        <main>
            {/* <Box
                sx={{
                    height: 300, // Adjust height as needed
                    backgroundImage: "url('https://5.imimg.com/data5/SELLER/Default/2024/8/445333369/PV/ZO/EP/228046518/banner-two.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingLeft: 10,
                    paddingRight: 10,
                    color: "white",
                    textAlign: "center",
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'start',
                        justifyContent: 'start',
                        flexDirection: 'col',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: 40,
                            fontWeight: 700,
                            color: 'black'
                        }}
                    >Control Panels</Typography>
                </Box>
                <Box>
                </Box>
            </Box>

            <Box
                sx={{
                    paddingLeft: 6,
                    paddingRight: 6,
                    paddingTop: 8,
                    paddingBottom: 8,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems: 'start',
                    gap: 8,
                }}
            >
                <DiscoverSection />
                <ExploreSection />
                <ProductSection3 />
            </Box> */}
            <Title>{pathname.split('/')[2].split('-').join(' ')}</Title>
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
                    textTransform={'capitalize'}
                >{pathname.split('/')[2].split('-').join(' ')}</Typography>
                <Typography
                    variant='body1'
                >Discover Schneider Electric India’s wide range of push button switches & pilot lights to which are ideal for almost all industrial applications. A comprehensive range - available in metal & plastic versions, our products fit your needs of robustness, security and simplicity. Nearly all the basic aspects of our lives include electronic products in one way or the other.</Typography>

                <Box
                    sx={{
                        gap: 6,
                        py: 4,
                        width: '100%',
                    }}
                >
                    <Box width={"100%"} sx={{ my: 1 }}>
                        <Typography variant="h6">Browse by Ranges (3)</Typography>
                        <Grid container spacing={3} sx={{ my: 0.5 }}>
                            <Grid item xs={12} sm={6} md={3}>
                                <ProductSubCategoryCard />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <ProductSubCategoryCard />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <ProductSubCategoryCard />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <ProductSubCategoryCard />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <ProductSubCategoryCard />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <ProductSubCategoryCard />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </main>
    </>
}

export default Product;