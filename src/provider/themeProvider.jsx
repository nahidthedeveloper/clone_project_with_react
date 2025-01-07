import {useLayoutEffect} from "react";
import {useLocation} from "react-router-dom";

export default function ThemeProvider({children}) {
    const location = useLocation();

    useLayoutEffect(() => {
        document.body.className = location.pathname === '/' ? 'bg-light' : 'bg-dark noise';
    }, [location]);

    return <>{children}</>;
}
