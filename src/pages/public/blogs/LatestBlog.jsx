import { Box, Divider, Grid, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { blogData } from "./blogData";
import BlogCard from "../../../utils/BlogCard";

const LatestBlog = () => {
    const navigate = useNavigate();
    const theme = useTheme();

    // Memoized sorted blogs by latest date
    const sortedBlogs = useMemo(() =>
        [...blogData].sort((a, b) => new Date(b.createDate) - new Date(a.createDate)).slice(0, 4)
        , [blogData]);

    const handleClick = (id) => {
        const selectedBlog = blogData.find((item) => item.id === id);
        if (selectedBlog) {
            localStorage.setItem("latestBlog", JSON.stringify(selectedBlog));
            navigate(`/singleblog/${id}`);
        }
    };

    return (
        <Box sx={{ background: "#F1F2F9", py: 2, px: { md: 2, lg: 8, xl: 8, xs: 2 } }}>
            <Box sx={{ pb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h4" fontWeight="bold">
                    Our <Typography component="span" sx={{ color: "primary.main", fontWeight: "bold" }} variant="h4">Latest Blogs</Typography>
                    <Divider sx={{ background: theme.palette.primary.deep, height: "3px", width: "50px" }} />
                </Typography>
            </Box>
            <Grid container spacing={2}>
                {sortedBlogs.map((blog) => (
                    <Grid key={blog.id} item xs={12} sm={6} md={6} lg={4} xl={3}>
                        <BlogCard blog={blog} handleClick={handleClick} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default LatestBlog;
