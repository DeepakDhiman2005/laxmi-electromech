import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Title } from 'react-head';
import allProducts from '../../../data/allProducts';
import ProductSubCategoryCard from './ProductSubCategoryCard';

const Product = () => {
    const { pathname } = useLocation();

    // Memoize category and subcategory from URL
    const category = useMemo(() => 
        pathname.split('/')[2]?.split('-').join(' ') || ''
    , [pathname]);

    const subCategory = useMemo(() => 
        pathname.split('/')[3]?.split('-').join(' ') || ''
    , [pathname]);

    // Filter category data
    const filteredData = useMemo(() => {
        const categorySlug = pathname.split('/')[2]; // Get raw slug without transformation
        return allProducts.find((item) => item.category === categorySlug) || null;
    }, [pathname]);

    // Filter products by subcategory
    const filteredProducts = useMemo(() => {
        const subCategorySlug = pathname.split('/')[3]; // Get raw subcategory slug
        console.log(subCategorySlug)
        if (filteredData && filteredData.products.length > 0) {
            return filteredData.products.filter(
                (item) => item.subcategory === subCategorySlug
            ) || [];
        }
        return [];
    }, [filteredData, pathname]);

    // State for title
    const [pageTitle, setPageTitle] = useState('');

    // Update title when category or subcategory changes
    useEffect(() => {
        const newTitle = `${subCategory} - ${category}`.trim();
        setPageTitle(newTitle);
    }, [category, subCategory]);

    return (
        <>
            <Title>{pageTitle}</Title>
            <main>
                <div className='w-full'>
                    <img
                        src={filteredData?.banner || '/banners/default.png'} // Add fallback image
                        alt={category}
                        className='w-full'
                    />
                </div>
                <Box sx={{ px: 4, py: 3, width: '100%' }}>
                    <div className='flex justify-start items-center text-[22px] gap-x-2'>
                        <h2 className='font-semibold text-blue-700 capitalize'>{category}</h2>
                        {">"}
                        <h2 className='font-semibold text-blue-700 capitalize'>{subCategory}</h2>
                    </div>
                    <Typography variant='body1'>
                        {filteredData?.description || 'No description available.'}
                    </Typography>

                    <Box sx={{ gap: 6, py: 2, width: '100%' }}>
                        <Box width={"100%"} sx={{ my: 1 }}>
                            <Typography variant="h6">
                                Browse by Ranges ({filteredProducts.length})
                            </Typography>
                            <Grid container spacing={3} sx={{ my: 0.5 }}>
                                {filteredProducts.map((item, index) => (
                                    <Grid key={index} item xs={12} sm={6} md={3}>
                                        <ProductSubCategoryCard {...item} />
                                    </Grid>
                                ))}
                                {filteredProducts.length === 0 && (
                                    <Typography>No products found for this subcategory.</Typography>
                                )}
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </main>
        </>
    );
};

export default Product;