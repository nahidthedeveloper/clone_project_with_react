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

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <TransitionProvider>
                <ThemeProvider>
                    <CursorProvider>
                        <MainLayout>
                            <Appbar/>
                            <App/>
                            <Footer/>
                        </MainLayout>
                    </CursorProvider>
                </ThemeProvider>
            </TransitionProvider>
        </BrowserRouter>
    </StrictMode>,
)
