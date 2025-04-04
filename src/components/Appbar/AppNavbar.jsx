import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";

import { FaUserCircle } from "react-icons/fa";

import { GiHamburgerMenu } from "react-icons/gi";
import { menuData } from "./menuData";
import { useEffect, useMemo, useState } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
import Sidebar from "./Sidebar";
import SearchMenu from "./SearchMenu";

const AppNavbar = () => {
    const { pathname } = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        AOS.init({ once: true });
        const handleScroll = () => setScrolling(window.pageYOffset > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = useMemo(() => [
        { name: "PLC Control Panel", route: "/category/electrical-automation/plc-control-panel" },
        { name: "HMI Touch Panel", route: "/category/electrical-automation/hmi-touch-panel" },
        { name: "SCADA System", route: "/category/electrical-automation/scada-system" },
        { name: "Motor Control Centre", route: "/category/electrical-automation/motor-control-centre" },
        { name: "VFD Drive", route: "/category/electrical-automation/vfd-drive" },
        { name: "Soft Starter", route: "/category/electrical-automation/soft-starter" },
        { name: "Electrical Control Panel", route: "/category/electrical-automation/electrical-control-panel" },
        { name: "Automation Control Panel", route: "/category/electrical-automation/automation-control-panel" },
        { name: "Remote I/O Module", route: "/category/electrical-automation/remote-io-module" },
    ], [pathname]);

    return (
        <>
            <header className={`header ${scrolling ? '!fixed top-0 left-0 z-[1000] shadow-md' : ''}`} id="header">
                <nav className="navBar">
                    <div className="brandLogo">
                        <a href="https://laxmielectromech.com/">
                            {/* <img src="https://bweld.in/frontend/assets/img/logo/B-Weld-Logo.png" alt="Company Logo" /> */}
                            <img src="/logo1_enhanced.png" alt="Company Logo" />
                        </a>
                    </div>
                    <div className="navLink" id="nav-menu">
                        <ul>
                            <div className="flex justify-center gap-x-4 items-center">
                                {
                                    menuData.map((item, index) => (
                                        <li
                                            key={index}
                                        // ><Link to={item.route as string}  className="active">{item.name}</Link></li>
                                        ><Link to={item.route} className={`main-size ${pathname === item.route ? 'active' : 'hover:!text-blue-600'}`}>{item.name}</Link></li>
                                    ))
                                }
                            </div>
                            {/* <li className="request">
                                <a href="https://bweld.in/service-request">Services Request</a>
                            </li> */}
                            <li>
                                {/* <a href="https://bweld.in/dashboard">Admin Login</a> */}
                                <Link to={"/login"}>
                                    <FaUserCircle size={25} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="headerBtn"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        <button className="btnTwo">
                            <div className="menuIn" id="nav-toggle">
                                <span className="line-1"></span>
                                <span className="line-2"></span>
                                <span className="line-3"></span>
                            </div>
                        </button>
                    </div>
                </nav>
            </header>

            <header className="headerTwo">
                <div className="navTwo">
                    <div className="catTwoSection">
                        <button
                            id="toggleBtn"
                            className="flex gap-x-2 px-4 py-2 bg-[#F6F9FF] border border-[#e9eef6] text-black font-semibold !rounded-none"
                        >
                            {/* <i className="fa-solid fa-bars">
                            </i> */}
                            <i className="bg-[var(--colorOne)] flex justify-center items-center text-white">
                                <span className="w-full h-full flex justify-center items-center">
                                    <GiHamburgerMenu size={18} />
                                </span>
                            </i>
                            <span>All Products</span>
                            <ul id="catList">
                                {
                                    links.map((item, index) => (
                                        <li
                                            key={index}
                                        >
                                            <Link to={item.route} className="main-size">{item.name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </button>
                    </div>
                    <div className="searchSection relative" id="searchMenu">
                        <form>
                            <input type="search" placeholder="Search Here..." id="search" />
                            <button type="button" className="!rounded-none">
                                <img src="https://bweld.in/frontend/assets/img/search.gif" />
                            </button>
                        </form>
                        <div id="searchContent" style={{ display: 'none' }}></div>
                        {/* <SearchMenu /> */}
                    </div>

                    <Link to={"/contact-us"}>
                        <div className="headerTwoBtn">
                            <button className="openBweldModalBtn quoteBtn !rounded-none">Get a Quote</button>
                            <button id="searchToggle" type="submit">
                                <img src="https://bweld.in/frontend/assets/img/search.gif" />
                            </button>
                        </div>
                    </Link>
                </div>
            </header>
            <Sidebar isOpen={menuOpen} setIsOpen={() => setMenuOpen(false)} />
        </>
    );
};

export default AppNavbar;
