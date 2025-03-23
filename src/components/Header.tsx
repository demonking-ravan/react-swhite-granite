import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="h-24 w-full animate-fadeIn flex items-center justify-between">
        <div className="sec_container flex items-center justify-between">
          <div>
            <Link to="/home" className="font-serif text-2xl font-bold text-gray-800 hover">SWhite</Link>
          </div>
          <nav>
            <ul className='hidden md:flex'>
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
                <Link className='nav-link group-hover:-translate-y-[101%] transition-all duration-700 inline-block' to="/factory">Factory</Link>
                <Link aria-hidden={true} className='nav-link absolute left-0 group-hover:translate-y-[0] translate-y-[101%] top-0 transition-all duration-700' to="/factory">Factory</Link>
              </li>
            </ul>
          </nav>
        </div>
    </header>
  )
}
