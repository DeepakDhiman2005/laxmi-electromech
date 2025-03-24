import { Outlet, ScrollRestoration } from "react-router-dom";
import PublicAppBar from "../../components/Appbar/PublicAppBar";
import Footer from './../../components/Footer';


const PublicRouter = () => {
    // const location = useLocation();
    // const hideLayout = location.pathname === "/login";

    return (
        <>
            {/* {!hideLayout && <PublicAppBar />} */}
            <ScrollRestoration />
            <PublicAppBar />
            <Outlet />
            <Footer />
            {/* {!hideLayout && <Footer />} */}
        </>
    );
};

export default PublicRouter;
