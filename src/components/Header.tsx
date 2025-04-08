import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={`h-24 w-full flex items-center justify-between top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${visible ? 'translate-y-0 sticky' : '-translate-y-full'}`}>
        <div className="sec_container flex items-center justify-between h-full">
          <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
            <Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="11" fill="none" className="">
                <path stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.205 1h19m-19 9h19"></path>
              </svg>
            </Link>
          </div>
          <div className='h-full flex items-center'>
            <Link to="/" className="font-serif text-2xl font-bold text-gray-800 hover h-2/5 inline-block">
              <img className='h-full w-auto' src="/logo.png" alt="logo" />
            </Link>
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
                <Link className='nav-link group-hover:-translate-y-[101%] transition-all duration-700 inline-block' to="/blogs">Blogs</Link>
                <Link aria-hidden={true} className='nav-link absolute left-0 group-hover:translate-y-[0] translate-y-[101%] top-0 transition-all duration-700' to="/blogs">Blogs</Link>
              </li>
              <li className='overflow-hidden relative w-fit group'>
                <Link className='nav-link group-hover:-translate-y-[101%] transition-all duration-700 inline-block' to="/Contact">Contact</Link>
                <Link aria-hidden={true} className='nav-link absolute left-0 group-hover:translate-y-[0] translate-y-[101%] top-0 transition-all duration-700' to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {isMobileMenuOpen && <MobileMenu toggleMobileMenu={toggleMobileMenu} />}
    </>
  )
}
