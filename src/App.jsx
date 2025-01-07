import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import DiscoverylandCo from "./pages/projects/discoveryland-co.jsx";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/project/discoveryland-co" element={<DiscoverylandCo/>}/>
        </Routes>
    );
}

export default App;
