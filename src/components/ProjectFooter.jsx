import {useTheme} from "../hooks/useTheme.js";
import {Link} from "react-router-dom";

export default function ProjectFooter({name, image}) {
    const {isDarkTheme} = useTheme()
    return (
        <section className="mt-64 mb-[4vw]">
            <hr className={`${isDarkTheme ? "border-light" : "border-dark"} w-full`}/>
            <div
                className={`"text-[5.2vw] md:text-[2.2vw] mb-[8vw] md:mb-[3vw] w-full" ${isDarkTheme ? "text-light" : "text-dark"}`}>
                <div className="mt-[5vw] text-[6vw] md:text-[4.5vw] leading-[6vw] md:leading-[4vw] font-Exil71">
                    <div className="overflow-hidden">
                        <h1 className="translate-y-[-1vw]">NEXT</h1>
                    </div>
                    {name.map((nm, i) =>
                        <div key={i} className="overflow-hidden">
                            <h1 className="translate-y-[-1vw]">{nm}</h1>
                        </div>
                    )}
                </div>
            </div>
            <div className="h-[40vw] md:h-[26vw] md:w-4/6 ">
                <Link to="">
                    <img className="h-full w-full object-center object-cover" src={image}
                         alt=""/>
                </Link>
            </div>
        </section>
    )
}