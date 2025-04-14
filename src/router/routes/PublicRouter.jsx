import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
// import Navbar from "../../components/Appbar/Navbar";
import Footer from './../../components/Footer';
import { Box } from "@mui/material";
import AdminSidebar from "../../components/sidebar/AdminSidebar";
import DashboardLayout from "../../pages/layouts/DashboardLayout";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS
import { ToastContainer } from "react-toastify";
import AppNavbar from "../../components/Appbar/AppNavbar";

const PublicRouter = () => {
    const { pathname } = useLocation();

    return (
        <>
            {/* Add ToastContainer at the top of your component */}
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <ScrollRestoration />
            {
                pathname.startsWith('/admin') ? <>
                    {/* <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'start',
                            alignItems: 'start'
                        }}
                    >
                        <AdminSidebar />
                        <Outlet />
                    </Box> */}
                    <DashboardLayout />
                </> : pathname.startsWith('/login') ? <>
                    <Outlet />
                </> : <>
                    <AppNavbar />
                    <Outlet />
                    <Footer />
                </>
            }
        </>
    );
};

export default PublicRouter;
