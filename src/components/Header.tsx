import { Link } from 'react-router-dom';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="h-24 w-full animate-fadeIn flex items-center justify-between">
        <div className="sec_container flex items-center justify-between">
          <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="11" fill="none" className="">
                <path stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.205 1h19m-19 9h19"></path>
              </svg>
            </span>
          </div>
          <div>
            <Link to="/home" className="font-serif text-2xl font-bold text-gray-800 hover">SWhite</Link>
          </div>
          <nav>
            <ul className={`md:flex hidden`}>
              <li className='overflow-hidden relative w-fit group'>
                <Link className='nav-link group-hover:-translate-y-[101%] transition-all duration-700 inline-block' to="/">Home</Link>
                <Link aria-hidden={true} className='nav-link absolute left-0 group-hover:translate-y-[0] translate-y-[101%] top-0 transition-all duration-700' to="/">Home</Link>
              </li>
              <li className='overflow-hidden relative w-fit group'>
                <Link className='nav-link group-hover:-translate-y-[101%] transition-all duration-700 inline-block' to="/about">About</Link>
                <Link aria-hidden={true} className='nav-link absolute left-0 group-hover:translate-y-[0] translate-y-[101%] top-0 transition-all duration-700' to="/about">About</Link>
              </li>
              <li className='overflow-hidden relative w-fit group'>
                <Link className='nav-link group-hover:-translate-y-[101%] transition-all duration-700 inline-block' to="/products">Products</Link>
                <Link aria-hidden={true} className='nav-link absolute left-0 group-hover:translate-y-[0] translate-y-[101%] top-0 transition-all duration-700' to="/products">Products</Link>
              </li>
              <li className='overflow-hidden relative w-fit group'>
                <Link className='nav-link group-hover:-translate-y-[101%] transition-all duration-700 inline-block' to="/Contact">Contact</Link>
                <Link aria-hidden={true} className='nav-link absolute left-0 group-hover:translate-y-[0] translate-y-[101%] top-0 transition-all duration-700' to="/contact">Contact</Link>
              </li>
              <li className='overflow-hidden relative w-fit group'>
                <Link className='nav-link group-hover:-translate-y-[101%] transition-all duration-700 inline-block' to="/blogs">Blogs</Link>
                <Link aria-hidden={true} className='nav-link absolute left-0 group-hover:translate-y-[0] translate-y-[101%] top-0 transition-all duration-700' to="/blogs">Blogs</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {isMobileMenuOpen && <MobileMenu toggleMobileMenu={toggleMobileMenu} />}
    </>
  )
}
