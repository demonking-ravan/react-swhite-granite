import { Link } from "react-router-dom";


export default function MobileMenu({ toggleMobileMenu }: { toggleMobileMenu: () => void }) {
    return (
        <div className="fixed top-0 left-0 w-full h-screen overlayMenu z-[996] pointer-events-auto animation-show-menu flex">
            <div className="inner-overlay-container">
                <div className="close-overlay" onClick={toggleMobileMenu}>
                    <span className="w-6 h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none">
                            <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m20.79 34.65 13.86-13.86m0 13.86L20.79 20.79"></path>
                        </svg>
                    </span>
                </div>
                <div className="main-navigation-wrapper">
                    <nav>
                        <ul className="main-header flex flex-col font-serif">
                            <li>
                                <Link to="/" onClick={toggleMobileMenu}>Home</Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={toggleMobileMenu}>About</Link>
                            </li>
                            <li>
                                <Link to="/products" onClick={toggleMobileMenu}>Products</Link>
                            </li>
                            <li>
                                <Link to="/Contact" onClick={toggleMobileMenu}>Contact</Link>
                            </li>
                            <li>
                                <Link to="/blogs" onClick={toggleMobileMenu}>Blogs</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
