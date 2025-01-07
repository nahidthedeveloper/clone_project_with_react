import Hero from "../components/About/Hero.jsx";
import SectionOne from "../components/About/sectionOne.jsx";
import SectionTwo from "../components/About/sectionTwo.jsx";
import Footer from "../components/About/Footer.jsx";
import {AwardsSection} from "../components/About/AwardsSection.jsx";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import MainLayout from "../Layout/MainLayout.jsx";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);

    const animateElement = (selector, fromProps, startForm) => {
        gsap.utils.toArray(selector).forEach(element => {
            gsap.from(element, {
                duration: 1,
                ease: 'power2.out',
                ...fromProps,
                scrollTrigger: {
                    trigger: element,
                    start: `top ${startForm}%`,
                    end: 'bottom 10%',
                    once: true,
                    scroller: document.body,
                },
            });
        });
    };

    useGSAP(() => {
        if (containerRef.current) {
            animateElement(containerRef.current.querySelectorAll('h1'), {y: 300}, 130);
            animateElement(containerRef.current.querySelectorAll('hr'), {width: '10%'}, 95);
        }
    }, {scope: containerRef});

    return (
        <MainLayout>
            <div ref={containerRef}>
                <Hero/>
                <SectionOne/>
                <hr className="border-light"/>
                <SectionTwo/>
                <hr className="border-light"/>
                <AwardsSection/>
                <hr className="border-light"/>
                <Footer/>
                <hr className="border-light"/>
            </div>
        </MainLayout>
    );
};

export default About;
