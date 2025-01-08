import {TweenLite, Power1} from "gsap";

export const makeFullWindow = (animatedElement, visibleDuration = 2000) => {
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

    TweenLite.set(animatedElement, {visibility: "hidden"});
    TweenLite.set(clone, {
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

    TweenLite.to(clone, 0.3, {
        top: `${to.top}px`,
        left: `${to.left}px`,
        width: `${to.width}px`,
        height: `${to.height}px`,
        autoRound: false,
        ease: Power1.easeOut,
        onComplete: () => {
            setTimeout(() => {
                document.body.removeChild(clone);
                TweenLite.set(animatedElement, {visibility: "visible"});
            }, visibleDuration);
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
