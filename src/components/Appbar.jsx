import {Link, useLocation} from "react-router-dom";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useRef} from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Appbar = () => {
    const location = useLocation();

    const navRef = useRef(null);

    useGSAP(() => {

        gsap.from('nav', {
            opacity: 0,
            duration: 2,
            ease: 'power2.out'
        })

        gsap.to(navRef.current, {
            opacity: 0,
            ease: 'power2.out',
            delay: 1,
            scrollTrigger: {
                scroller: document.body,
                trigger: navRef.current,
                start: 'bottom 2%',
                end: 'top 12%',
                scrub: 1,
                // markers: true,
            }
        });

        gsap.from(navRef.current.querySelector('hr'), {
            width: '10%',
            duration: 2,
            ease: 'power2.out',
        })
    }, {scope: navRef})


    return (
        <div ref={navRef}>
            <nav
                className={`flex justify-between py-10 text-[3vw] md:text-[1.1vw] ${location.pathname === '/' ? 'text-dark' : 'text-light'}`}>
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
            <hr className={`${location.pathname === '/' ? 'border-dark' : 'border-light'}`}/>
        </div>
    );
};

export default Appbar;
