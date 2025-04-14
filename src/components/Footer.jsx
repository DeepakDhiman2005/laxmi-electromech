/* eslint-disable no-unused-vars */
import { Box, Button, Divider, Grid, IconButton, OutlinedInput, Stack, Typography, useTheme } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronRight, Facebook, Instagram, LinkedIn, Send, Twitter } from '@mui/icons-material';
import FooterImg from '../assets/images/footer.jpg';
import { useMemo } from 'react';

const aboutLink = [
    { name: 'Home', route: '/' },
    { name: "About Us", route: '/about-us' },
    // { name: 'Our Products', route: '/category/electrical-automation/plc-control-panel' },
    // { name: 'Manufacturing Facility Machinery', route: '/manufacturing-facility-machinery' },
    { name: 'Plant and Machinery', route: '/plant-and-machinery' },
    { name: 'Our Clients', route: '/our-clients' },
    { name: "Career", route: '/career' },
    { name: 'Quality', route: '/quality' },
    // { name: "Blogs", route: '/blogs' },
    { name: 'Projects', route: '/projects' },
    // { name: "Contact Us", route: '/contact-us' },
];
const socialLinks = [
    { icon: Facebook, link: 'https://www.facebook.com/share/1D3ha3whwF/', name: 'Facebook' },
    { icon: Instagram, link: '#', name: 'Instagram' },
    { icon: Twitter, link: '#', name: 'Twitter' },
    { icon: LinkedIn, link: '#', name: 'LinkedIn' }
];
const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();

    // const links = useMemo(() => [
    //     { name: "PLC Control Panel", route: "/category/electrical-automation/plc-control-panel" },
    //     { name: "HMI Touch Panel", route: "/category/electrical-automation/hmi-touch-panel" },
    //     { name: "SCADA System", route: "/category/electrical-automation/scada-system" },
    //     // { name: "Motor Control Centre", route: "/category/electrical-automation/motor-control-centre" },
    //     { name: "VFD Drive", route: "/category/electrical-automation/vfd-drive" },
    //     { name: "Soft Starter", route: "/category/electrical-automation/soft-starter" },
    //     // { name: "Electrical Control Panel", route: "/category/electrical-automation/electrical-control-panel" },
    //     // { name: "Automation Control Panel", route: "/category/electrical-automation/automation-control-panel" },
    //     { name: "Remote I/O Module", route: "/category/electrical-automation/remote-io-module" },
    //     { name: 'More...', route: "/category/electrical-automation/plc-control-panel" },
    // ], []);

    const links = useMemo(() => [
        // { name: "Power Control Centre", route: "/manufacturing-ranges/power-control-centre" },
        { name: "MCC Panels", route: "/manufacturing-ranges/mcc-panels" },
        // { name: "Intelligent MCC Panels", route: "/manufacturing-ranges/intelligent-mcc-panels" },
        // { name: "DG Synchronization Panel", route: "/manufacturing-ranges/dg-synchronization-panel" },
        { name: "AMF Panels", route: "/manufacturing-ranges/auto-mains-failure-panels" },
        { name: "APFC Panels", route: "/manufacturing-ranges/automatic-power-factor-control-panels" },
        { name: "VFD Panels", route: "/manufacturing-ranges/vfd-panels" },
        // { name: "LV/MV Soft Starter Panels", route: "/manufacturing-ranges/lv-mv-soft-starter-panels" },
        // { name: "PLC Panel/ SCADA Panel", route: "/manufacturing-ranges/plc-panel-scada-panel" },
        { name: "Distribution Boards", route: "/manufacturing-ranges/distribution-boards" },
        { name: 'More...', route: "/manufacturing-ranges/power-control-centre" },
    ], []);

    const hoverStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        gap: 1,
        py: 0.2,
        // color: theme.palette.info.light,
        color: '#000',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
            textDecoration: 'underline',
            color: theme.palette.primary.dark,
            transform: 'scale(1.05)',
        },
    };

    return (
        <Box
            sx={{
                width: '100%',
            }}
        >
            {
                !location.pathname.startsWith("/contact-us") ?
                    <Box
                        sx={{ background: 'white' }}
                    >
                        <Grid
                            container
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{
                                // backgroundImage: `url('/images/footer-form-bg.png')`, // or .png / .webp
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('/images/footer-top-bg.jpg')`, // or .png / .webp
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <Grid item xs={12} sm={6} md={6}
                                sx={{
                                    px: { xs: 2, sm: 2, md: 2, lg: 6, xl: 6 },
                                    width: '100%',
                                }}
                            >
                                <Typography variant="h5" sx={{ color: "#fff" }}>Talk To Us Now For</Typography>
                                <Typography variant="body2" sx={{ color: "#fff" }}>
                                    Keep up-to-date with the latest in lighting.
                                </Typography>
                                <Link to={"/contact-us"}>
                                    <Button
                                        sx={{
                                            background: '#111827',
                                            color: 'white',
                                            borderRadius: '4px',
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            px: 2,
                                            cursor: 'pointer',
                                            my: 0.5,
                                        }}
                                    // className='bg-gray-900'
                                    >Get a Quote</Button>
                                </Link>
                            </Grid>

                            {/* Location */}
                            <Grid item xs={12} sm={12} md={6}>
                                <iframe
                                    title="Our Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1751.9590260468199!2d77.32409253866982!3d28.572223393924386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44e94a2663f%3A0x96317734f1be41f7!2sNoida%20Sector%2018%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1725966414674!5m2!1sen!2sin"
                                    width="100%"
                                    // height={110}
                                    height={150}
                                    // style={{ border: 0, borderRadius: "8px" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </Grid>
                        </Grid>
                    </Box> : null
            }
            <Box sx={{
                color: theme.palette.info.main,
                overflow: "hidden",
                // background: `url(${FooterImg}) no-repeat center/cover`,
                background: `url('/footer-bg.jpg') no-repeat center/cover`,
            }}>
                <Box sx={{
                    // background: 'rgba(0,0,0,0.9)', 
                    height: '100%', width: '100%', py: 3,
                    px: { xs: 2, sm: 2, md: 2, lg: 6, xl: 8 },
                }}>
                    <Grid
                        container
                        justifyContent="space-between"
                        sx={{
                            width: '100%',
                            rowGap: { xs: 1.5, sm: 1, md: 1, lg: 0 }, // Decreased vertical gap
                            columnGap: { xs: 1, sm: 1, md: 1, lg: 2 } // Added horizontal gap control
                        }}
                    >
                        {/* About Section */}
                        <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                            {/* <Typography variant='h5' color="primary" fontWeight="bold" textTransform="uppercase" mb={1}>
                                About Us
                                <Divider sx={{ background: '#fff' }} />
                            </Typography>
                            <Stack spacing={2}>
                                <Typography variant='body2' className='main-size'>
                                    Laxmi Electromech Pvt. Ltd. is a leading expert in electrical automation, panel manufacturing, and EPC (Engineering, Procurement, and Construction) contracts. With a strong commitment to innovation, quality, and reliability, we design and deliver cutting-edge solutions that cater to a wide range of industries. Our expertise lies in developing customized, high-performance electrical systems that enhance efficiency, safety, and productivity.
                                </Typography>
                            </Stack> */}
                            <div className='w-full flex flex-col justify-start items-start'>
                                <img src="/logo-remove.png" alt="image" className='w-full md:w-3/4' />
                                <Typography variant='body2' className='main-size' sx={{ color: '#000', mt: 2, mb: 1 }}>Laxmi Electromech Pvt. Ltd. is a leading expert in electrical automation, panel manufacturing, and EPC (Engineering, Procurement, and Construction) contracts.</Typography>
                                {/* <Stack direction="row" spacing={0.5}>
                                    {socialLinks.map(({ icon: Icon, name }, index) => (
                                        <IconButton key={index} sx={{ color: '#000', '&:hover': { color: theme.palette.info.dark } }} aria-label={name}>
                                            <Icon sx={{ fontSize: '25px' }} />
                                        </IconButton>
                                    ))}
                                </Stack> */}
                            </div>
                        </Grid>

                        {/* About Links */}
                        <Grid item xs={12} sm={6} md={3} lg={2} xl={3}>
                            <Typography variant='h5' color="primary" fontWeight="bold" textTransform="uppercase" mb={1}>
                                Quick Link
                                {/* <Divider sx={{ background: '#fff' }} /> */}
                                <Divider sx={{ background: '#000' }} />
                            </Typography>
                            <Stack>
                                {aboutLink.map((list, index) => (
                                    <Stack key={index} direction={'row'} alignItems={'center'} sx={{ py: 0, my: 0 }}>
                                        <ChevronRight sx={{ color: '#000' }} />
                                        <Button onClick={() => navigate(list.route)} sx={hoverStyle} className='main-size !capitalize'>{list.name}</Button>
                                    </Stack>
                                ))}
                            </Stack>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3} lg={2} xl={3}>
                            <Typography variant='h5' color="primary" fontWeight="bold" textTransform="uppercase" mb={1}>
                                {/* Products */}
                                Manufacturing
                                <Divider sx={{ background: '#000' }} />
                            </Typography>
                            <Stack>
                                {links.map((list, index) => (
                                    <Stack key={index} direction={'row'} alignItems={'center'} sx={{ py: 0, my: 0 }}>
                                        <ChevronRight sx={{ color: '#000' }} />
                                        <Button onClick={() => navigate(list.route)} sx={hoverStyle} className='main-size !capitalize'>{list.name}</Button>
                                    </Stack>
                                ))}
                            </Stack>
                        </Grid>

                        {/* Contact Info */}
                        <Grid item xs={12} sm={6} md={6} lg={2.4} xl={3} className='main-size' sx={{ color: '#000' }}>
                            <Typography variant='h5' color="primary" fontWeight="bold" textTransform="uppercase" mb={1}>
                                Contact Info
                                <Divider sx={{ background: '#000' }} />
                            </Typography>
                            <Typography variant='body2'><strong>Registered Address:</strong> A-139, B-06, Gali No. 1, Madhu Vihar, I.P Extension, Delhi 110092</Typography>
                            <Typography variant='body2'><strong>Manufacturing Address:</strong> A-09, Sector-59, Noida, U.P – 201301</Typography>
                            <Typography variant='body2'>
                                <strong>Email:</strong> <span className='text-blue-500'>info@laxmielectromech.com</span><br /><span className='text-blue-500'>apglaxmi2009@gmail.com</span>
                                {/* <br /><span className='text-blue-500'>Sap@laxmielectromech.com</span> */}
                            </Typography>
                            <Typography variant='body2'><strong>Phone:</strong> +91-9811983451, +91-9643401344</Typography>
                        </Grid>

                        {/* Newsletter Subscription */}
                        {/* <Grid item xs={12} sm={6} md={6} lg={2.4} xl={3}>
                            <Typography variant='h5' color="primary" fontWeight="bold" textTransform="uppercase" mb={1}>
                                Stay Updated
                                <Divider sx={{ background: '#fff' }} />
                            </Typography>
                            <Typography variant='body2'>
                                Subscribe to our newsletter to receive updates on our latest collections.
                            </Typography>
                            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                                <OutlinedInput
                                    fullWidth
                                    type="email"
                                    size="small"
                                    placeholder="Enter your email"
                                    sx={{
                                        backgroundColor: '#fff',
                                        borderRadius: '4px',
                                        outline: 'none'
                                    }}
                                    endAdornment={
                                        <IconButton color="#000">
                                            <Send fontSize="small" sx={{ outline: 'none' }} />
                                        </IconButton>
                                    }
                                />
                            </Stack>
                        </Grid> */}
                    </Grid>

                    <Divider sx={{ background: '#000', my: 2.5 }} />

                    {/* Footer Bottom Section */}
                    <Box sx={{ display: { md: 'flex' }, justifyContent: 'space-between', alignItems: 'center', my: 0, color: '#000' }}>
                        <Typography variant="body2">
                            © {new Date().getFullYear()} <strong>Laxmi Electromech</strong>. All Rights Reserved.
                        </Typography>
                        {/* <Stack direction="row" spacing={0.5}>
                            {socialLinks.map(({ icon: Icon, name }, index) => (
                                <IconButton key={index} sx={{ color: '#000', '&:hover': { color: theme.palette.info.dark } }} aria-label={name}>
                                    <Icon sx={{ fontSize: '25px' }} />
                                </IconButton>
                            ))}
                        </Stack> */}
                        <Typography variant='body2'>Designed & Developed by <a href='https://www.jaikviktechnology.com/' target="_blank" className='hover:underline'>Jaikvik Technology India Pvt. Ltd.</a></Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;