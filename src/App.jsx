import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import DiscoverylandCo from "./pages/projects/discoveryland-co.jsx";
import Test from "./pages/Test.jsx";
import Cases from "./pages/Cases.jsx";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/cases" element={<Cases/>}/>
            <Route path="/test" element={<Test/>}/>
            <Route path="/project/discoveryland-co" element={<DiscoverylandCo/>}/>
        </Routes>
    );
}

export default App;
