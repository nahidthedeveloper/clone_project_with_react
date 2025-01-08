import {useRef} from "react";
import "../index.css";
import {makeFullWindow} from "../utils/animations/makeFullWindow.js";
import {useGSAP} from "@gsap/react";

const Test = () => {
    const imgRef = useRef(null);
    useGSAP(() => {
        const elements = imgRef.current.querySelectorAll(".element");
        elements.forEach((element) => {
            element.addEventListener("click", () => makeFullWindow(element, 2000));
        });
    }, {scope: imgRef});


    return (
        <main className="h-screen w-full flex justify-center items-center gap-3" ref={imgRef}>
            <div className="element w-1/3 h-1/2">
                <img className="h-full w-full object-center object-cover" src="/images/index/one.avif" alt=""/>
            </div>
            <div className="element w-1/3 h-1/2">
                <img className="h-full w-full object-center object-cover" src="/images/index/two.avif" alt=""/>
            </div>
        </main>
    );
};

export default Test;
