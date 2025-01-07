import React, {useRef, useEffect} from "react";
import {TweenLite, Power1} from "gsap";
import "../index.css";

const Test = () => {
    const pagesRef = useRef(null);
    const tilesRef = useRef([]);

    useEffect(() => {
        tilesRef.current.forEach((tile) => {
            tile.addEventListener("click", () => animateHero(tile));
        });
    }, []);

    const animateHero = (fromHero) => {
        const clone = fromHero.cloneNode(true);
        clone.style.cssText = window.getComputedStyle(fromHero).cssText; // Copy styles from the original
        const from = calculatePosition(fromHero);
        const to = calculatePosition(pagesRef.current);

        TweenLite.set([fromHero, pagesRef.current], {visibility: "hidden"});
        TweenLite.set(clone, {position: "absolute", margin: 0});

        document.body.appendChild(clone);

        const style = {
            x: to.left - from.left,
            y: to.top - from.top,
            width: to.width,
            height: to.height,
            autoRound: false,
            ease: Power1.easeOut,
            onComplete: () => {
                TweenLite.set(pagesRef.current, {visibility: "visible"});
            },
        };

        TweenLite.set(clone, from);
        TweenLite.to(clone, 0.3, style);

        setTimeout(() => {
            TweenLite.set(pagesRef.current, {visibility: "hidden"});
            document.body.removeChild(clone);
            TweenLite.set(fromHero, {visibility: "visible"});
        }, 3000); // Automatically close after 3 seconds
    };

    const calculatePosition = (element) => {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || 0;

        return {
            top: Math.round(rect.top + scrollTop),
            left: Math.round(rect.left + scrollLeft),
            width: rect.width,
            height: rect.height,
        };
    };

    return (
        <main className="relative h-screen">
            <div className="h-96 bg-green-500"></div>

            {/* Tile container */}
            <div className="absolute top-[275px] left-0 right-0 text-center">
                {["hero-1", "hero-2", "hero-3", "hero-4"].map((hero, index) => (
                    <div key={hero}
                        ref={(el) => (tilesRef.current[index] = el)}
                        className={`tile w-48 h-48 m-1 inline-block cursor-pointer ${hero}`}
                    ></div>
                ))}
            </div>

            {/* One hidden page */}
            <div ref={pagesRef} className="fixed inset-0 invisible bg-cover bg-center"></div>
        </main>
    );
};

export default Test;
