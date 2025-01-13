import {useEffect, useRef} from "react";
import gsap from "gsap";
import {Draggable} from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const images = [
    {
        description: "Lady with a red umbrella",
        image_url: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    },
    {
        description: "Flowers and some fruits",
        image_url: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
    },
    {
        description: "Beautiful scenery",
        image_url: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    },
    {
        description: "Some kind of bird",
        image_url: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    },
    {
        description: "The attack of dragons",
        image_url: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
    },
];

export default function Cases() {
    const imageContainerRef = useRef(null);
    const cloneContainerRef = useRef(null);

    useEffect(() => {
        const imageContainer = imageContainerRef.current;
        const cloneContainer = cloneContainerRef.current;
        const totalWidth = imageContainer.scrollWidth;

        // Set initial position
        gsap.set(imageContainer, {x: 0});

        // Create Draggable for the container
        Draggable.create(imageContainer, {
            type: "x",
            inertia: true,
            bounds: {
                minX: -totalWidth / 2,
                maxX: totalWidth / 2,
            },
            onDrag() {
                adjustPosition();
            },
            onThrowUpdate: adjustPosition,
            onThrowComplete() {
                // When drag is finished, handle the loop
                if (gsap.getProperty(imageContainer, "x") >= totalWidth / 2) {
                    gsap.set(imageContainer, {x: 0});
                } else if (gsap.getProperty(imageContainer, "x") <= -totalWidth / 2) {
                    gsap.set(imageContainer, {x: 0});
                }
            },
        });

        // Adjust position during drag to make it wrap around
        function adjustPosition() {
            const currentX = gsap.getProperty(imageContainer, "x");
            const wrapValue = gsap.utils.wrap(-totalWidth, totalWidth);
            gsap.set(imageContainer, {x: wrapValue(currentX)});

            // If the image container's position reaches zero, clone the container
            if (currentX <= 0) {
                if (!cloneContainer.children.length) {
                    const clonedImages = imageContainer.children[0].cloneNode(true);
                    cloneContainer.appendChild(clonedImages);
                }
            }
        }

        return () => {
            Draggable.get(imageContainer)?.kill();
        };
    }, []);

    return (
        <div className="min-h-screen flex justify-center items-center overflow-hidden text-white cursor-grab">
            <div ref={imageContainerRef} className="flex space-x-4">
                {[...images].map((image, i) => (
                    <div key={i} className="scrollImage w-[400px] h-[400px]">
                        <img
                            src={image.image_url}
                            alt={image.description}
                            className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                    </div>
                ))}
            </div>
            <div ref={cloneContainerRef} className="flex space-x-4"></div>
        </div>
    );
}
