import {useState, useEffect} from 'react';

export const useTheme = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(() =>
        document.body.classList.contains("bg-dark")
    );

    useEffect(() => {
        const updateTheme = () => {
            setIsDarkTheme(document.body.classList.contains("bg-dark"));
        };

        const observer = new MutationObserver(updateTheme);
        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ["class"],
        });

        updateTheme();

        return () => observer.disconnect();
    }, []);

    return {isDarkTheme};
};
