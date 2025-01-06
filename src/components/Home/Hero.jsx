import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
import {useRef} from "react";

gsap.registerPlugin(useGSAP)


export default function Hero() {
    const homeHeroRef = useRef(null);

    useGSAP(() => {
        gsap.from(homeHeroRef.current.querySelectorAll('h3, svg'), {
            y: 300,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out'
        })

    }, {scope: homeHeroRef});
    return (
        <section ref={homeHeroRef} className="md:mb-[162px]">
            <div className="section1_left mt-8 text-[9vw] uppercase font-bold text-[#212121]"
                 style={{fontFamily: 'Exil71, serif', lineHeight: '4vw'}}>
                <div className="overflow-hidden h-[8.2vw]">
                    <h3>Digital</h3>
                </div>
                <div className="overflow-hidden h-[8.2vw]">
                    <h3>Designer</h3>
                </div>
                <div className="overflow-hidden h-[8.2vw]">
                    <h3><span className="mr-1">+</span>Art</h3>
                </div>
                <div className="overflow-hidden h-[8.2vw]">
                    <h3>Director</h3>
                </div>
                <div className="overflow-hidden h-[10.5vw]">
                    <svg width="9vw" height="9vw" viewBox="0 0 127 103" fill="none" className="mt-[2vw]">
                        <path
                            d="M53.3365 79.8158C53.7615 80.4681 54.3908 80.9628 55.1271 81.223C55.8633 81.4833 56.6652 81.4946 57.4086 81.2554C58.152 81.0161 58.7953 80.5395 59.2388 79.8995C59.6823 79.2595 59.9012 78.4918 59.8616 77.7154V0H66.7706V77.7154C66.7302 78.4734 66.9362 79.2242 67.3582 79.8565C67.7802 80.4888 68.3956 80.9691 69.1134 81.2262C69.8312 81.4833 70.6131 81.5035 71.3433 81.2839C72.0736 81.0642 72.7133 80.6164 73.1677 80.0068L118.556 24.0593H127L63.3321 103L0 24.1389H8.44427L53.3365 79.8158Z"
                            fill="#252525">
                        </path>
                    </svg>
                </div>
            </div>
            <div className="grid grid-cols-2 mt-[80px] md:mt-0 mb-10 md:mb-0">
                <h1 className="col-span-1 md:text-right">Selected works</h1>
                <h1 className="col-span-1 text-right">CW(P-01)</h1>
            </div>
        </section>
    )
}