import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Appbar from "./components/Appbar.jsx";
import {BrowserRouter, useLocation} from "react-router-dom";
import Footer from "./components/Footer.jsx";
import CursorProvider from "./provider/cursorProvider.jsx";
import ThemeProvider from "./provider/themeProvider.jsx";
import TransitionProvider from "./provider/TransitionProvider.jsx";
import LenisScrollProvider from "./provider/LenisScrollProvider.jsx";

const AppWithFooter = () => {
    const location = useLocation();
    return (
        <>
            <Appbar/>
            <App/>
            {location.pathname !== '/cases' && <Footer/>}
        </>
    );
};

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <LenisScrollProvider>
            <BrowserRouter>
                <TransitionProvider>
                    <ThemeProvider>
                        <CursorProvider>
                            <AppWithFooter/>
                        </CursorProvider>
                    </ThemeProvider>
                </TransitionProvider>
            </BrowserRouter>
        </LenisScrollProvider>
    </StrictMode>
)
