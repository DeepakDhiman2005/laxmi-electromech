import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetailsCard = () => {
    return <>
        <Box
            sx={{
                border: '1px solid #e0e0e0',
                p: 2,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 1,
                alignItems: 'start',
                '&:hover': {
                    transition: 'all 0.3s ease-in-out',
                    boxShadow: '0px 0px 3px 3px #e0e0e0'
                }
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img
                    src='https://download.schneider-electric.com/files?p_Doc_Ref=XA2E_CP20054_1&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png'
                    alt='image'
                    style={{
                        width: '150px',
                        height: '150px',
                    }}
                />
            </Box>
            <Typography variant='body2' sx={{ color: '#505050' }}>XA2EVM4LC</Typography>
            <Typography variant='body2' sx={{ color: '#000' }}>round pilot light Ø 22 - red - integral LED - 220 V AC - screw clamp terminals</Typography>
            <Link
                to={'/product-details/XA2EVM4LC'}
                style={{
                    width: '100%'
                }}
            >
                <Button
                    sx={{
                        width: '100%',
                        border: '1px solid #a0a0a0',
                        borderRadius: '2px',
                        color: '#000'
                    }}
                >View details</Button>
            </Link>
        </Box>
    </>
}

export default ProductDetailsCard;