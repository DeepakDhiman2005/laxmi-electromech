import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../../components/Appbar/Navbar";
import Footer from './../../components/Footer';


const PublicRouter = () => {
    // const location = useLocation();
    // const hideLayout = location.pathname === "/login";

    return (
        <>
            {/* {!hideLayout && <Navbar />} */}
            <ScrollRestoration />
            <Navbar />
            <Outlet />
            <Footer />
            {/* {!hideLayout && <Footer />} */}
        </>
    );
};

export default PublicRouter;
