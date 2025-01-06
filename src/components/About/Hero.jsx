export default function Hero() {
    return (
        <div className="relative">
            <div style={{position: "relative", zIndex: 2}}>
                <section className="my-[10vw] md:my-[7vw]">
                    <div className="section1_left text-[9vw] uppercase font-bold text-light leading-[4vw] font-Exil71">
                        <div className="overflow-hidden h-[8.2vw]">
                            <h3>Ui+Ux</h3>
                        </div>
                        <div className="overflow-hidden h-[8.2vw]">
                            <h3>Design</h3>
                        </div>
                        <div className="overflow-hidden h-[8.2vw]">
                            <h3>Brand</h3>
                        </div>
                        <div className="overflow-hidden h-[8.2vw]">
                            <h3>Website</h3>
                        </div>
                    </div>
                    <div className="md:hidden w-full h-[80vh] mt-[5vw]">
                        <img
                            className="h-full w-full object-cover object-top opacity-[40%]"
                            src={"images/about/men.jpg"}
                            alt="Men"
                        />
                    </div>
                </section>
            </div>
            <div
                id="about_men"
                className="hidden md:block h-[60vw] lg:h-[120vh] w-[46vw] absolute right-0 top-[-10%] opacity-30 overflow-hidden"
                style={{zIndex: 1}}
            >
                <div className="relative w-full h-full">
                    <div className="overlay absolute left-0 top-0 w-full h-full bg-[var(--color-dark)] z-20"/>
                    <img
                        className="right-0 h-full w-full object-cover object-top z-10"
                        src={"images/about/men.jpg"}
                        alt="Men"
                    />
                </div>
            </div>
        </div>
    )
}