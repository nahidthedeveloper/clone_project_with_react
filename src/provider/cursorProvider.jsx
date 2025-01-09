import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useRef} from "react";

gsap.registerPlugin(useGSAP)

export default function CursorProvider({children}) {
    const cursorRef = useRef()

    useGSAP(() => {
        document.addEventListener('mousemove', (event) => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            gsap.to(cursorRef.current, {
                opacity: 1,
                x: mouseX - 25,
                y: mouseY - 25,
                duration: 0.3,
                ease: 'power2.out',
            });
        });

        document.addEventListener('mouseleave', () => {
            gsap.to(cursorRef.current, {
                opacity: 0,
                scale: 0.5,
                duration: 0.3,
                ease: 'power2.out',
            });
        });

        document.addEventListener('mouseenter', () => {
            gsap.to(cursorRef.current, {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: 'power2.out',
            });
        });

        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                gsap.to(cursorRef.current, {
                    scale: 0.3,
                    top: 25,
                    duration: 0.3,
                    ease: 'power2.out',
                });
            });

            link.addEventListener('mouseleave', () => {
                gsap.to(cursorRef.current, {
                    scale: 1,
                    top: 0,
                    duration: 0.3,
                    ease: 'power2.out',
                });
            });
        });
    }, {scope: cursorRef})
    return (
        <div>
            <div ref={cursorRef} id='cursor' style={{zIndex: 10001}}
                 className="h-[50px] w-[50px] rounded-full fixed top-0 left-0 border-2 border-blue-500 pointer-events-none opacity-0">
            </div>
            {children}
        </div>

    )
}