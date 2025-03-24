import { useEffect, useState } from "react";
import { Box, Grid, Stack, Typography, useTheme, Card, CardMedia, CardContent, Breadcrumbs, Divider } from "@mui/material";
import { AccessTime, KeyboardDoubleArrowRight } from "@mui/icons-material";
import { format, parseISO, isValid } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import Banner from "./Banner";

import S1 from '../assets/images/footer.webp';
import LatestBlogCard from "../pages/public/blogs/LatestBlogCard";

const BlogComponent = ({ blog, latestBlogs }) => {
    const { palette } = useTheme();
    const navigate = useNavigate();

    const formattedDate = isValid(parseISO(blog.createDate))
        ? format(parseISO(blog.createDate), "MMM dd, yyyy")
        : "Invalid Date";
    const [mainBlog, setMainBlog] = useState(blog);
    const [latestPosts, setLatestPosts] = useState(latestBlogs);

    useEffect(() => {
        // Retrieve the saved blog data from localStorage
        const savedBlog = localStorage.getItem("Blog");

        if (savedBlog) {
            const parsedBlog = JSON.parse(savedBlog);
            setMainBlog(parsedBlog);

            // Filter out the selected blog from latest blogs
            const updatedLatestPosts = latestBlogs.filter(item => item.id !== parsedBlog.id);
            setLatestPosts(updatedLatestPosts);
        }
    }, [latestBlogs]); // Re-run effect if latestBlogs changes

    const handleClick = (selectedBlog) => {
        localStorage.setItem("Blog", JSON.stringify(selectedBlog));
        setMainBlog(selectedBlog);

        // Update latest blogs list
        const updatedLatest = latestBlogs.filter(item => item.id !== selectedBlog.id);
        setLatestPosts(updatedLatest);

        navigate(`/singleblog/${selectedBlog.id}`);
    };

    return (
        <>
            <Banner
                title="Blogs"
                image={S1}
                // height={{ sm: '40vh', md: '40vh', xs: '40vh', lg: '40vh', xl: '40vh' }}
                height={{ sm: '40vh', md: '40vh', xs: '40vh', lg: '50vh', xl: '50vh' }}
                titleVariant="h2"
                overlayColor="rgba(30,57,81,0.7)"
                spacingConfig={{ lg: 12, md: 2, xs: 1 }}
                containerStyles={{ overflow: "hidden" }}
                text="Single Blogs"
            />

            {/* <Box sx={{ background: "#F1F2F9", py: 1, px: { md: 2, lg: 12, xl: 12, xs: 2 } }}> */}
            <Box sx={{ background: "#F1F2F9", py: 1, px: { md: 2, lg: 6, xl: 6, xs: 2 } }}>
                <Box sx={{ p: 1, my: 2, background: palette.info.light }}>
                    <Breadcrumbs separator={<KeyboardDoubleArrowRight sx={{ color: palette.primary.main }} />} aria-label="breadcrumb">
                        <Link style={{ fontWeight: 'bold', textDecoration: 'none', color: palette.primary.main }} to="/">Home</Link>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', color: palette.info.deep }}>
                            {mainBlog.title}
                        </Typography>
                    </Breadcrumbs>
                </Box>

                <Grid container spacing={3}>
                    {/* Main Blog */}
                    <Grid item xs={12} lg={8}>
                        <Card elevation={0} sx={{ height: "auto", p: { xs: 2, sm: 2, md: 2, lg: 3, xl: 3 }, overflow: "hidden" }}>
                            <CardMedia component="img" image={mainBlog.imagePath} alt="Main Blog Image"
                                sx={{ height: "60vh", width: "100%" }}
                            />
                            <CardContent>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <AccessTime />
                                    <Typography variant="body2">{formattedDate}</Typography>
                                    <Divider
                                        sx={{
                                            background: "#333",
                                            height: "15px",
                                            width: "0px",
                                        }}
                                        orientation="vertical"
                                    />
                                    <Typography variant="body2">{mainBlog.createdBy}</Typography>
                                </Stack>

                                <Stack spacing={2} mt={1}>
                                    <Typography variant="h4" fontWeight="bold">{mainBlog.title}</Typography>
                                    <Typography variant="body2">{mainBlog.description}</Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Latest Blogs Section */}
                    <Grid item xs={12} lg={4}>
                        <Card elevation={0} sx={{ p: 2, mb: 1 }}>
                            <Stack spacing={1}>
                                <Typography variant="h4">Categories</Typography>
                                <Typography sx={{ color: palette.info.dark }}> {mainBlog.categories}</Typography>
                            </Stack>
                        </Card>

                        <Card elevation={0} sx={{ p: 2 }}>
                            <Typography variant="h4" sx={{ my: 2 }}>Recent Posts</Typography>
                            <Stack spacing={2}>
                                {latestPosts.slice(0, 4).map((latestBlog) => (
                                    <LatestBlogCard
                                        key={latestBlog.id}
                                        blog={latestBlog}
                                        title={latestBlog.title}
                                        createDate={latestBlog.createDate}
                                        image={latestBlog.imagePath}
                                        onClick={() => handleClick(latestBlog)}
                                    />
                                ))}
                            </Stack>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default BlogComponent;
