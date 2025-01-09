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

    const maskId = `mask-${Date.now()}`;

    const wrapper = document.createElement("div");
    wrapper.style.cssText = `
        position: fixed;
        top: ${from.top}px;
        left: ${from.left}px;
        z-index: 10000;
        overflow: hidden;
        width: ${from.width}px; /* Initial width */
        height: ${from.height}px; /* Initial height */
    `;
    clone.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
    `;

    const initPath = `M0 0
         Q50 ${from.height / 2} 0 ${from.height}
         Q${from.width / 2} ${from.height - 50} ${from.width} ${from.height}
         Q${from.width - 50} ${from.height / 2} ${from.width} 0
         Q${from.width / 2} 50 0 0
         Z`

    const targetPath = `M0 0
         Q50 ${to.height / 2} 0 ${to.height}
         Q${to.width / 2} ${to.height - 50} ${to.width} ${to.height}
         Q${to.width - 50} ${to.height / 2} ${to.width} 0
         Q${to.width / 2} 50 0 0
         Z`

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 100 100");
    svg.setAttribute("preserveAspectRatio", "none");
    svg.style.cssText = `position: absolute; top: 0; left: 0`;
    svg.style.backgroundColor = 'red';


    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    const mask = document.createElementNS("http://www.w3.org/2000/svg", "mask");
    mask.setAttribute("id", maskId);
    mask.setAttribute("width", "100%");
    mask.setAttribute("height", "100%");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", initPath);
    path.setAttribute("fill", "white");

    // Create rect for full coverage
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("width", "100%");
    rect.setAttribute("height", "100%");

    // Append rect and path to mask
    mask.appendChild(rect);
    mask.appendChild(path);

    // Append mask to defs and defs to SVG
    defs.appendChild(mask);
    svg.appendChild(defs);

    // Apply the mask to the clone
    clone.style.mask = `url(#${maskId})`;
    clone.style.webkitMask = `url(#${maskId})`;
    clone.classList = '';
    clone.style.width = '100%';
    clone.style.height = '100%';

    console.log(wrapper)

    // Append elements to wrapper
    wrapper.appendChild(svg);
    wrapper.appendChild(clone);
    document.body.appendChild(wrapper);

    gsap.set(animatedElement, {visibility: "hidden"});

    const tl = gsap.timeline()

    // Animate wrapper to full screen
    tl.to(wrapper, {
        duration: 2,
        top: `${to.top}px`,
        left: `${to.left}px`,
        width: `${to.width}px`,
        height: `${to.height}px`,
        autoRound: false,
        ease: "power2.out",
        onComplete: () => {
            // setTimeout(() => {
            //     document.body.removeChild(wrapper);
            //     gsap.set(animatedElement, {visibility: "visible"});
            // }, 2000);
        },
    }, 'a')
    tl.to(path, {
        duration: 2,
        ease: "power2.out",
        attr: {
            d: targetPath
        }
    }, 'a')
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
