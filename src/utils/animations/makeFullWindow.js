import gsap from 'gsap';

export const makeFullWindow = (parentElement) => {
    if (!parentElement || !(parentElement instanceof HTMLElement)) {
        console.error("Invalid parentElement provided.");
        return;
    }

    const clone = parentElement.cloneNode(true);
    clone.style.cssText = window.getComputedStyle(parentElement).cssText;
    const from = calculatePosition(parentElement);
    const to = {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
    };

    // SVG paths for the mask animation
    const initPath = `M0 0 Q0 150 0 300 Q150 300 400 300 Q400 200 400 0 Q200 0 0 0 Z`;
    const insidePath = `M0 0 Q50 150 0 300 Q150 250 400 300 Q350 200 400 0 Q200 50 0 0 Z`;
    const outsidePath = `M50 50 Q0 150 50 250 Q200 300 350 250 Q400 150 350 50 Q200 0 50 50 Z`;

    // Create SVG and Mask
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    const mask = document.createElementNS("http://www.w3.org/2000/svg", "mask");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    // Set up SVG size to be responsive
    svg.setAttribute("width", `${from.width}px`);
    svg.setAttribute("height", `${from.height}px`);
    svg.setAttribute("viewBox", `0 0 ${from.width} ${from.height}`);
    svg.setAttribute("preserveAspectRatio", "none");

    // Set up mask attributes
    const maskId = `mask-${Date.now()}`;
    mask.setAttribute("id", maskId);
    path.setAttribute("d", initPath);
    path.setAttribute("fill", "white");

    // Assemble SVG structure
    mask.appendChild(path);
    defs.appendChild(mask);
    svg.appendChild(defs);
    document.body.appendChild(svg);

    gsap.set(parentElement, {visibility: "hidden"});
    gsap.set(clone, {
        position: "fixed",
        top: from.top,
        left: from.left,
        width: from.width,
        height: from.height,
        zIndex: 10000,
        margin: 0,
    });
    document.body.appendChild(clone);

    // Apply the mask to the clone element
    clone.style.mask = `url(#${maskId})`;
    clone.style.webkitMask = `url(#${maskId})`;

    // Create animation timeline
    const tl = gsap.timeline({
        onComplete: () => {
            gsap.set(parentElement, {visibility: "visible"});
            document.body.removeChild(clone);
            document.body.removeChild(svg);
        }
    });

    tl
        // Initial expansion (the clone and SVG both expand together)
        .to([clone, path], {
            duration: 2,
            top: from.top,
            left: from.left,
            width: from.width,
            height: from.height,
            scale: 1.1,
            ease: "power2.inOut",
        }, 'a')
        .to(path, {
            duration: 2,
            top: from.top,
            left: from.left,
            width: from.width,
            height: from.height,
            scale: 1.5,
            attr: {d: insidePath}, // The mask path expands as well
            ease: "power2.inOut",
        }, 'a')
        .to(path, {
            duration: 2,
            attr: {d: outsidePath},
            ease: "power2.inOut",
        });
};

// Helper function to calculate position
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
