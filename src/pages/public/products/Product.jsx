import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Title } from 'react-head';
import allProducts from '../../../data/allProducts';
import ProductSubCategoryCard from './ProductSubCategoryCard';
import ProductSidebar from '../../../components/sidebar/ProductSidebar';
import electricalAutomation from '../../../data/electricalAutomation';
import panelManufacturing from '../../../data/panelManufacturing';
import epcContracts from '../../../data/epcContracts';

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
        if (filteredData && filteredData.products.length > 0) {
            return filteredData.products.filter(
                (item) => item.subcategory === subCategorySlug
            ) || [];
        }
        return [];
    }, [filteredData, pathname]);

    const productData = useMemo(() => {
        let category = pathname.split('/')[2];
        let subcategory = pathname.split('/')[3];

        if (category === "electrical-automation") {
            const foundProduct = electricalAutomation.filter((item) => item.category === subcategory)[0];
            return foundProduct?.description || null;
        } else if (category === "panel-manufacturing") {
            const foundProduct = panelManufacturing.filter((item) => item.category === subcategory)[0];
            return foundProduct?.description || null;
        } else if (category === "epc-contracts") {
            const foundProduct = epcContracts.filter((item) => item.category === subcategory)[0];
            return foundProduct?.description || null;
        }
        return null;
    }, [pathname]);

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

                <div className='w-full px-4 lg:px-12 py-3 flex justify-start items-start gap-x-4'>
                    <div className='md:w-[20%] hidden md:block sticky top-32 left-0'>
                        <ProductSidebar />
                    </div>
                    <div className='w-full md:w-[80%] product-description'>
                        <div dangerouslySetInnerHTML={{
                            __html: productData,
                        }} className='w-full border border-solid border-blue-700 py-3 px-2'>
                            {/* <h2 className='text-[20px] text-blue-700'>PLC Control Panel</h2> */}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Product;