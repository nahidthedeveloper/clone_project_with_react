import {useEffect} from "react";
import {useLocation} from "react-router-dom";

export default function ThemeProvider({children}) {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            document.body.className = 'bg-light';
        } else {
            document.body.className = 'bg-dark noise';
        }
    }, [location]);

    return <div>{children}</div>;
}
