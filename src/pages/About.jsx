import Hero from "../components/About/Hero.jsx";
import SectionOne from "../components/About/sectionOne.jsx";
import SectionTwo from "../components/About/sectionTwo.jsx";

const About = () => {
    return (
        <div>
            <Hero/>
            <SectionOne/>
            <hr className="border-light"/>
            <SectionTwo/>
            <hr className="border-light"/>

            <div id="about_container">
                <section
                    className="text-[5.2vw] md:text-[2.2vw] mb-[10vw] text-[var(--color-light)] md:relative">
                    <div className="md:flex gap-[5vw] md:absolute left-0">
                        <div
                            className="mt-[3vw] md:mt-0 md:-rotate-90 md:-translate-y-5 text-[2vw] leading-[3vw] md:leading-[1vw] md:text-[0.8vw]">
                            <h6>AWARDS+</h6>
                            <h6>RECOGNITION</h6>
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
                    <div className="mt-[12vw] md:mt-[8vw] md:ml-[23vw] text-[5vw] md:text-[2.2vw]">
                        <div className="w-full md:w-[50%]">
                            <div className="overflow-hidden">
                                <h1 className="text-gray-400 pt-[3vw]">(07) AWWWARDS</h1>
                            </div>
                            <div
                                className="text-[5vw] md:text-[1.7vw] md:leading-[2.8vw] my-[7vw] md:mt-[1vw] pb-[3vw]">
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>SOTD</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Bear Grylls</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>SOTD</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Verity Studios</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>SOTD</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>The Hook Group</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>SOTD</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Discovery Land Co</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>SOTY</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Outpost</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>SOTD</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Portfolio 2020</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>SOTM</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Portfolio (Nominee)</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="border-light"/>
                        {/* Other Sections */}
                        <div className="w-full md:w-[50%]">
                            <div className="overflow-hidden">
                                <h1 className="text-gray-400 pt-[3vw]">(02) FWA</h1>
                            </div>
                            <div
                                className="text-[5vw] md:text-[1.7vw] md:leading-[2.8vw] my-[7vw] md:mt-[1vw] pb-[3vw]">
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>FOTD</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Bear Grylls</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>FOTD</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Verity Studios</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="border-light"/>
                        <div className="w-full md:w-[50%]">
                            <div className="overflow-hidden">
                                <h1 className="text-gray-400 pt-[3vw]">(09) CSSDA</h1>
                            </div>
                            <div
                                className="text-[5vw] md:text-[1.7vw] md:leading-[2.8vw] my-[7vw] md:mt-[1vw] pb-[3vw]">
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>SOTD</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Bear Grylls</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>SOTD</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Verity Studios</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>SOTD</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>The Hook Group</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>SOTD</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Discovery Land Co</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>SOTY</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Bear Grylls</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>SOTY</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Bear Grylls (Nominee)</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>SOLD</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Outpost (Nominee)</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>SOLD</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Portfolio</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>SOLD</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Portfolio (Nominee)</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="border-light"/>
                        <div className="w-full md:w-[50%]">
                            <div className="overflow-hidden">
                                <h1 className="text-gray-400 pt-[3vw]">(04) COMMUNICATIONS ARTS</h1>
                            </div>
                            <div
                                className="text-[5vw] md:text-[1.7vw] md:leading-[2.8vw] my-[7vw] md:mt-[1vw] pb-[3vw]">
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Webpicas</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Bear Grylls</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Webpicas</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Verity Studios</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Webpicas</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Discovery Land Co</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>WOTY</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Bear Grylls (Nominee)</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="border-light"/>
                        <div className="w-full md:w-[50%]">
                            <div className="overflow-hidden">
                                <h1 className="text-gray-400 pt-[3vw]">(07) BEHANCE</h1>
                            </div>
                            <div
                                className="text-[5vw] md:text-[1.7vw] md:leading-[2.8vw] my-[7vw] md:mt-[1vw] pb-[3vw]">
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Feature</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Bear Grylls</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Feature</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Chileno Bay</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Feature</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Discovery Land Co</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Feature</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>The Hook Group</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Feature</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Makena</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Feature</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>ShadeStudio</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Feature</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Yellowstone Club</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="border-light"/>
                        <div className="w-full md:w-[50%]">
                            <div className="overflow-hidden">
                                <h1 className="text-gray-400 pt-[3vw]">(05) AIGA</h1>
                            </div>
                            <div
                                className="text-[5vw] md:text-[1.7vw] md:leading-[2.8vw] my-[7vw] md:mt-[1vw] pb-[3vw]">
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Feature</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Chileno Bay</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Feature</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>The Hook Group</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Feature</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>ShadeStudio</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Feature</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Makena</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Feature</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Yellowstone Club</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="border-light"/>
                        <div className="w-full md:w-[50%]">
                            <div className="overflow-hidden">
                                <h1 className="text-gray-400 pt-[3vw]">(02) WEBBYS</h1>
                            </div>
                            <div
                                className="text-[5vw] md:text-[1.7vw] md:leading-[2.8vw] my-[7vw] md:mt-[1vw] pb-[3vw]">
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Nominee</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>DiscoveryLandCo</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Honouree</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>DiscoveryLandCo</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="border-light"/>
                        <div className="w-full md:w-[50%]">
                            <div className="overflow-hidden">
                                <h1 className="text-gray-400 pt-[3vw]">(01) .NET MAGAZINE</h1>
                            </div>
                            <div
                                className="text-[5vw] md:text-[1.7vw] md:leading-[2.8vw] my-[7vw] md:mt-[1vw] pb-[3vw]">
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Feature</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Verity Studios</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="border-light"/>
                        <div className="w-full md:w-[50%]">
                            <div className="overflow-hidden">
                                <h1 className="text-gray-400 pt-[3vw]">(01) WEB DESIGNER MAGAZINE</h1>
                            </div>
                            <div
                                className="text-[5vw] md:text-[1.7vw] md:leading-[2.8vw] my-[7vw] md:mt-[1vw] pb-[3vw]">
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Feature</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Verity Studios</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="border-light"/>
                        <div className="w-full md:w-[50%]">
                            <div className="overflow-hidden">
                                <h1 className="text-gray-400 pt-[3vw]">(01) SITE INSPIRE</h1>
                            </div>
                            <div
                                className="text-[5vw] md:text-[1.7vw] md:leading-[2.8vw] my-[7vw] md:mt-[1vw] pb-[3vw]">
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Feature</h1>
                                    </div>
                                    <div className="col-span-1 overflow-hidden">
                                        <h1>Verity Studios</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div
                        className="text-[5.2vw] md:text-[2.2vw] mb-[8vw] md:mb-[3vw] text-[var(--color-light)] md:relative">
                        <hr className="border-light"/>
                        <div
                            className="mt-[10vw] text-[6vw] md:text-[4.5vw] leading-[6vw] md:leading-[4vw]"
                            style={{fontFamily: '"Exil71",serif'}}
                        >
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
            </div>

        </div>
    );
};

export default About;