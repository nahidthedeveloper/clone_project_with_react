import {ReactLenis} from '@studio-freight/react-lenis'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LenisScrollProvider = ({children}) => {

    return (
        <ReactLenis root>
            {children}
        </ReactLenis>
    );
};

export default LenisScrollProvider;
