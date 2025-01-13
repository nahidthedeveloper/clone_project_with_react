import {useGSAP} from "@gsap/react";
import {useTheme} from "../hooks/useTheme.js";
import {useRef} from "react";
import gsap from "gsap";
import {Link} from "react-router-dom";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Footer() {
    const footerRef = useRef(null);
    const {isDarkTheme} = useTheme();

    useGSAP(() => {
        gsap.utils.toArray(footerRef.current.querySelectorAll(".footer-anim")).forEach((footer) => {
            gsap.from(footer, {
                opacity: 0,
                duration: 1,
                y: 30,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: footer,
                    start: "top 95%",
                    end: "bottom 90%",
                    once: true,
                    scroller: document.body,
                },
            });
        });

        const hr = footerRef.current.querySelector("hr");

        gsap.fromTo(hr, {
            width: "10%",
        }, {
            width: "100%",
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: hr,
                start: "top 95%",
                end: "bottom 85%",
                once: true,
                scroller: document.body,
            }
        });
    });

    const scrollToTop = () => {
        gsap.to(window, {scrollTo: {y: 0, autoKill: true}, duration: 1, ease: "power2.out"});
    };

    return (
        <footer className="overflow-hidden px-4 md:px-14" ref={footerRef}>
            <hr className={`${isDarkTheme ? "border-light" : "border-dark"} w-full`}/>
            <div className={`${
                isDarkTheme ? "text-light" : "text-dark"
            } flex justify-between items-end mt-8 pb-24 text-[2.5vw] md:text-[1vw]`}
            >
                <div className="overflow-hidden footer-anim">
                    <button className="inline-block nav-link" onClick={scrollToTop}>
                        BACK TO TOP
                    </button>
                </div>
                <div className="text-right">
                    <ul className="md:flex gap-[3vw]">
                        <li className="footer-anim">
                            <Link to="#" className="inline-block nav-link">
                                LINK
                            </Link>
                        </li>
                        <li className="footer-anim">
                            <Link to="https://www.behance.net" className="inline-block nav-link">
                                BEHANCE
                            </Link>
                        </li>
                        <li className="footer-anim">
                            <Link to="https://twitter.com" className="inline-block nav-link">
                                TWITTER
                            </Link>
                        </li>
                        <li className="footer-anim">
                            <Link to="https://www.linkedin.com" className="inline-block nav-link">
                                LINKEDIN
                            </Link>
                        </li>
                        <li className="footer-anim">
                            <Link to="https://www.instagram.com" className="inline-block nav-link">
                                INSTAGRAM
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
