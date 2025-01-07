import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

// Array of brand names and their corresponding images
const brandData = [
    {name: "Adidas", image: "images/about/list/1.jpg"},
    {name: "Bacardi", image: "images/about/list/2.jpg"},
    {name: "Bear Grylls", image: "images/about/list/3.jpg"},
    {name: "Discovery Land Co.", image: "images/about/list/4.jpg"},
    {name: "Dolby", image: "images/about/list/5.jpg"},
    {name: "EPI1959", image: "images/about/list/6.jpg"},
    {name: "Google", image: "images/about/list/7.jpg"},
    {name: "Heineken", image: "images/about/list/8.jpg"},
    {name: "HenriLloyd", image: "images/about/list/9.jpg"},
    {name: "Hunter Douglas", image: "images/about/list/10.jpg"},
    {name: "Jaguar", image: "images/about/list/11.jpg"},
    {name: "James Fisher Marine", image: "images/about/list/12.jpg"},
    {name: "Luxaflex", image: "images/about/list/13.jpg"},
    {name: "RANA", image: "images/about/list/14.jpg"},
    {name: "Salesforce", image: "images/about/list/15.jpg"},
    {name: "Splunk", image: "images/about/list/16.jpg"}
];

export default function SectionTwo() {
    const sectionTwoRef = useRef(null);

    const offsetX = 150;
    const offsetY = 50;

    useGSAP(() => {
        const listImages = sectionTwoRef.current.querySelectorAll('.list_image');

        listImages.forEach((listImage, index) => {
            const imageDiv = listImage.querySelector('.imageDiv');

            listImage.addEventListener('mouseenter', (event) => {
                gsap.set(imageDiv, {
                    width: '110px',
                    height: '120px',
                    opacity: 0,
                    scale: 0.6,
                    display: 'block',
                    x: 0,
                    y: 0,
                    left: event.x + offsetX,
                    top: event.y + offsetY,
                });

                gsap.to(imageDiv, {
                    width: '300px',
                    height: '220px',
                    scale: 1,
                    opacity: 1,
                    duration: 0.6,
                    ease: 'power2.out',
                });
            });

            listImage.addEventListener('mousemove', (event) => {
                gsap.to(imageDiv, {
                    left: event.x + offsetX,
                    top: event.y + offsetY,
                    duration: 0.2, // Smooth transition duration
                    ease: 'power1.out',
                });
            });

            listImage.addEventListener('mouseleave', () => {
                gsap.to(imageDiv, {
                    display: 'none',
                    pointerEvents: "none",
                    scale: 0.6,
                    opacity: 0,
                    x: -200,
                    y: -100,
                    duration: 0.4, // Smooth transition when leaving
                    ease: 'power2.out',
                });
            });
        });
    }, {scope: sectionTwoRef});

    return (
        <section ref={sectionTwoRef} className="text-[5.2vw] md:text-[2.2vw] mb-[10vw] text-light md:relative">
            <div className="md:flex gap-[5vw] md:absolute left-0">
                <div
                    className="mt-[3vw] md:mt-0 md:-rotate-90 md:-translate-y-5 text-[3vw] leading-[3vw] md:leading-[1vw] md:text-[0.8vw]">
                    <h2>BRAND</h2>
                    <h2>EXPERIENCE</h2>
                </div>
                <div className="hidden md:block">
                    <svg className="w-[7vw] h-[7vw] md:w-[3.3vw] md:h-[3.3vw]" width="3.3vw" height="3.3vw"
                         viewBox="0 0 26 37" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 32H4c-1.6 0-2.8-1.3-2.8-2.8V0" fill="none" stroke="currentColor" strokeWidth={1}
                              strokeMiterlimit={10} strokeDasharray="none"/>
                        <path d="M25.8 32l-7.6-4.4v8.8z" fill="currentColor" opacity={1}/>
                    </svg>
                </div>
            </div>
            <div
                className="mt-[12vw] md:mt-[8vw] md:ml-[23vw] text-[10vw] md:text-[5vw] leading-[11vw] md:leading-[6vw] overflow-hidden">
                {brandData.map((brand, index) => (
                    <div key={index} className="overflow-hidden cursor-default list_image" data-index={index}>
                        <h1 className="relative z-10">{brand.name}</h1>
                        <div className="imageDiv hidden fixed w-[110px] h-[120px] z-20">
                            <img
                                className="h-full w-full object-cover object-right"
                                src={brand.image}
                                alt={`Image for ${brand.name}`}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
