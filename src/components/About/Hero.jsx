import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
    const aboutHeroRef = useRef(null);
    const overlayImageRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ paused: true });
        tl.from(aboutHeroRef.current.querySelectorAll('h3'), {
            y: 300,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out'
        }, 'a');

        tl.to(overlayImageRef.current.querySelector('.overlay'), {
            width: 0,
            duration: 0.8,
        }, 'a');
        tl.from(overlayImageRef.current.querySelector('img'), {
            opacity: 0,
            scale: 1.5,
            duration: 0.8,
        }, 'a');

        tl.play();
    }, { scope: aboutHeroRef });

    return (
        <div className="relative">
            <div style={{ position: "relative", zIndex: 2 }}>
                <section ref={aboutHeroRef} className="my-[10vw] md:my-[7vw]">
                    <div className="section1_left text-[9vw] uppercase font-bold text-light leading-[4vw] font-Exil71">
                        {['Ui+Ux', 'Design', 'Brand', 'Website'].map((text, index) => (
                            <div key={index} className="overflow-hidden h-[8.2vw]">
                                <h3>{text}</h3>
                            </div>
                        ))}
                    </div>
                    <div className="md:hidden w-full h-[80vh] mt-[5vw]">
                        <img
                            className="h-full w-full object-cover object-center opacity-[40%]"
                            src="images/about/men.jpg"
                            alt="Men"
                        />
                    </div>
                </section>
            </div>
            <div
                ref={overlayImageRef}
                className="hidden md:block h-[60vw] w-[46.5vw] absolute overflow-hidden translate-x-[7%] md:-translate-y-[57%] lg:-translate-y-[53%]"
                style={{
                    zIndex: 1,
                    top: "50%",
                    left: "50%",
                }}
            >
                <div className="relative w-full h-full">
                    <div className="overlay absolute left-0 top-0 w-full h-full bg-dark noise" />
                    <img
                        className="right-0 h-full w-full object-cover object-center"
                        src="images/about/men.jpg"
                        alt="Men"
                    />
                </div>
            </div>
        </div>
    );
}
