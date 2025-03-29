/* eslint-disable no-unused-vars */
import { Box, Button, Divider, Grid, IconButton, OutlinedInput, Stack, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Facebook, Instagram, LinkedIn, Send, Twitter } from '@mui/icons-material';
import FooterImg from '../assets/images/footer.jpg';

const aboutLink = [
    { name: "About Us", route: '/about-us' },
    { name: "Blogs", route: '/blogs' },
    { name: "Contact Us", route: '/contact-us' },
    { name: "Career", route: '/career' },
];
const socialLinks = [
    { icon: Facebook, link: '#', name: 'Facebook' },
    { icon: Instagram, link: '#', name: 'Instagram' },
    { icon: Twitter, link: '#', name: 'Twitter' },
    { icon: LinkedIn, link: '#', name: 'LinkedIn' }
];
const Footer = () => {
    const navigate = useNavigate();
    const theme = useTheme();

    const hoverStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        gap: 1,
        py: 0.2,
        color: theme.palette.info.light,
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
            <Box
                sx={{
                    background: 'linear-gradient(120deg, #1C85C6 0%, #0F5B99 100%)',
                    px: { xs: 2, sm: 2, md: 2, lg: 6, xl: 6 },
                    py: 3,
                }}
            >
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                >
                    {/* Follow Ups Section */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h5" sx={{ color: "#fff" }}>Follow Ups</Typography>
                        <Typography variant="body2" sx={{ color: "#e0e0e0" }}>
                            We post regularly interesting application photos and articles regarding drilling & bevelling.
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
                            {socialLinks.map(({ icon: Icon, name }, index) => (
                                <IconButton key={index} sx={{ color: "#fff", "&:hover": { color: "info.dark" } }} aria-label={name}>
                                    <Icon sx={{ fontSize: { xs: "24px", sm: "28px" } }} />
                                </IconButton>
                            ))}
                        </Box>
                    </Grid>

                    {/* Newsletter Sign-up */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h5" sx={{ color: "#fff" }}>Sign Up To Newsletter</Typography>
                        <Typography variant="body2" sx={{ color: "#e0e0e0" }}>
                            We post regularly interesting application photos and articles regarding drilling & bevelling.
                        </Typography>
                        <Stack direction="row" spacing={1} sx={{ mt: 1, width: { xs: "100%", sm: "80%", md: "70%" } }}>
                            <OutlinedInput
                                fullWidth
                                type="email"
                                size="small"
                                placeholder="Enter your email"
                                sx={{
                                    backgroundColor: "#fff",
                                    borderRadius: "4px",
                                    outline: "none"
                                }}
                                endAdornment={
                                    <IconButton sx={{ color: "#000" }}>
                                        <Send fontSize="small" />
                                    </IconButton>
                                }
                            />
                        </Stack>
                    </Grid>

                    {/* Location */}
                    <Grid item xs={12} sm={12} md={4}>
                        <Typography variant="h5" sx={{ color: "#fff", mb: 0.5 }}>
                            Our Location
                        </Typography>
                        <iframe
                            title="Our Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1751.9590260468199!2d77.32409253866982!3d28.572223393924386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44e94a2663f%3A0x96317734f1be41f7!2sNoida%20Sector%2018%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1725966414674!5m2!1sen!2sin"
                            width="100%"
                            height={110}
                            style={{ border: 0, borderRadius: "8px" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{
                color: theme.palette.info.main,
                overflow: "hidden",
                background: `url(${FooterImg}) no-repeat center/cover`,
            }}>
                <Box sx={{
                    background: 'rgba(0,0,0,0.9)', height: '100%', width: '100%', py: 3,
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
                            <Typography variant='h5' color="primary" fontWeight="bold" textTransform="uppercase" mb={1}>
                                About Us
                                <Divider sx={{ background: '#fff' }} />
                            </Typography>
                            <Stack spacing={2}>
                                <Typography variant='body2'>
                                    Laxmi Electromech Pvt. Ltd. specializes in electrical automation, panel manufacturing, and EPC contracts, delivering innovative, high-quality, and reliable solutions tailored to diverse client needs with excellence.
                                </Typography>
                            </Stack>
                        </Grid>

                        {/* About Links */}
                        <Grid item xs={12} sm={6} md={3} lg={2} xl={3}>
                            <Typography variant='h5' color="primary" fontWeight="bold" textTransform="uppercase" mb={1}>
                                Quick Link
                                <Divider sx={{ background: '#fff' }} />
                            </Typography>
                            <Stack>
                                {aboutLink.map((list, index) => (
                                    <Stack key={index} direction={'row'} alignItems={'center'} sx={{ py: 0, my: 0 }}>
                                        <ChevronRight />
                                        <Button onClick={() => navigate(list.route)} sx={hoverStyle}>{list.name}</Button>
                                    </Stack>
                                ))}
                            </Stack>
                        </Grid>

                        {/* Contact Info */}
                        <Grid item xs={12} sm={6} md={6} lg={2.4} xl={3}>
                            <Typography variant='h5' color="primary" fontWeight="bold" textTransform="uppercase" mb={1}>
                                Contact Info
                                <Divider sx={{ background: '#fff' }} />
                            </Typography>
                            <Typography variant='body2'><strong>Address:</strong> A-139, B-06, GALI NO. 1, MADHU VIHAR, I.P EXTENSION, DELHI110092</Typography>
                            <Typography variant='body2'><strong>Email:</strong> <span className='text-blue-500'>apglaxmi2009@gmail.com</span></Typography>
                            <Typography variant='body2'><strong>Phone:</strong> +91-9811983451, +91-9643401344</Typography>
                        </Grid>

                        {/* Newsletter Subscription */}
                        <Grid item xs={12} sm={6} md={6} lg={2.4} xl={3}>
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
                        </Grid>
                    </Grid>

                    <Divider sx={{ background: '#fff', my: 2.5 }} />

                    {/* Footer Bottom Section */}
                    <Box sx={{ display: { md: 'flex' }, justifyContent: 'space-between', alignItems: 'center', my: 0 }}>
                        <Typography variant="body2">
                            © {new Date().getFullYear()} <strong>Laxmi Electromech</strong>. All Rights Reserved. |
                            Designed & Developed by <strong>Jaikvik Technology India Pvt. Ltd.</strong>
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            {socialLinks.map(({ icon: Icon, name }, index) => (
                                <IconButton key={index} sx={{ color: '#ffffff', '&:hover': { color: theme.palette.info.dark } }} aria-label={name}>
                                    <Icon sx={{ fontSize: '30px' }} />
                                </IconButton>
                            ))}
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;