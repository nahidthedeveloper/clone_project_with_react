import gsap from "gsap";

const initPath = `M 0 0 Q0 50 0 100 Q50 100 100 100 Q100 50 100 0 Q50 0 0 0 Z`
const insidePath = `M 0 0 Q5 50 0 100 Q50 90 100 100 Q95 50 100 0 Q50 10 0 0 Z`
const outsidePath = `M 10 10 Q0 50 10 90 Q50 100 90 90 Q100 50 90 10 Q50 0 10 10 Z`

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

    const maskStyles = `
        mask-image: url(${encodedMaskPath(initPath)});
        -webkit-mask-image: url(${encodedMaskPath(initPath)});
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

    const tl = gsap.timeline({
        onComplete: () => {
            document.body.removeChild(clone);
            gsap.set(animatedElement, {visibility: "visible"});
        },
    });

    tl
        .to(clone, {
            duration: 0.5,
            scale: 1.3,
            autoRound: false,
            ease: "power2.out",
            onUpdate: () => {
                const maskUrl = `url(${encodedMaskPath(insidePath)})`;
                clone.style.maskImage = maskUrl;
                clone.style.webkitMaskImage = maskUrl;
            },
        })
        .to(clone, {
            duration: 0.5,
            autoRound: false,
            ease: "power2.out",
            onUpdate: () => {
                const maskUrl = `url(${encodedMaskPath(outsidePath)})`;
                clone.style.maskImage = maskUrl;
                clone.style.webkitMaskImage = maskUrl;
            },
        })
        .to(clone, {
            duration: 1.5,
            scale: 1.3,
            top: `${to.top}px`,
            left: `${to.left}px`,
            width: `${to.width}px`,
            height: `${to.height}px`,
            autoRound: false,
            ease: "power2.out",
        })
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

const encodedMaskPath = (path) => {
    const maskPath = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="${path}" fill="white" />
        </svg>`;

    return `data:image/svg+xml;base64,${btoa(maskPath)}`;
};


