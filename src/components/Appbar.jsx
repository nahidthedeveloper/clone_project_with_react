import {Link, useLocation} from "react-router-dom";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useRef} from "react";
import {useTheme} from "../hooks/useTheme.js";

gsap.registerPlugin(ScrollTrigger);
const links = [
    { path: "/about", label: "About" },
    { path: "/test", label: "Test" },
];

const Appbar = () => {
    const location = useLocation();
    const navRef = useRef(null);
    const {isDarkTheme} = useTheme();

    useGSAP(() => {
        gsap.from(navRef.current.querySelector("nav"), {
            opacity: 0,
            duration: 2,
            ease: "power2.out",
        });

        gsap.to(navRef.current, {
            opacity: 0,
            y: -100,
            duration: 2,
            delay: 1,
            ease: "power2.out",
            scrollTrigger: {
                scroller: document.body,
                trigger: navRef.current,
                start: "bottom 2%",
                end: "top 12%",
                scrub: 1,
            },
        });

        gsap.from(navRef.current.querySelector("hr"), {
            width: "10%",
            duration: 2,
            ease: "power2.out",
        });
    }, {scope: navRef});

    const isProjectPage = location.pathname.startsWith("/project");

    const getNavLinkClass = (path) => {
        return location.pathname === path ? "active opacity-30 pointer-events-none" : "inactive nav-link";
    };

    return (
        <div ref={navRef} className="fixed w-full px-4 md:px-14" style={{zIndex: 1000}}>
            <nav
                className={`flex justify-between py-10 text-[3vw] md:text-[1.1vw] ${
                    isProjectPage ? "text-light" : isDarkTheme ? "text-light" : "text-dark"
                }`}
            >
                <div className={getNavLinkClass("/")}>
                    <Link to="/">Chris Wilcock ©</Link>
                </div>

                <div className="flex gap-10 font">
                    {links.map((link) => (
                        <Link key={link.path} to={link.path} className={getNavLinkClass(link.path)}>
                            <div className="relative h-[4vw] md:h-[1.5vw] w-[8vw] md:w-[3vw] overflow-hidden">
                                <div className="absolute top-0 hover:top-[-110%] duration-300">
                                    <div>{link.label}</div>
                                    <div>{link.label}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </nav>
            <hr
                className={`${
                    isProjectPage ? "border-light" : isDarkTheme ? "border-light" : "border-dark"
                }`}
            />
        </div>
    );
};

export default Appbar;
