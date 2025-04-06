
import { useState } from 'react';

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div id="ab-full-width-with-dismiss-button-on-blue-bg" className="group block bg-gray-100 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 py-4 rounded-lg text-center transition duration-300">
      <div className="sec_container">
        <p className="me-2 inline-block text-sm text-gray-800">
          Download our latest brochure.
        </p>
        <a className="group-hover:underline group-focus:underline decoration-2 inline-flex justify-center items-center gap-x-2 font-semibold text-blue-600 text-sm">
          Download now
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </a>

        <div className="ps-3 ms-auto inline-flex float-end">
          <button 
            type="button" 
            className="inline-flex rounded-lg p-1.5 text-black hover:bg-white/10 focus:outline-hidden focus:bg-white/10" 
            onClick={() => setIsVisible(false)}
          >
            <span className="sr-only">Dismiss</span>
            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </button>
        </div>
      </div>
    </div>
  )
}
