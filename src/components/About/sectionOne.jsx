import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useRef} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default function SectionOne() {
    return (
        <section className=" text-[5.2vw] md:text-[2.2vw] text-light">
            <div className="mx-0 md:mr-[8vw]">
                <div className="mt-[23vw] flex justify-center">
                    <div className="md:ml-[5vw]">
                        <div className="hidden md:block ml-[15vw] overflow-hidden">
                            <h1>Co-founder and creative director at Outpost with an unhealthy</h1>
                        </div>
                        <div className="md:hidden">
                            <div className="ml-[15vw] overflow-hidden">
                                <h1>Co-founder and creative</h1>
                            </div>
                            <div className="overflow-hidden">
                                <h1>director at Outpost with an unhealthy</h1>
                            </div>
                        </div>
                        <div className="overflow-hidden">
                            <h1>
                                obsession with anything design. Over the last 15 years, I’ve worked
                                on a diverse
                            </h1>
                        </div>
                        <div className="overflow-hidden">
                            <h1>
                                range of clients across multiple disciplines from brand creation and
                            </h1>
                        </div>
                        <div className="overflow-hidden">
                            <h1>
                                development, large scale website implementation and pan-European
                            </h1>
                        </div>
                        <div className="overflow-hidden">
                            <h1>advertising campaigns.</h1>
                        </div>
                    </div>
                </div>
                <div className="ml-0 md:ml-[23vw] mt-[3vw]">
                    <div className="overflow-hidden">
                        <h1>
                            My experience across multiple disciplines especially advertising
                        </h1>
                    </div>
                    <div className="overflow-hidden">
                        <h1>has helped me approach websites with a more strategic and</h1>
                    </div>
                    <div className="overflow-hidden">
                        <h1>
                            holistic view. I firmly believe that in order to successfully engage
                        </h1>
                    </div>
                    <div className="overflow-hidden">
                        <h1>and resonate with your audience you must not only</h1>
                    </div>
                    <div className="overflow-hidden">
                        <h1>communicate a powerful story but you must create a</h1>
                    </div>
                    <div className="overflow-hidden">
                        <h1>memorable and lasting experience.</h1>
                    </div>
                </div>
                <div className="pl-[23vw] flex flex-col gap-[2vw] md:gap-[0.8vw] my-[10vw] relative">
                    <div className="md:flex gap-[5vw] absolute top-[-5%] md:top-[-15%] left-0">
                        <div className="hidden md:block -rotate-90 text-[0.8vw] leading-[1vw]">
                            <h2>WEBSITE</h2>
                            <h2>DESIGN</h2>
                        </div>
                        <div>
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
                                <path
                                    d="M25.8 32l-7.6-4.4v8.8z"
                                    fill="currentColor"
                                    opacity={1}
                                />
                            </svg>
                        </div>
                    </div>
                    <a href="">
                        <div
                            className="relative h-[5vw] md:h-[2.2vw] w-[24vw] md:w-[10vw] overflow-hidden text-gray-400 hover:text-[var(--color-light)]">
                            <div className="absolute top-[-35%] hover:top-[-185%] duration-300 ease-in-out">
                                <h1>Mail</h1>
                                <h1>Mail</h1>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div
                            className="relative h-[5vw] md:h-[2.2vw] w-[24vw] md:w-[10vw] overflow-hidden text-gray-400 hover:text-[var(--color-light)]">
                            <div className="absolute top-[-35%] hover:top-[-185%] duration-300 ease-in-out">
                                <h1>Instagram</h1>
                                <h1>Instagram</h1>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div
                            className="relative h-[5vw] md:h-[2.2vw] w-[24vw] md:w-[10vw] overflow-hidden text-gray-400 hover:text-[var(--color-light)]">
                            <div className="absolute top-[-35%] hover:top-[-185%] duration-300 ease-in-out">
                                <h1>Linkedin</h1>
                                <h1>Linkedin</h1>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div
                            className="relative h-[5vw] md:h-[2.2vw] w-[24vw] md:w-[10vw] overflow-hidden text-gray-400 hover:text-[var(--color-light)]">
                            <div className="absolute top-[-35%] hover:top-[-185%] duration-300 ease-in-out">
                                <h1>Twitter</h1>
                                <h1>Twitter</h1>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div
                            className="relative h-[5vw] md:h-[2.2vw] w-[24vw] md:w-[10vw] overflow-hidden text-gray-400 hover:text-[var(--color-light)]">
                            <div className="absolute top-[-35%] hover:top-[-185%] duration-300 ease-in-out">
                                <h1>Behance</h1>
                                <h1>Behance</h1>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div
                            className="relative h-[5vw] md:h-[2.2vw] w-[24vw] md:w-[10vw] overflow-hidden text-gray-400 hover:text-[var(--color-light)]">
                            <div className="absolute top-[-35%] hover:top-[-185%] duration-300 ease-in-out">
                                <h1>Dribbble</h1>
                                <h1>Dribbble</h1>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}