import {useGSAP} from "@gsap/react";
import {useEffect, useRef, useState} from "react";
import gsap from "gsap";

export default function TransitionProvider({children}) {

    const overlay = useRef()


    // useGSAP(() => {
    //     const h1 = overlay.current.querySelectorAll('.overlayH1')
    //     gsap.from(h1, {
    //         y: 300,
    //         opacity: 0,
    //         duration: 0.8,
    //         stagger: 0.1,
    //         ease: 'power2.out'
    //     });
    //     setTimeout(() => {
    //         gsap.to(h1, {
    //             y: 300,
    //             opacity: 0,
    //             duration: 0.8,
    //             stagger: 0.1,
    //             ease: 'power2.in',
    //             onComplete: () => {
    //             }
    //         });
    //     }, 3000);
    //
    // }, {scope: overlay})

    return (
        <div>
            {/*<div ref={overlay}*/}
            {/*     className="animate-overlay h-screen w-full fixed top-0 left-0 bg-dark noise font-Exil71"*/}
            {/*     style={{zIndex: '10000000000'}}>*/}

            {/*    <div className="fixed bottom-8 left-8">*/}
            {/*        <div className="overflow-hidden">*/}
            {/*            <h1 className="overlayH1 translate-y-[-1vw] text-white text-[6vw] md:text-[4.5vw] leading-[6vw] md:leading-[4vw]">CHRIS</h1>*/}
            {/*        </div>*/}
            {/*        <div className="overflow-hidden">*/}
            {/*            <h1 className="overlayH1 translate-y-[-1vw] text-white text-[6vw] md:text-[4.5vw] leading-[6vw] md:leading-[4vw]">WILCOCK</h1>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {children}
        </div>
    )
}