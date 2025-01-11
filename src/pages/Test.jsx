import {useRef} from "react";
import "../index.css";
import {makeFullWindow} from "../utils/animations/makeFullWindow.js";
import {useGSAP} from "@gsap/react";

const Test = () => {
    const imgRef = useRef(null);
    const path = useRef(null)
    useGSAP(() => {
        const elements = imgRef.current.querySelectorAll(".element");
        elements.forEach((element) => {
            element.addEventListener("click", () => makeFullWindow(element, path));
        });
    }, {scope: imgRef});


    return (
        <div>
            <svg id="svg" className="absolute top-0 left-0 h-0 w-0">
                <defs>
                    <clipPath id="clipPath" clipPathUnits="objectBoundingBox">
                        <path ref={path}
                              d="M0 0C0 0 0.302755 0 0.5 0C0.697245 0 1 0 1 0C1 0 1 0.326565 1 0.52381C1 0.721054 1 1 1 1C1 1 0.697245 1 0.5 1C0.302755 1 0 1 0 1C0 1 0 0.697245 0 0.5C0 0.302755 0 0 0 0Z"
                              fill="black"/>
                    </clipPath>
                </defs>
            </svg>
            <main className="h-screen w-full flex justify-center items-center gap-3 overflow-visible" ref={imgRef}>
                <div className="element w-1/3 h-1/2">
                    <img className="h-full w-full object-center object-cover" src="/images/index/one.avif" alt=""/>
                </div>
                <div className="element w-1/3 h-1/2">
                    <img className="h-full w-full object-center object-cover" src="/images/index/two.avif" alt=""/>
                </div>
            </main>
        </div>
    );
};

export default Test;
