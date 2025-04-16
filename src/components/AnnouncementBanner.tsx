// import { useState } from 'react';

import { Link } from "react-router-dom";

export default function AnnouncementBanner() {
  // const [isVisible, setIsVisible] = useState(true);

  // if (!isVisible) return null;

  return (
    <div className="group hidden md:block bg-gray-100 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 py-4 rounded-lg transition duration-300">
      <div className="sec_container flex items-center justify-end gap-8">
        <div>
          <p className="me-2 inline-block text-sm text-gray-800">
            Download our latest brochure.
          </p>
          <a
            href="/assets/s-white-catalog_compressed.pdf"
            download="s-white-catalog.pdf"
            className="group-hover:underline group-focus:underline decoration-2 inline-flex justify-center items-center gap-x-2 font-semibold text-blue-600 text-sm"
          >
            Download now
            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </a>
        </div>

        {/* <div className="ps-3 ms-auto inline-flex float-end">
          <button 
            type="button" 
            className="inline-flex rounded-lg p-1.5 text-black hover:bg-white/10 focus:outline-hidden focus:bg-white/10" 
            onClick={() => setIsVisible(false)}
          >
            <span className="sr-only">Dismiss</span>
            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </button>
        </div> */}
        <a href="#" target="_blank" rel="noopener noreferrer" className="group/mail ps-3 inline-flex items-center">
          <div className="mr-2">
            <svg className="relative z-10 transition duration-300 w-5 h-5 group-hover/mail:fill-gray-500 fill-black" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" width="25" height="25" xmlns="http://www.w3.org/2000/svg"><path d="M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z"></path><path d="M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z"></path></svg>
          </div>
          <div className='overflow-hidden relative w-fit group'>
            <p className='nav-link m-0 group-hover/mail:-translate-y-[101%] transition-all duration-700 inline-block capitalize'>swhitegranite11@gmail.com</p>
            <p aria-hidden={true} className='nav-link m-0 absolute left-0 group-hover/mail:translate-y-[0] translate-y-[101%] top-0 transition-all duration-700 capitalize' >swhitegranite11@gmail.com</p>
          </div>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="group/phone ps-3 inline-flex items-center">
          <div className="mr-2">
            <svg className="relative z-10 transition duration-300 w-4 h-4 group-hover/phone:fill-gray-500 fill-black" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
          </div>
          <div className='overflow-hidden relative w-fit group'>
            <p className='nav-link m-0 group-hover/phone:-translate-y-[101%] transition-all duration-700 inline-block capitalize'>9414012234, 8890044922</p>
            <p aria-hidden={true} className='nav-link m-0 absolute left-0 group-hover/phone:translate-y-[0] translate-y-[101%] top-0 transition-all duration-700 capitalize' >9414012234, 8890044922</p>
          </div>
        </a>
        <Link to="/contact" className="group/phone ps-3 items-center nav-link m-0 uppercase font-bold">
            Enquire Now
        </Link>
      </div>
    </div>
  )
}
