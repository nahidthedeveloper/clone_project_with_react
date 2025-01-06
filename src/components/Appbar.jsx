import {Link, useLocation} from "react-router-dom";

const Appbar = () => {
    const location = useLocation();
    return (
        <>
            <div
                className={`flex justify-between py-10 text-[3vw] md:text-[1.1vw] ${location.pathname === '/' ? 'text-dark' : 'text-light'}`}>
                <div>
                    <Link to="/">Chris Wilcock ©</Link>
                </div>

                <ul className="flex gap-10 font">
                    <li className="nav-link">
                        <Link to="/about">
                            <div className="relative h-[4vw] md:h-[1.5vw] w-[8vw] md:w-[3vw] overflow-hidden">
                                <div className="absolute top-0 hover:top-[-110%] duration-300">
                                    <div>About</div>
                                    <div>About</div>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link to="#">
                            <div className="relative h-[4vw] md:h-[1.5vw] w-[8vw] md:w-[3vw] overflow-hidden">
                                <div className="absolute top-0 hover:top-[-110%] duration-300">
                                    <div>Cases</div>
                                    <div>Cases</div>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <hr className={`${location.pathname === '/' ? 'border-dark' : 'border-light'}`} id="firstHR"/>
        </>
    );
};

export default Appbar;
