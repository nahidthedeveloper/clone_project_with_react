import {useLayoutEffect} from "react";
import {useLocation} from "react-router-dom";

export default function ThemeProvider({children}) {
    const location = useLocation();

    const lightThemePaths = ['/', '/project/discoveryland-co/'];

    useLayoutEffect(() => {
        const isLightTheme = lightThemePaths.includes(location.pathname);

        document.body.classList.remove('bg-light', 'bg-dark', 'noise');
        document.body.classList.add(isLightTheme ? 'bg-light' : 'bg-dark');
        if (!isLightTheme) {
            document.body.classList.add('noise');
        }
    }, [location]);

    return <>{children}</>;
}
