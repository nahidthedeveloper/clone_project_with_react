import {Link, useLocation} from "react-router-dom";

export default function Footer() {
    const location = useLocation();
    return (
        <footer>
            <hr className={`${location.pathname === '/' ? 'border-dark' : 'border-light'}`}/>
            <div
                className={`${location.pathname === '/' ? 'text-dark' : 'text-light'} flex justify-between items-end mt-8 pb-24 text-[2.5vw] md:text-[1vw] overflow-hidden`}>
                <div className="overflow-hidden">
                    <Link to="#top" className="inline-block nav-link">BACK TO TOP</Link>
                </div>
                <div className="text-right">
                    <ul className="md:flex gap-[3vw]">
                        <li><Link to="#" className="inline-block nav-link">LINK</Link></li>
                        <li><Link to="https://www.behance.net" className="inline-block nav-link">BEHANCE</Link></li>
                        <li><Link to="https://twitter.com" className="inline-block nav-link">TWITTER</Link></li>
                        <li><Link to="https://www.linkedin.com" className="inline-block nav-link">LINKEDIN</Link></li>
                        <li><Link to="https://www.instagram.com" className="inline-block nav-link">INSTAGRAM</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
