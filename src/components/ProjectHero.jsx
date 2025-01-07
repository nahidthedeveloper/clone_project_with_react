import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

export default function ProjectHero({image, text, client, role, credits}) {
    const location = useLocation();
    const [isDarkTheme, setIsDarkTheme] = useState(document.body.classList.contains("bg-dark"));

    useEffect(() => {
        const updateTheme = () => {
            setIsDarkTheme(document.body.classList.contains("bg-dark"));
        };

        updateTheme();
        const observer = new MutationObserver(updateTheme);
        observer.observe(document.body, {attributes: true, attributeFilter: ["class"]});

        return () => observer.disconnect();
    }, [location]);

    return (
        <div>
            <div className="h-screen w-full">
                <img className="h-full w-full object-cover object-center" src={image} alt="Project Image"/>
                <div
                    className="px-4 md:px-14 absolute bottom-12 left-0 text-[8vw] uppercase font-bold text-light leading-[4vw] font-Exil71">
                    {text.map((line, index) => (
                        <div key={index} className="overflow-hidden h-[8.2vw]">
                            <h3>{line}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className="px-4 md:px-14 mt-[5vw] mb-[10vw]">
                <hr className={`${isDarkTheme ? "border-light" : "border-dark"} w-full`}/>
                <div
                    className="mt-[4vw] md:mt-[2vw] uppercase text-[2.6vw] leading-[2.2vw] md:text-[0.7vw] md:leading-[0.7vw] flex justify-between align-top">
                    <div>
                        <p>client:</p>
                        {client.map((name, index) => (
                            <p key={index}>{name}</p>
                        ))}
                    </div>
                    <div>
                        <p>role:</p>
                        {role.map((roleItem, index) => (
                            <p key={index}>{roleItem}</p>
                        ))}
                    </div>
                    <div>
                        <p>credits:</p>
                        {credits.map((credit, index) => (
                            <p key={index}>{credit}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
