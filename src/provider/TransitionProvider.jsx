import {useState, useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

export default function TransitionProvider({children}) {
    const overlay = useRef(null);
    const [showChildren, setShowChildren] = useState(false);

    useGSAP(() => {
        const h1 = overlay.current.querySelectorAll("h1");
        const timeline = gsap.timeline();

        timeline
            .from(h1, {
                y: 300,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
            })
            .to(h1, {
                y: 300,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.in",
                delay: 2,
            })
            .to(overlay.current, {
                opacity: 0,
                display: 'none',
                duration: 0.5,
                ease: "power4.out",
                onComplete: () => {
                    setShowChildren(true);
                },
            });
    }, {scope: overlay});

    return (
        <div>
            <div
                ref={overlay}
                className="block h-screen w-full fixed top-0 left-0 bg-dark noise font-Exil71 cursor-wait"
                style={{zIndex: "10000"}}
            >
                <div className="fixed bottom-8 left-8">
                    <div className="overflow-hidden">
                        <h1
                            className="text-white text-[6vw] md:text-[4.5vw] leading-[6vw] md:leading-[4vw]"
                            style={{transform: "translateY(-1vw)"}}
                        >
                            CHRIS
                        </h1>
                    </div>
                    <div className="overflow-hidden">
                        <h1
                            className="text-white text-[6vw] md:text-[4.5vw] leading-[6vw] md:leading-[4vw]"
                            style={{transform: "translateY(-1vw)"}}
                        >
                            WILCOCK
                        </h1>
                    </div>
                </div>
            </div>

            {showChildren && children}
        </div>
    );
}
