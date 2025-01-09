import gsap from "gsap";

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

    const maskPath = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 0 0 Q5 50 0 100 Q50 90 100 100 Q95 50 100 0 Q50 10 0 0 Z" fill="white" />
        </svg>`;

    const encodedMaskPath = `data:image/svg+xml;base64,${btoa(maskPath)}`;

    const maskStyles = `
        mask-image: url(${encodedMaskPath});
        -webkit-mask-image: url(${encodedMaskPath});
        mask-size: cover;
        -webkit-mask-size: cover;
        mask-repeat: no-repeat;
        -webkit-mask-repeat: no-repeat;
    `;

    clone.classList = '';
    clone.style.cssText += maskStyles;

    document.body.appendChild(clone);

    gsap.set(animatedElement, {visibility: "hidden"});
    gsap.set(clone, {
        position: "fixed",
        top: `${from.top}px`,
        left: `${from.left}px`,
        width: `${from.width}px`,
        height: `${from.height}px`,
        zIndex: 1000,
        overflow: "hidden",
        margin: 0,
    });

    const tl = gsap.timeline();

    tl.to(clone, {
        duration: 2,
        // top: `${to.top}px`,
        // left: `${to.left}px`,
        // width: `${to.width}px`,
        // height: `${to.height}px`,
        scale: 1.5,
        autoRound: false,
        ease: "power2.out",
        onComplete: () => {
            document.body.removeChild(clone);
            gsap.set(animatedElement, {visibility: "visible"});
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

// const initPath = `M0 0
//          Q50 ${from.height / 2} 0 ${from.height}
//          Q${from.width / 2} ${from.height - 50} ${from.width} ${from.height}
//          Q${from.width - 50} ${from.height / 2} ${from.width} 0
//          Q${from.width / 2} 50 0 0
//          Z`
//
// const targetPath = `M0 0
//          Q50 ${to.height / 2} 0 ${to.height}
//          Q${to.width / 2} ${to.height - 50} ${to.width} ${to.height}
//          Q${to.width - 50} ${to.height / 2} ${to.width} 0
//          Q${to.width / 2} 50 0 0
//          Z`
