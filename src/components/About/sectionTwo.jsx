import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP)

export default function SectionTwo() {
    const sectionTwoRef = useRef(null)
    useGSAP(() => {
        gsap.utils.toArray(sectionTwoRef.current.querySelectorAll('h1')).forEach(h1 => {
            gsap.from(h1, {
                duration: 1,
                y: 300,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: h1,
                    start: 'top 130%',
                    end: 'bottom 10%',
                    once: true,
                    scroller: document.body,
                    // markers: true
                }
            });
        });
    }, {scope: sectionTwoRef})

    return (
        <section ref={sectionTwoRef}
                 className="text-[5.2vw] md:text-[2.2vw] mb-[10vw] text-light md:relative">
            <div className="md:flex gap-[5vw] md:absolute left-0">
                <div
                    className="mt-[3vw] md:mt-0 md:-rotate-90 md:-translate-y-5 text-[3vw] leading-[3vw] md:leading-[1vw] md:text-[0.8vw]">
                    <h2>BRAND</h2>
                    <h2>EXPERIENCE</h2>
                </div>
                <div className="hidden md:block">
                    <svg
                        className="w-[7vw] h-[7vw] md:w-[3.3vw] md:h-[3.3vw]"
                        width="3.3vw"
                        height="3.3vw"
                        viewBox="0 0 26 37"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M22 32H4c-1.6 0-2.8-1.3-2.8-2.8V0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1}
                            strokeMiterlimit={10}
                            strokeDasharray="none"
                        />
                        <path d="M25.8 32l-7.6-4.4v8.8z" fill="currentColor" opacity={1}/>
                    </svg>
                </div>
            </div>
            <div
                className="mt-[12vw] md:mt-[8vw] md:ml-[23vw] text-[10vw] md:text-[5vw] leading-[11vw] md:leading-[6vw] overflow-hidden">
                <div className="overflow-hidden cursor-default" data-index={0}>
                    <h1 className="list_image inline-block">Adidas</h1>
                </div>
                <div className="overflow-hidden cursor-default" data-index={1}>
                    <h1 className="list_image inline-block">Bacardi</h1>
                </div>
                <div className="overflow-hidden cursor-default" data-index={2}>
                    <h1 className="list_image inline-block">Bear Grylls</h1>
                </div>
                <div className="overflow-hidden cursor-default" data-index={3}>
                    <h1 className="list_image inline-block">Discovery Land Co.</h1>
                </div>
                <div className="overflow-hidden cursor-default" data-index={4}>
                    <h1 className="list_image inline-block">Dolby</h1>
                </div>
                <div className="overflow-hidden cursor-default" data-index={5}>
                    <h1 className="list_image inline-block">EPI1959</h1>
                </div>
                <div className="overflow-hidden cursor-default" data-index={6}>
                    <h1 className="list_image inline-block">Google</h1>
                </div>
                <div className="overflow-hidden cursor-default" data-index={7}>
                    <h1 className="list_image inline-block">Heineken</h1>
                </div>
                <div className="overflow-hidden cursor-default" data-index={8}>
                    <h1 className="list_image inline-block">HenriLloyd</h1>
                </div>
                <div className="overflow-hidden cursor-default" data-index={9}>
                    <h1 className="list_image inline-block">Hunter Douglas</h1>
                </div>
                <div className="overflow-hidden cursor-default" data-index={10}>
                    <h1 className="list_image inline-block">Jaguar</h1>
                </div>
                <div className="overflow-hidden cursor-default" data-index={11}>
                    <h1 className="list_image inline-block">James Fisher Marine</h1>
                </div>
                <div className="overflow-hidden cursor-default" data-index={12}>
                    <h1 className="list_image inline-block">Luxaflex</h1>
                </div>
                <div className="overflow-hidden cursor-default" data-index={13}>
                    <h1 className="list_image inline-block">RANA</h1>
                </div>
                <div className="overflow-hidden cursor-default" data-index={14}>
                    <h1 className="list_image inline-block">Salesforce</h1>
                </div>
                <div className="overflow-hidden cursor-default" data-index={15}>
                    <h1 className="list_image inline-block">Splunk</h1>
                </div>
            </div>
        </section>
    )
}