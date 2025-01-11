import gsap from "gsap";

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
            d: "M0 0C0 0 0.302755 0 0.5 0C0.697245 0 1 0 1 0C1 0 1 0.326565 1 0.52381C1 0.721054 1 1 1 1C1 1 0.697245 1 0.5 1C0.302755 1 0 1 0 1C0 1 0 0.697245 0 0.5C0 0.302755 0 0 0 0Z"
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
            duration: 0.50,
            scale: 1.3,
            autoRound: false,
            ease: "power2.out",
        }, 'a')
        .to(path.current, {
            duration: 0.5,
            attr: {
                d: "M0 0C0 0 0.302755 0.0714286 0.5 0.0714286C0.697245 0.0714286 1 0 1 0C1 0 0.928571 0.302755 0.928571 0.5C0.928571 0.697245 1 1 1 1C1 1 0.697245 0.928571 0.5 0.928571C0.302755 0.928571 0 1 0 1C0 1 0.0714286 0.697245 0.0714286 0.5C0.0714286 0.302755 0 0 0 0Z"
            },
            ease: "power2.out",
        }, 'a')
        .to(path.current, {
            duration: 0.50,
            attr: {
                d: "M0.0434783 0.0434783C0.0434783 0.0434783 0.319907 0 0.5 0C0.680093 0 0.956522 0.0434783 0.956522 0.0434783C0.956522 0.0434783 1 0.341646 1 0.521739C1 0.701832 0.956522 0.956522 0.956522 0.956522C0.956522 0.956522 0.680093 1 0.5 1C0.319907 1 0.0434783 0.956522 0.0434783 0.956522C0.0434783 0.956522 0 0.680093 0 0.5C0 0.319907 0.0434783 0.0434783 0.0434783 0.0434783Z"
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
                d: "M0 0C0 0 0.302755 0 0.5 0C0.697245 0 1 0 1 0C1 0 1 0.326565 1 0.52381C1 0.721054 1 1 1 1C1 1 0.697245 1 0.5 1C0.302755 1 0 1 0 1C0 1 0 0.697245 0 0.5C0 0.302755 0 0 0 0Z"
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
