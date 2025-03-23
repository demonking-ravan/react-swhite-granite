import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer id="footer" className="flex flex-col items-center w-full bg-white pt-6 relative z-[3]">
            <div className="sec_container mx-auto pt-6 pb-2 lg:py-6">
                <div className="grid-main">
                    <div>
                        <Link to="/home" className="font-serif text-2xl font-bold text-gray-800 hover">SWhite</Link>
                    </div>

                    <div className="col-start-1 col-end-6 md:col-start-5 md:col-end-9 flex flex-col justify-center mt-6 md:mt-0">
                        <p className="font-bold text-primary uppercase mb-1">SUMMER SEASON</p>
                        <p className="font-light">06.06.2025 - 26.10.2025</p>
                    </div>

                    <div className="col-start-7 md:col-start-9 col-end-13 flex flex-col justify-center mt-6 md:mt-0">
                        <p className="font-bold text-primary uppercase mb-1">Winter season</p>
                        <p className="font-light">13.12.2024 - 22.04.2025</p>
                    </div>

                    <div className="col-start-1 col-end-13 md:col-start-1 md:col-end-4 lg:col-start-1 lg:col-end-5 flex items-start justify-start lg:justify-normal h-fit mt-6 lg:pl-1">
                        <div>
                            <address className="font-light not-italic mb-8">
                                <p>
                                    <strong className="font-bold">S White Granite</strong>
                                    <br />
                                    Kh. No. 268,379/285, 267 & 437/432
                                    <br />
                                    Makrana Road, Mohanpura, Kishangarh,
                                    <br />
                                    Rajasthan - 305801
                                </p>
                            </address>
                            <a href="https://maps.app.goo.gl/j4PCbmLwr4KFhFhc6" className="not-italic inline-flex items-center no-underline arrow-wrapper">
                                <span className="link-after arrowLink">
                                    Getting here
                                    <div className="link-container">
                                        <span className="inline-grid init-arrow w-full h-full">
                                            <svg fill="none" viewBox="0 0 41 41" className="inline-grid init-arrow w-full h-full">
                                                <path stroke="#1E5E42" stroke-linecap="round" stroke-linejoin="round" d="M38.741 2.258 1.967 39.032M39.468 39.274V1.532H1.727"></path>
                                            </svg>
                                        </span>
                                        <span className="inline-grid hover-arrow w-full h-full">
                                            <svg fill="none" viewBox="0 0 41 41" className="inline-grid hover-arrow w-full h-full">
                                                <path stroke="#1E5E42" stroke-linecap="round" stroke-linejoin="round" d="M38.741 2.258 1.967 39.032M39.468 39.274V1.532H1.727"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="col-start-1 col-end-6 md:col-start-4 md:col-end-6 lg:col-start-5 lg:col-end-7 mt-6">
                        <ul className="">
                            <li><Link to="/" className="">Home</Link></li>
                            <li><Link to="/about" className="">About us</Link></li>
                            <li><Link to="/products" className="">Products</Link></li>
                        </ul>
                    </div>

                    <div className="col-start-6 col-end-13 md:col-start-6 md:col-end-8 lg:col-start-7 lg:col-end-9 mt-6">
                        <ul className="">
                            <li><Link to="/contact" className="">Contact</Link></li>
                            <li><Link to="/blog" className="">Blog</Link></li>
                        </ul>
                    </div>

                    <div className="col-start-1 col-end-6 md:col-start-8 md:col-end-11 lg:col-start-9 lg:col-end-12 mt-6">
                        <a href="" rel="noopener noreferrer" className="capitalize">instagram</a>
                        <a href="" rel="noopener noreferrer" className="capitalize">facebook</a>
                        <a href="" rel="noopener noreferrer" className="capitalize">linkedin</a>
                    </div>
                </div>
            </div>

            <div className="sec_container bg-[#F7F7F7] py-4">
                <div className="grid-main lg:mx-auto">
                    <p className="text-[10px] col-start-1 col-end-8 lg:col-end-4 xl:col-end-5 uppercase mb-1 lg:my-auto">
                        © 2025 S White Granite Pvt. Ltd. All rights reserved.
                    </p>
                    {/* <div className="col-start-1 col-end-12 lg:col-start-4 xl:col-start-5 lg:col-end-8 flex">
                        <a href="/en/privacy-policy" className="!mb-0 mr-4 xl:mr-4 2xl:mr-8 hover:underline">Privacy policy</a>
                        <a href="/en/tgc" className="!mb-0 mr-4 xl:mr-4 2xl:mr-8 hover:underline">Terms &amp; Conditions</a>
                        <a href="/en/imprint" className="!mb-0 mr-4 xl:mr-4 2xl:mr-8 hover:underline">Imprint</a>
                    </div> */}
                    <div className="col-start-1 col-end-13 lg:col-start-9 lg:col-end-13 flex justify-end mt-0 lg:mt-0">
                        {/* <div className="hidden lg:block min-w-[150px] h-[20px] lg:h-[56px] mr-2">
                            <div className="rounded-full w-full h-full flex items-center mr-2 overflow-hidden relative border-[#93A1AF] border-[0.2px]">
                                <label className="sr-only" htmlFor="language-switch">Language</label>
                                <select id="footer-language-switch" className="text-black">
                                    <option>ENGLISH</option>
                                    <option value="0">DEUTSCH</option>
                                    <option value="1">FRANÇAIS</option>
                                </select>
                                <div id="arrow" className="absolute right-4 lg:right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg data-v-498f1ae7="" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path data-v-498f1ae7="" d="M4 6.5L8 10.5L12 6.5" stroke="black" stroke-linecap="round" stroke-linejoin="round">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <a href="https://booking.waldhaus-sils.ch/waldhaus-sils" rel="noopener noreferrer" target="_blank" className="btn primary-normal !w-[97px] mr-2">Book</a>
                        </div> */}
                        <div className="hidden flex-1 group aspect-square cursor-pointer border-[#93A1AF] border-[0.2px] rounded-full lg:max-w-[56px] lg:max-h-[56px] lg:flex items-center justify-center px-3 lg:px-3 lg:py-1">
                            <span>
                                <svg width="12" height="32" viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="group-hover:-translate-y-[3px] transition-all duration-200" d="M5.94336 2.34774L5.94336 26.396" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                    <path d="M5.94336 2.34774L5.94336 26.396" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path className="group-hover:-translate-y-[3px] transition-all duration-200" d="M11 5.99951L6 0.999511L1 5.99951" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
