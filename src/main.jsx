import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Appbar from "./components/Appbar.jsx";
import {BrowserRouter} from "react-router-dom";
import MainLayout from "./Layout/MainLayout.jsx";
import Footer from "./components/Footer.jsx";
import CursorProvider from "./provider/cursorProvider.jsx";
import ThemeProvider from "./provider/themeProvider.jsx";
import TransitionProvider from "./provider/TransitionProvider.jsx";
import LenisScrollProvider from "./provider/LenisScrollProvider.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <LenisScrollProvider>
            <BrowserRouter>
                <TransitionProvider>
                    <ThemeProvider>
                        <CursorProvider>
                            <Appbar/>
                            <App/>
                            <Footer/>
                        </CursorProvider>
                    </ThemeProvider>
                </TransitionProvider>
            </BrowserRouter>
        </LenisScrollProvider>
    </StrictMode>,
)
