import { useMemo } from "react"
import { menuData } from "../Appbar/menuData"
import { Link, useLocation } from "react-router-dom";

const ProductSidebar = () => {
    const { pathname } = useLocation();

    const products = useMemo(() => menuData.filter((item) => item.product), []);
    // const links = useMemo(() => {
    //     let category = pathname.split('/')[2];
    //     return products.filter((item) => item.id === category)?.[0]?.subMenu || null;
    // }, [pathname]);
    const links = useMemo(() => {
        return [
            { name: "PLC Control Panel", route: "/category/electrical-automation/plc-control-panel" },
            { name: "HMI Touch Panel", route: "/category/electrical-automation/hmi-touch-panel" },
            { name: "SCADA System", route: "/category/electrical-automation/scada-system" },
            { name: "Motor Control Centre", route: "/category/electrical-automation/motor-control-centre" },
            { name: "VFD Drive", route: "/category/electrical-automation/vfd-drive" },
            { name: "Soft Starter", route: "/category/electrical-automation/soft-starter" },
            { name: "Electrical Control Panel", route: "/category/electrical-automation/electrical-control-panel" },
            { name: "Automation Control Panel", route: "/category/electrical-automation/automation-control-panel" },
            { name: "Remote I/O Module", route: "/category/electrical-automation/remote-io-module" },
        ];
    }, [pathname]);

    const SideLink = ({
        name = "",
        route = "",
    }) => {
        return <>
            <Link to={`${route}`} className="w-full">
                <div className={`w-full px-2 py-2 transition-all ${pathname === route ? "bg-blue-500 text-white" : "text-black hover:bg-blue-500 hover:text-white"} duration-300`}>
                    <h2>{name}</h2>
                </div>
            </Link>
        </>
    }

    return <>
        <aside className="w-full border border-solid border-gray-400">
            <div className="w-full flex justify-center bg-gray-200 text-gray-900 items-center py-2">
                <h2 className="font-semibold text-[18px]">Products</h2>
            </div>
            <div className="w-full">
                {
                    links.map((item, index) => (
                        <SideLink key={index} {...item} />
                    ))
                }
            </div>
        </aside>
    </>
}

export default ProductSidebar;