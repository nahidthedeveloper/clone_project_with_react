import {Link, useLocation} from "react-router-dom";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useRef, useEffect, useState} from "react";

gsap.registerPlugin(ScrollTrigger);

const Appbar = () => {
    const location = useLocation();
    const navRef = useRef(null);
    const [isDarkTheme, setIsDarkTheme] = useState(document.body.classList.contains("bg-dark"));

    useEffect(() => {
        const updateTheme = () => {
            setIsDarkTheme(document.body.classList.contains("bg-dark"));
        };

        updateTheme();
        const observer = new MutationObserver(updateTheme);
        observer.observe(document.body, {attributes: true, attributeFilter: ["class"]});

        return () => observer.disconnect();
    }, [location]);

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

    return (
        <div ref={navRef} className="fixed w-full px-4 md:px-14">
            <nav
                className={`flex justify-between py-10 text-[3vw] md:text-[1.1vw] ${
                    isProjectPage ? "text-light" : isDarkTheme ? "text-light" : "text-dark"
                }`}
            >
                <div>
                    <Link to="/">Chris Wilcock ©</Link>
                </div>

                <ul className="flex gap-10 font">
                    <li className="nav-link">
                        <Link to="/about">
                            <div className="relative h-[4vw] md:h-[1.5vw] w-[8vw] md:w-[3vw] overflow-hidden">
                                <div className="absolute top-0 hover:top-[-110%] duration-300">
                                    <div>About</div>
                                    <div>About</div>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link to="#">
                            <div className="relative h-[4vw] md:h-[1.5vw] w-[8vw] md:w-[3vw] overflow-hidden">
                                <div className="absolute top-0 hover:top-[-110%] duration-300">
                                    <div>Cases</div>
                                    <div>Cases</div>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
            <hr className={`${isProjectPage ? "border-light" : isDarkTheme ? "border-light" : "border-dark"}`}/>
        </div>
    );
};

export default Appbar;
