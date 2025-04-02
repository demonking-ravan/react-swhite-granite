
export default function AnnouncementBanner() {
  return (
    <a className="group block bg-gray-100 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 p-4 rounded-lg text-center transition duration-300" href="#">
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <p className="me-2 inline-block text-sm text-gray-800">
          Download our latest brochure.
        </p>
        <span className="group-hover:underline group-focus:underline decoration-2 inline-flex justify-center items-center gap-x-2 font-semibold text-blue-600 text-sm">
          Download now
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </span>

        {/* <div className="ps-3 ms-auto inline-flex">
          <button type="button" className="inline-flex rounded-lg p-1.5 text-white/80 hover:bg-white/10 focus:outline-hidden focus:bg-white/10" data-hs-remove-element="#ab-full-width-with-dismiss-button-on-blue-bg">
            <span className="sr-only">Dismiss</span>
            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </button>
        </div> */}
      </div>
    </a>
  )
}
