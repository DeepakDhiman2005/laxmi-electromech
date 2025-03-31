import { useMemo, useCallback } from 'react';
import { Box, Button, Card, CardContent, Divider, Grid, Stack, TextField, Typography, IconButton, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Map, Headset, Drafts, Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

import GoogleMap from './GoogleMap';
import C1 from '../../../assets/images/contact.webp';
import Banner from '../../../utils/Banner';
import { Title } from 'react-head';

const ContactUs = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    // Validation Schema
    const validationSchema = useMemo(
        () =>
            yup.object({
                name: yup.string().required('Name is required'),
                email: yup.string().email('Enter a valid email').required('Email is required'),
                contact: yup.string().min(10, 'Contact number should be at least 10 characters').required('Contact number is required'),
            }),
        []
    );

    // Formik for Form Handling
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            contact: '',
            address: '',
            message_title: '',
            message: '',
        },
        validationSchema,
        onSubmit: useCallback((values) => {
            console.log(values); // Handle form submission
        }, []),
    });

    // Hover Styles
    const hoverStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        gap: 1,
        color: '#939393',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
            textDecoration: 'underline',
            color: theme.palette.primary.main,
            transform: 'scale(1.05)',
        },
    };

    const hoverStyle1 = {
        height: '85px',
        width: '85px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        '&:hover': {
            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.5)',
        },
    };

    // Contact Cards Data
    const contactCards = [
        { icon: <Map />, title: 'Our Location', details: [' A-139, B-06, GALI NO. 1,', ' MADHU VIHAR, I.P EXTENSION, DELHI110092'] },
        { icon: <Drafts />, title: 'Send an Email', details: ['info@laxmielectromech.com', 'apglaxmi2009@gmail.com'] },
        { icon: <Headset />, title: 'Contact Us', details: [' +91-9811983451', '+91-9643401344'] },
    ];

    return (
        <>
            <Title>Contact Us</Title>
            {/* <Banner
                title="Contact"
                image={C1}
                // height={{ sm: '35vh', md: '45vh', xs: '40vh', lg: '40vh', xl: '40vh' }}
                height={{ sm: '35vh', md: '45vh', xs: '40vh', lg: '50vh', xl: '50vh' }}
                titleVariant="h2"
                overlayColor="rgba(0,0,0, 0.7)"
                spacingConfig={{ xl: 6, lg: 6, md: 2, xs: 1 }}
                containerStyles={{ overflow: "hidden" }}
                text="ContactUs"
            /> */}
            <Box
                sx={{ width: '100%' }}
            >
                <img src={isMobile ? "/banners/contact-us-banner-mobile.png" : "/banners/contact-us-banner.png"} alt="image" style={{ width: '100%', height: 'auto' }} />
            </Box>
            {/* Contact Information */}
            {/* <Box sx={{ py: 2, px: { lg: 12, md: 2, sm: 2, xs: 2 }, background: theme.palette.info.main }}> */}
            <Box sx={{ py: 2, px: { lg: 6, md: 2, sm: 2, xs: 2 }, background: theme.palette.info.main }}>
                <Grid container spacing={2} justifyContent="space-between">
                    {contactCards.map((card, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Card elevation={0} sx={{ background: '#FFFFFF' }}>
                                <CardContent>
                                    <Stack direction="column" spacing={1} alignItems="center" justifyContent="center">
                                        <Box sx={{ ...hoverStyle1, background: theme.palette.error.main, color: '#fff', p: 1 }}>
                                            {card.icon}
                                        </Box>
                                        <Box sx={{ p: 2, color: theme.palette.primary.main }}>
                                            <Typography variant="h5" fontWeight="bold">{card.title}</Typography>
                                            {card.details.map((detail, i) => (
                                                <Typography variant="body2" color="info.dark" key={i}>{detail}</Typography>
                                            ))}
                                        </Box>
                                    </Stack>
                                </CardContent>
                                {index < contactCards.length - 1 && <Divider />}
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Contact Form & Sidebar */}
                <Grid container spacing={2} sx={{ py: 2, alignItems: 'stretch' }}>
                    {/* Contact Form */}
                    <Grid item lg={7} xl={8} xs={12} sx={{ display: 'flex' }}>
                        <Card elevation={0} sx={{ p: { lg: 4, xs: 2 }, background: '#FFFFFF', display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <CardContent component="form" onSubmit={formik.handleSubmit} sx={{ flex: 1 }}>
                                <Grid container spacing={2}>
                                    {['name', 'email', 'contact', 'message_title'].map((field) => (
                                        <Grid item xs={12} md={6} key={field}>
                                            <TextField
                                                fullWidth
                                                size="small"
                                                placeholder={field.replace(/_/g, ' ')}
                                                type={field === 'contact' ? 'tel' : 'text'}
                                                {...formik.getFieldProps(field)}
                                                error={formik.touched[field] && Boolean(formik.errors[field])}
                                                helperText={formik.touched[field] && formik.errors[field]}
                                                sx={{ border: '1px solid #9e9e9e' }}
                                            />
                                        </Grid>
                                    ))}
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            size="small"
                                            placeholder="Enter Your Message..."
                                            multiline
                                            rows={2}
                                            {...formik.getFieldProps('message')}
                                            error={formik.touched.message && Boolean(formik.errors.message)}
                                            helperText={formik.touched.message && formik.errors.message}
                                            sx={{ border: '1px solid #9e9e9e' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <Button fullWidth size="large" variant="contained" type="submit">
                                            Send
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Sidebar */}
                    <Grid item lg={5} xl={4} xs={12} sx={{ display: 'flex' }}>
                        <Box sx={{ background: theme.palette.info.light, flex: 1 }}>
                            <Card elevation={0} sx={{ p: { lg: 4, xs: 2 }, background: '#FDFDFD', display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <CardContent sx={{ flex: 1 }}>
                                    <Typography variant="h3" fontWeight="bold">Get in Touch</Typography>
                                    <Typography variant="body1" sx={{ pl: 0.8 }}>
                                        Have any questions or need assistance? Contact us today, and our team will be happy to help.
                                        Whether you’re looking for more information, need technical support, or just want to share feedback,
                                        our dedicated team is here to assist you every step of the way.
                                        Reach out via email, phone, or follow us on social media to stay updated on the latest news, updates, and special offers.
                                        We value your input and look forward to hearing from you!
                                    </Typography>

                                    <Stack direction="row">
                                        {[Facebook, Instagram, Twitter, LinkedIn].map((Icon, i) => (
                                            <IconButton key={i} sx={hoverStyle}>
                                                <Icon />
                                            </IconButton>
                                        ))}
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>

                {/* Google Map */}
                <Box><GoogleMap /></Box>
            </Box>
        </>
    );
};

export default ContactUs;
