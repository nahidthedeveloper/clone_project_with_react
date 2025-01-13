import {useLayoutEffect} from "react";
import {useLocation} from "react-router-dom";

export default function ThemeProvider({children}) {
    const location = useLocation();

    const lightThemePaths = ['/', '/project/discoveryland-co/'];

    useLayoutEffect(() => {
        const isLightTheme = lightThemePaths.includes(location.pathname);

        document.body.classList.remove('bg-light', 'bg-dark');
        document.body.classList.add(isLightTheme ? 'bg-light' : 'bg-dark');
    }, [location]);

    return <>{children}</>;
}
