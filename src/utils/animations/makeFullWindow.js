import {gsap} from "gsap";

export const makeFullWindow = (animatedElement) => {
    if (!animatedElement || !(animatedElement instanceof HTMLElement)) {
        console.error("Invalid animatedElement provided.");
        return;
    }

    const clone = animatedElement.cloneNode(true);
    clone.style.cssText = window.getComputedStyle(animatedElement).cssText;

    const from = calculatePosition(animatedElement);
    const to = {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
    };

    // Hide the original element and set up the clone
    gsap.set(animatedElement, {visibility: "hidden"});
    gsap.set(clone, {
        position: "fixed",
        top: `${from.top}px`,
        left: `${from.left}px`,
        width: `${from.width}px`,
        height: `${from.height}px`,
        zIndex: 10000,
        overflow: "hidden",
        margin: 0,
    });

    document.body.appendChild(clone);

    // Animate the clone to full window size
    gsap.to(clone, {
        duration: 2,
        top: `${to.top}px`,
        left: `${to.left}px`,
        width: `${to.width}px`,
        height: `${to.height}px`,
        autoRound: false,
        ease: 'power2.out',
        onComplete: () => {
            setTimeout(() => {
                document.body.removeChild(clone);
                gsap.set(animatedElement, {visibility: "visible"});
            }, 2000);
        },
    });
};

const calculatePosition = (element) => {
    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || 0;

    return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft,
        width: rect.width,
        height: rect.height,
    };
};
