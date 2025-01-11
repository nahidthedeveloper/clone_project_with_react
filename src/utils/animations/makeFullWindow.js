import gsap from "gsap";

const initial = `M0 0C0 0 0.302755 0 0.5 0C0.697245 0 1 0 1 0C1 0 1 0.326565 1 0.52381C1 0.721054 1 1 1 1C1 1 0.697245 1 0.5 1C0.302755 1 0 1 0 1C0 1 0 0.697245 0 0.5C0 0.302755 0 0 0 0Z`
const inside = `M0 0C0 0 0.302755 0.0238095 0.5 0.0238095C0.697245 0.0238095 1 0 1 0C1 0 0.97619 0.326565 0.97619 0.52381C0.97619 0.721054 1 1 1 1C1 1 0.697245 0.97619 0.5 0.97619C0.302755 0.97619 0 1 0 1C0 1 0.0238095 0.697245 0.0238095 0.5C0.0238095 0.302755 0 0 0 0Z`
const outside = `M0.0192308 0.0192308C0.0192308 0.0192308 0.312098 0 0.5 0C0.687902 0 0.980769 0.0192308 0.980769 0.0192308C0.980769 0.0192308 1 0.312098 1 0.5C1 0.687902 0.980769 0.980769 0.980769 0.980769C0.980769 0.980769 0.687902 1 0.5 1C0.312098 1 0.0192308 0.980769 0.0192308 0.980769C0.0192308 0.980769 0.000294287 0.693765 0 0.509615C-0.000306279 0.317961 0.0192308 0.0192308 0.0192308 0.0192308Z`


export const makeFullWindow = (animatedElement, path) => {
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

    const img = clone.querySelector('img');
    img.style.clipPath = 'url(#clipPath)';
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
    })
    gsap.set(path.current, {
        attr: {
            d: initial
        },
    })

    const tl = gsap.timeline({
        onComplete: () => {
            document.body.removeChild(clone);
            gsap.set(animatedElement, {visibility: "visible"});
        },
    });

    tl
        .to(clone, {
            duration: 1,
            scale: 1.2,
            autoRound: false,
            ease: "power2.out",
        }, 'a')
        .to(path.current, {
            duration: 1,
            attr: {
                d: inside
            },
            ease: "power2.out",
        }, 'a')
        .to(path.current, {
            duration: 0.50,
            attr: {
                d: outside
            },
            ease: "power2.out",
        }, 'b')
        .to(clone, {
            duration: 1.5,
            scale: 1,
            top: `${to.top}px`,
            left: `${to.left}px`,
            width: `${to.width}px`,
            height: `${to.height}px`,
            autoRound: false,
            ease: "power2.out",
        }, 'b')
        .to(path.current, {
            duration: 0.15,
            attr: {
                d: initial
            },
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
