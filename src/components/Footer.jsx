import {Link, useLocation} from "react-router-dom";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useRef} from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function Footer() {
    const location = useLocation();
    const footerRef = useRef(null);

    useGSAP(() => {
        gsap.utils.toArray(footerRef.current.querySelectorAll('.footer-anim')).forEach(footer => {
            gsap.from(footer, {
                opacity: 0,
                duration: 1,
                y: 30,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: footer,
                    start: 'top 95%',
                    end: 'bottom 90%',
                    once: true,
                    scroller: document.body,
                    // markers: true
                }
            });
        });
    })

    return (
        <footer className="overflow-hidden">
            <hr className={`${location.pathname === '/' ? 'border-dark' : 'border-light'} overflow-hidden`}/>
            <div ref={footerRef}
                 className={`${location.pathname === '/' ? 'text-dark' : 'text-light'} flex justify-between items-end mt-8 pb-24 text-[2.5vw] md:text-[1vw]`}>
                <div className="overflow-hidden footer-anim">
                    <Link to="#top" className="inline-block nav-link">BACK TO TOP</Link>
                </div>
                <div className="text-right">
                    <ul className="md:flex gap-[3vw]">
                        <li className="footer-anim"><Link to="#" className="inline-block nav-link">LINK</Link></li>
                        <li className="footer-anim"><Link to="https://www.behance.net"
                                                          className="inline-block nav-link">BEHANCE</Link></li>
                        <li className="footer-anim"><Link to="https://twitter.com"
                                                          className="inline-block nav-link">TWITTER</Link></li>
                        <li className="footer-anim"><Link to="https://www.linkedin.com"
                                                          className="inline-block nav-link">LINKEDIN</Link></li>
                        <li className="footer-anim"><Link to="https://www.instagram.com"
                                                          className="inline-block nav-link">INSTAGRAM</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
