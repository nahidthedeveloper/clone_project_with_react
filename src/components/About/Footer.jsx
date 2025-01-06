import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function Footer() {
    const aboutFooterRef = useRef(null)

    useGSAP(() => {
        gsap.utils.toArray(aboutFooterRef.current.querySelectorAll('h1')).forEach(h1 => {
            gsap.from(h1, {
                width: '10%',
                duration: 1,
                y: 350,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: h1,
                    start: 'top 130%',
                    once: true,
                    scroller: document.body,
                    // markers: true
                }
            });
        });
    })

    return (
        <section ref={aboutFooterRef}>
            <div
                className="text-[5.2vw] md:text-[2.2vw] mb-[8vw] md:mb-[3vw] text-[var(--color-light)] md:relative">
                <div className="mt-[10vw] text-[6vw] md:text-[4.5vw] leading-[6vw] md:leading-[4vw] font-Exil71">
                    <div className="overflow-hidden">
                        <h1 className="translate-y-[-1vw]">BUILD</h1>
                    </div>
                    <div className="overflow-hidden">
                        <h1 className="translate-y-[-1vw]">JESPER</h1>
                    </div>
                    <div className="overflow-hidden">
                        <h1 className="translate-y-[-1vw]">LANDBERG</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}