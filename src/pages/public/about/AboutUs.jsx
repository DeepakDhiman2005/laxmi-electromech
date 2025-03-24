import { Box, Stack, Typography, Grid, Divider, useTheme } from '@mui/material'
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

const AboutUs = () => {
    const theme = useTheme();
    return (
        <>
            <Title>About Us</Title>
            <Banner
                title="About"
                image={Ab}
                // height={{ sm: '35vh', md: '45vh', xs: '40vh', lg: '40vh', xl: '40vh' }}
                height={{ sm: '35vh', md: '45vh', xs: '40vh', lg: '50vh', xl: '50vh' }}
                titleVariant="h2"
                overlayColor="rgba(0,0,0, 0.7)"
                spacingConfig={{ xl: 6, lg: 6, md: 2, xs: 1 }}
                containerStyles={{ overflow: "hidden" }}
                text="About Us"
            />
            {/* <Box sx={{ px: { xs: 2, sm: 2, md: 2, lg: 12, xl: 12 }, }}> */}
            <Box>
                <Box sx={{
                    py: 4,
                    px: { xs: 2, sm: 2, md: 2, lg: 6, xl: 8 },
                }}>
                    {/* <Typography variant='h4' color='primary'>About Us</Typography> */}
                    <Box sx={{ pb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="h4" fontWeight="bold">
                            About <Typography component="span" sx={{ color: "primary.main", fontWeight: "bold" }} variant="h4">Us</Typography>
                            <Divider sx={{ background: theme.palette.primary.deep, height: "3px", width: "50px" }} />
                        </Typography>
                    </Box>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={4} lg={7}>
                            <Typography variant='h5'>
                                Powering Innovation, Delivering Excellence
                            </Typography>
                            <Typography variant='body2' sx={{ textTransform: 'none' }}>
                                Laxmi Electromech Pvt. Ltd. is a leading provider of comprehensive electrical solutions, specializing in electrical automation, panel manufacturing, and EPC contracts. With a strong commitment to innovation, quality, and customer satisfaction, we deliver tailored solutions that meet the unique needs of our clients. Our team of experts has years of experience in designing, manufacturing, and installing electrical panels, automation systems, and EPC solutions for various industries, including industrial, commercial, and infrastructure projects.
                            </Typography>

                            <Grid container spacing={3}>
                                <Grid item xs={12} lg={6}>
                                    <Stack>
                                        <Typography variant='h6'>
                                            Trusted Electrical Solutions
                                        </Typography>
                                        <Typography variant='body2'>
                                            Empowering industries with innovative, reliable, and high-quality electrical products for over 25 years.
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <Stack>
                                        <Typography variant='h6'>
                                            Customized for Excellence
                                        </Typography>
                                        <Typography variant='body2'>
                                            Tailored solutions in Switchboards, Panels, and Power Distribution to meet your unique requirements.
                                        </Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} lg={5}>
                            <Box sx={{ height: '350px', width: { md: '100%', xs: '100%' } }}>
                                <img src={A1} alt="Interior" height={'100%'} width={'100%'} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <OurMissionPage />
                <OurJourney />
                <WhatWeDo />
                <WhyChooseUs />
                <OurExpertise />
                <OurTeam />
                <SustainabilitySection />
                <ClientTestimonials />
                <Certifications />
            </Box>
        </>
    )
}

export default AboutUs
