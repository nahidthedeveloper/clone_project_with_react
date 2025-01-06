export default function ImageCard() {
    return (
        <section className="md:mb-[162px]">
            <hr className="border-black"/>
            <div className="flex justify-between  md:mt-8 flex-wrap md:flex-nowrap">
                <div className="w-[34vw] relative">
                    <div
                        className="mb-10 md:mb-0 text-[8vw] md:text-[4.5vw] uppercase font-bold text-white md:leading-[2vw]"
                        style={{fontFamily: '"Exil71",serif'}}
                    >
                        01/
                    </div>
                    <div className="hidden md:visible md:flex gap-[20vw] absolute bottom-0 left-0">
                        <div className="-rotate-90 text-[0.7vw]">
                            <h6>WEBSITE</h6>
                            <h6>DESIGN</h6>
                        </div>
                        <div>
                            <svg
                                width="3vw"
                                height="3vw"
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
                </div>
                <div className="imageContainer w-full md:w-[52vw] h-[63vw] md:h-[38vw]">
                    {/* SVG Mask with scaled path */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 300 200"
                        className="svgParent fixed"
                    >
                        <defs>
                            <mask id="svgMask" x={0} y={0} width="100%" height="100%">
                                <path className="imageMaskPath" d="" fill="white"/>
                            </mask>
                        </defs>
                    </svg>
                    {/* Image with Mask Applied */}
                    <img
                        className="mask_image h-full w-full object-cover object-center"
                        src="./images/index/one.avif"
                        alt=""
                    />
                </div>
            </div>
            <div className="flex justify-between flex-col-reverse md:flex-row">
                <div className="mt-[80px] md:mt-0">
                    <div className="md:hidden flex justify-between mb-8">
                        <div>
                            <svg
                                width="5vw"
                                height="5vw"
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
                        <div className="text-[2vw] leading-[14px] text-right">
                            <h6>WEBSITE</h6>
                            <h6>DESIGN</h6>
                        </div>
                    </div>
                </div>
                <div
                    className="text-[7.5vw] md:text-[4.5vw] uppercase font-bold text-[#212121] w-full md:w-[52vw] leading-[8vw] md:leading-[4vw]"
                    style={{fontFamily: '"Exil71",serif'}}
                >
                    <h1>Discovery</h1>
                    <h1 className="text-nowrap">Land Co</h1>
                </div>
            </div>
        </section>

    )
}