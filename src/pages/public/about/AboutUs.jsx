import { Box, Stack, Typography, Grid, Divider, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import Banner from '../../../utils/Banner'
import Ab from '../../../assets/images/aboutabnner.webp'
import A1 from '../../../assets/images/about.avif'
import OurMissionPage from '../ourmission/OurMissionPage'
import OurJourney from './OurJourney'
import WhatWeDo from './WhatWeDo'
import WhyChooseUs from '../../../components/home-components/WhyChooseUs'
import OurExpertise from './OurExpertise'
import OurTeam from './OurTeam'
import SustainabilitySection from './SustainabilitySection'
import ClientTestimonials from '../../../components/home-components/ClientTestimonials'
import Certifications from '../../../components/home-components/Certifications'
import { Title } from 'react-head'
import Infrastructure from './Infrastructure'
import Founders from './Founders'
import CertificateLicense from '../../../components/home-components/License'

const AboutUs = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <>
            <Title>About Us</Title>
            {/* <Banner
                title="About"
                image={Ab}
                // height={{ sm: '35vh', md: '45vh', xs: '40vh', lg: '40vh', xl: '40vh' }}
                height={{ sm: '35vh', md: '45vh', xs: '40vh', lg: '50vh', xl: '50vh' }}
                titleVariant="h2"
                overlayColor="rgba(0,0,0, 0.7)"
                spacingConfig={{ xl: 6, lg: 6, md: 2, xs: 1 }}
                containerStyles={{ overflow: "hidden" }}
                text="About Us"
            /> */}
            <Box
                sx={{ width: '100%' }}
            >
                <img src={isMobile ? "/banners/about-us-banner-mobile.png": "/banners/about-us-banner.png"} alt="image" style={{ width: '100%', height: 'auto' }} />
            </Box>
            {/* <Box sx={{ px: { xs: 2, sm: 2, md: 2, lg: 12, xl: 12 }, }}> */}
            <Box>
                <Box sx={{ py: 3, px: { xs: 2, md: 4, lg: 6 } }}>
                    {/* Header */}
                    <Box sx={{ pb: 0.5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="h4" fontWeight="bold">
                            About <Typography component="span" sx={{ color: "primary.main", fontWeight: "bold" }} variant="h4">Us</Typography>
                            <Divider sx={{ background: theme.palette.primary.deep, height: "3px", width: "50px" }} />
                        </Typography>
                    </Box>

                    <Grid container spacing={3} alignItems="center">
                        {/* Text Content */}
                        <Grid item xs={12} md={7}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                Powering Innovation, Delivering Excellence
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                Laxmi Electromech Pvt. Ltd. is a leading provider of comprehensive electrical solutions, specializing in automation, panel manufacturing, and EPC contracts. We are committed to innovation, quality, and customer satisfaction, delivering tailored solutions that meet diverse industry needs.
                            </Typography>

                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Stack spacing={1}>
                                        <Typography variant="h6" fontWeight="bold">
                                            Trusted Electrical Solutions
                                        </Typography>
                                        <Typography variant="body2">
                                            Empowering industries with innovative, reliable, and high-quality electrical products for over 25 years.
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Stack spacing={1}>
                                        <Typography variant="h6" fontWeight="bold">
                                            Customized for Excellence
                                        </Typography>
                                        <Typography variant="body2">
                                            Tailored solutions in switchboards, panels, and power distribution to meet your unique requirements.
                                        </Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Image Section */}
                        <Grid item xs={12} md={5}>
                            <Box sx={{ height: 300, width: "100%", borderRadius: 2, overflow: "hidden", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={A1} alt="About Us" style={{ width: "80%", objectFit: "cover" }} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <OurMissionPage />
                <Infrastructure />
                <OurJourney />
                <Founders />
                <WhatWeDo />
                <WhyChooseUs />
                <OurExpertise />
                {/* <OurTeam /> */}
                <SustainabilitySection />
                <ClientTestimonials />
                <Certifications />
                {/* <CertificateLicense/> */}
            </Box>
        </>
    )
}

export default AboutUs
