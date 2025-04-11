import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer id="footer" className="flex flex-col items-center w-full bg-black pt-6 relative z-[3]">
            <div className="sec_container mx-auto pt-6 pb-2 lg:py-6 text-white">
                <div className="grid-main">
                    <div className="col-start-1 col-end-13 md:col-end-5 flex justify-center md:justify-start">
                        <Link to="/home" className="font-serif text-2xl font-bold text-gray-800 hover">
                            <img className='h-auto max-w-2xs' src="/logo-white.png" alt="logo" />
                        </Link>
                    </div>

                    <div className="col-start-1 col-end-6 md:col-start-5 md:col-end-9 flex flex-col justify-center mt-6 md:mt-0">
                        <p className="font-bold uppercase mb-1">Call us now</p>
                        <div className="flex flex-wrap gap-1">
                            <a href="tel:9414012234" className="font-light mb-0 group">
                                <div className='overflow-hidden relative w-fit'>
                                    <div className='group-hover:-translate-y-[101%] transition-all duration-700 inline-block'>
                                        <p className="font-light [font-size:clamp(1.125rem,18px,1.125rem)] [line-height:clamp(1.46875rem,calc(.50223vw_+_20.28571px),1.75rem)]">
                                            9414012234,
                                        </p>
                                    </div>
                                    <div aria-hidden={true} className='absolute left-0 group-hover:translate-y-[0] translate-y-[101%] top-0 transition-all duration-700'>
                                        <p className="font-light [font-size:clamp(1.125rem,18px,1.125rem)] [line-height:clamp(1.46875rem,calc(.50223vw_+_20.28571px),1.75rem)]">
                                            9414012234,
                                        </p>
                                    </div>
                                </div>
                            </a>  
                            <a href="tel:8890044922" className="font-light mb-0 group">
                                <div className='overflow-hidden relative w-fit'>
                                    <div className='group-hover:-translate-y-[101%] transition-all duration-700 inline-block'>
                                        <p className="font-light [font-size:clamp(1.125rem,18px,1.125rem)] [line-height:clamp(1.46875rem,calc(.50223vw_+_20.28571px),1.75rem)]">
                                            8890044922
                                        </p>
                                    </div>
                                    <div aria-hidden={true} className='absolute left-0 group-hover:translate-y-[0] translate-y-[101%] top-0 transition-all duration-700'>
                                        <p className="font-light [font-size:clamp(1.125rem,18px,1.125rem)] [line-height:clamp(1.46875rem,calc(.50223vw_+_20.28571px),1.75rem)]">
                                            8890044922
                                        </p>
                                    </div>
                                </div>
                            </a> 
                        </div> 
                    </div>

                    <div className="col-start-7 md:col-start-9 col-end-13 flex flex-col justify-center mt-6 md:mt-0">
                        <p className="font-bold uppercase mb-1">Email us</p>
                        <a className="mb-0 group" href="mailto:swhitegranite11@gmail.com">
                            <div className='overflow-hidden relative w-fit'>
                                <div className='group-hover:-translate-y-[101%] transition-all duration-700 flex flex-wrap'>
                                    <span className="font-light [font-size:clamp(1.125rem,18px,1.125rem)] [line-height:clamp(1.46875rem,calc(.50223vw_+_20.28571px),1.75rem)]">
                                        swhitegranite11
                                    </span>
                                    <span className="font-light [font-size:clamp(1.125rem,18px,1.125rem)] [line-height:clamp(1.46875rem,calc(.50223vw_+_20.28571px),1.75rem)]">@gmail.com</span>
                                </div>
                                <div aria-hidden={true} className='absolute left-0 group-hover:translate-y-[0] translate-y-[101%] top-0 transition-all duration-700 flex flex-wrap'>
                                    <span className="font-light [font-size:clamp(1.125rem,18px,1.125rem)] [line-height:clamp(1.46875rem,calc(.50223vw_+_20.28571px),1.75rem)]">
                                        swhitegranite11
                                    </span>
                                    <span className="font-light [font-size:clamp(1.125rem,18px,1.125rem)] [line-height:clamp(1.46875rem,calc(.50223vw_+_20.28571px),1.75rem)]">@gmail.com</span>
                                </div>
                            </div>
                        </a>
                        {/* <p className="font-light">13.12.2024 - 22.04.2025</p> */}
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
                            <a href="https://maps.app.goo.gl/Y77Aj9tXcYwK3daz6" className="not-italic inline-flex items-center no-underline arrow-wrapper">
                                <span className="link-after arrowLink">
                                    Getting here
                                    <div className="link-container">
                                        <span className="inline-grid init-arrow w-full h-full">
                                            <svg fill="none" viewBox="0 0 41 41" stroke="currentColor" className="inline-grid init-arrow w-full h-full">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M38.741 2.258 1.967 39.032M39.468 39.274V1.532H1.727"></path>
                                            </svg>
                                        </span>
                                        <span className="inline-grid hover-arrow w-full h-full">
                                            <svg fill="none" viewBox="0 0 41 41" stroke="currentColor" className="inline-grid hover-arrow w-full h-full">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M38.741 2.258 1.967 39.032M39.468 39.274V1.532H1.727"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="col-start-1 col-end-6 md:col-start-4 md:col-end-6 lg:col-start-5 lg:col-end-7 mt-6">
                        <ul className="">
                            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
                            <li><Link to="/about" className="hover:text-gray-400">About us</Link></li>
                            <li><Link to="/products" className="hover:text-gray-400">Products</Link></li>
                        </ul>
                    </div>

                    <div className="col-start-6 col-end-13 md:col-start-6 md:col-end-8 lg:col-start-7 lg:col-end-9 mt-6">
                        <ul className="">
                            <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
                            <li><Link to="/blogs" className="hover:text-gray-400">Blog</Link></li>
                        </ul>
                    </div>

                    <div className="col-start-1 col-end-6 md:col-start-8 md:col-end-11 lg:col-start-9 lg:col-end-12 mt-6">
                        <a href="#" rel="noopener noreferrer" className="group">
                            <div className="mr-2">
                                <svg
                                    data-icon="true"
                                    className="relative z-10 transition duration-300 w-5 h-5 group-hover:fill-gray-500 fill-white"
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <g clip-path="url(#clip0_1299_11302)">
                                        <rect
                                        width="25"
                                        height="25"
                                        fill-opacity="0.02"></rect>
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M0.5 12.567C0.5 18.533 4.833 23.494 10.5 24.5V15.833H7.5V12.5H10.5V9.833C10.5 6.833 12.433 5.167 15.167 5.167C16.033 5.167 16.967 5.3 17.833 5.433V8.5H16.3C14.833 8.5 14.5 9.233 14.5 10.167V12.5H17.7L17.167 15.833H14.5V24.5C20.167 23.494 24.5 18.534 24.5 12.567C24.5 5.93 19.1 0.5 12.5 0.5C5.9 0.5 0.5 5.93 0.5 12.567Z"
                                        ></path>
                                    </g>
                                    <defs>
                                        <linearGradient
                                        id="paint0_linear_1299_11302"
                                        x1="12.5"
                                        y1="0"
                                        x2="12.5"
                                        y2="25"
                                        gradientUnits="userSpaceOnUse"
                                        >
                                        <stop stop-color="white"></stop>
                                        <stop offset="1" stop-color="white" stop-opacity="0"
                                        ></stop>
                                        </linearGradient>
                                        <clipPath id="clip0_1299_11302">
                                        <rect width="25" height="25" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className='overflow-hidden relative w-fit group'>
                                <p className='nav-link group-hover:-translate-y-[101%] transition-all duration-700 inline-block capitalize'>Facebook</p>
                                <p aria-hidden={true} className='nav-link absolute left-0 group-hover:translate-y-[0] translate-y-[101%] top-0 transition-all duration-700 capitalize' >Facebook</p>
                            </div>
                        </a>
                        <a href="#" rel="noopener noreferrer" className="group">
                            <div className="mr-2">
                                <svg
                                    data-icon="true"
                                    className="relative z-10 transition duration-300 w-5 h-5 group-hover:fill-gray-500 fill-white"
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M13.5682 2.08008C14.74 2.0832 15.3348 2.08945 15.8484 2.10404L16.0505 2.11133C16.2838 2.11966 16.514 2.13008 16.7921 2.14258C17.9005 2.19466 18.6567 2.36966 19.3203 2.62695C20.0078 2.89154 20.5869 3.24987 21.1661 3.82799C21.696 4.34855 22.1059 4.97849 22.3671 5.67383C22.6244 6.33737 22.7994 7.09362 22.8515 8.20299C22.864 8.48008 22.8744 8.71029 22.8828 8.94466L22.889 9.14674C22.9046 9.65924 22.9109 10.254 22.913 11.4259L22.914 12.203V13.5676C22.9165 14.3274 22.9086 15.0872 22.89 15.8467L22.8838 16.0488C22.8755 16.2832 22.865 16.5134 22.8525 16.7905C22.8005 17.8999 22.6234 18.6551 22.3671 19.3197C22.1059 20.015 21.696 20.6449 21.1661 21.1655C20.6455 21.6954 20.0156 22.1053 19.3203 22.3665C18.6567 22.6238 17.9005 22.7988 16.7921 22.8509L16.0505 22.8822L15.8484 22.8884C15.3348 22.903 14.74 22.9103 13.5682 22.9124L12.7911 22.9134H11.4275C10.6674 22.9161 9.90726 22.9081 9.14734 22.8895L8.94525 22.8832C8.69797 22.8738 8.45075 22.8631 8.20359 22.8509C7.09525 22.7988 6.339 22.6238 5.67442 22.3665C4.97945 22.1051 4.34988 21.6953 3.82963 21.1655C3.29936 20.645 2.88912 20.0151 2.62755 19.3197C2.37025 18.6561 2.19525 17.8999 2.14317 16.7905L2.11192 16.0488L2.10671 15.8467C2.08751 15.0872 2.07883 14.3274 2.08067 13.5676V11.4259C2.07779 10.6661 2.08543 9.90632 2.10359 9.14674L2.11088 8.94466C2.11921 8.71029 2.12963 8.48008 2.14213 8.20299C2.19421 7.09362 2.36921 6.33841 2.6265 5.67383C2.88869 4.9782 3.29965 4.34824 3.83067 3.82799C4.35062 3.29836 4.97982 2.88849 5.67442 2.62695C6.339 2.36966 7.09421 2.19466 8.20359 2.14258C8.48067 2.13008 8.71192 2.11966 8.94525 2.11133L9.14734 2.10508C9.90691 2.08657 10.6667 2.07858 11.4265 2.08112L13.5682 2.08008ZM12.4973 7.28841C11.116 7.28841 9.79124 7.83714 8.81449 8.8139C7.83774 9.79065 7.289 11.1154 7.289 12.4967C7.289 13.8781 7.83774 15.2028 8.81449 16.1796C9.79124 17.1563 11.116 17.7051 12.4973 17.7051C13.8787 17.7051 15.2034 17.1563 16.1802 16.1796C17.1569 15.2028 17.7057 13.8781 17.7057 12.4967C17.7057 11.1154 17.1569 9.79065 16.1802 8.8139C15.2034 7.83714 13.8787 7.28841 12.4973 7.28841ZM12.4973 9.37174C12.9077 9.37168 13.3141 9.45244 13.6933 9.60942C14.0724 9.7664 14.417 9.99653 14.7072 10.2867C14.9974 10.5768 15.2277 10.9213 15.3848 11.3004C15.5419 11.6795 15.6228 12.0858 15.6229 12.4962C15.6229 12.9066 15.5422 13.313 15.3852 13.6921C15.2282 14.0713 14.9981 14.4159 14.7079 14.7061C14.4178 14.9963 14.0733 15.2266 13.6942 15.3837C13.3151 15.5408 12.9088 15.6217 12.4984 15.6217C11.6696 15.6217 10.8747 15.2925 10.2887 14.7065C9.70262 14.1204 9.37338 13.3255 9.37338 12.4967C9.37338 11.6679 9.70262 10.8731 10.2887 10.287C10.8747 9.70098 11.6696 9.37174 12.4984 9.37174M17.9671 5.72591C17.6218 5.72591 17.2906 5.86309 17.0464 6.10728C16.8022 6.35147 16.665 6.68266 16.665 7.02799C16.665 7.37333 16.8022 7.70452 17.0464 7.94871C17.2906 8.19289 17.6218 8.33008 17.9671 8.33008C18.3125 8.33008 18.6437 8.19289 18.8878 7.94871C19.132 7.70452 19.2692 7.37333 19.2692 7.02799C19.2692 6.68266 19.132 6.35147 18.8878 6.10728C18.6437 5.86309 18.3125 5.72591 17.9671 5.72591Z"
                                    >
                                    </path>
                                </svg>
                            </div>
                            <div className='overflow-hidden relative w-fit group'>
                                <p className='nav-link group-hover:-translate-y-[101%] transition-all duration-700 inline-block capitalize'>Instagram</p>
                                <p aria-hidden={true} className='nav-link absolute left-0 group-hover:translate-y-[0] translate-y-[101%] top-0 transition-all duration-700 capitalize' >Instagram</p>
                            </div>
                        </a>
                        <a href="#" rel="noopener noreferrer" className="group">
                            <div className="mr-2">
                                <svg
                                    data-icon="true"
                                    className="relative z-10 transition duration-300 w-5 h-5 group-hover:fill-gray-500 fill-white"
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <rect
                                        width="25"
                                        height="25"
                                        fill="url(#paint0_linear_1299_11300)"
                                        fill-opacity="0.02"></rect>
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M1.5 3.338C1.5 2.85053 1.69365 2.38303 2.03834 2.03834C2.38303 1.69365 2.85053 1.5 3.338 1.5H21.66C21.9016 1.49961 22.1409 1.54687 22.3641 1.63907C22.5874 1.73127 22.7903 1.86661 22.9612 2.03734C23.1322 2.20807 23.2677 2.41083 23.3602 2.63401C23.4526 2.8572 23.5001 3.09643 23.5 3.338V21.66C23.5003 21.9016 23.4529 22.1409 23.3606 22.3642C23.2683 22.5875 23.1328 22.7904 22.962 22.9613C22.7912 23.1322 22.5884 23.2678 22.3651 23.3602C22.1419 23.4526 21.9026 23.5001 21.661 23.5H3.338C3.09655 23.5 2.85746 23.4524 2.6344 23.36C2.41134 23.2676 2.20867 23.1321 2.03798 22.9613C1.8673 22.7905 1.73193 22.5878 1.63962 22.3647C1.54731 22.1416 1.49987 21.9025 1.5 21.661V3.338ZM10.208 9.888H13.187V11.384C13.617 10.524 14.717 9.75 16.37 9.75C19.539 9.75 20.29 11.463 20.29 14.606V20.428H17.083V15.322C17.083 13.532 16.653 12.522 15.561 12.522C14.046 12.522 13.416 13.611 13.416 15.322V20.428H10.208V9.888ZM4.708 20.291H7.916V9.75H4.708V20.29V20.291ZM8.375 6.312C8.38105 6.58667 8.33217 6.85979 8.23124 7.11532C8.13031 7.37084 7.97935 7.60364 7.78723 7.80003C7.59511 7.99643 7.3657 8.15248 7.11246 8.25901C6.85921 8.36554 6.58724 8.42042 6.3125 8.42042C6.03776 8.42042 5.76579 8.36554 5.51255 8.25901C5.2593 8.15248 5.02989 7.99643 4.83777 7.80003C4.64565 7.60364 4.49469 7.37084 4.39376 7.11532C4.29283 6.85979 4.24395 6.58667 4.25 6.312C4.26187 5.77286 4.48439 5.25979 4.86989 4.88269C5.25539 4.50558 5.77322 4.29442 6.3125 4.29442C6.85178 4.29442 7.36961 4.50558 7.75512 4.88269C8.14062 5.25979 8.36313 5.77286 8.375 6.312V6.312Z"
                                    ></path>
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_1299_11300"
                                            x1="12.5"
                                            y1="0"
                                            x2="12.5"
                                            y2="25"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="white"></stop>
                                            <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className='overflow-hidden relative w-fit group'>
                                <p className='nav-link group-hover:-translate-y-[101%] transition-all duration-700 inline-block capitalize'>Linkedin</p>
                                <p aria-hidden={true} className='nav-link absolute left-0 group-hover:translate-y-[0] translate-y-[101%] top-0 transition-all duration-700 capitalize' >Linkedin</p>
                            </div>
                        </a>
                    </div>

                    <div className="col-start-6 col-end-12 md:col-start-11 md:col-end-13 lg:col-start-12 lg:col-end-13 mt-6">
                        <a 
                            className="p-4 bg-white hover:bg-gray-300 text-black uppercase rounded-sm float-end" 
                            href="/assets/s-white-catalog_compressed.pdf" 
                            download="s-white-catalog.pdf"
                            >
                            Download Brochure
                        </a>
                    </div>
                </div>
            </div>

            <div className="sec_container bg-[#0a0a0a] text-white py-4">
                <div className="text-center lg:mx-auto">
                    <p className="text-[10px] uppercase mb-1 ">
                        © 2025 S White Granite Pvt. Ltd. All rights reserved.
                    </p>
                    {/* <div className="col-start-1 col-end-12 lg:col-start-4 xl:col-start-5 lg:col-end-8 flex">
                        <a href="/en/privacy-policy" className="!mb-0 mr-4 xl:mr-4 2xl:mr-8 hover:underline">Privacy policy</a>
                        <a href="/en/tgc" className="!mb-0 mr-4 xl:mr-4 2xl:mr-8 hover:underline">Terms &amp; Conditions</a>
                        <a href="/en/imprint" className="!mb-0 mr-4 xl:mr-4 2xl:mr-8 hover:underline">Imprint</a>
                    </div> */}
                    {/* <div className="col-start-1 col-end-13 lg:col-start-9 lg:col-end-13 flex justify-end mt-0 lg:mt-0">
                        <div className="hidden lg:block min-w-[150px] h-[20px] lg:h-[56px] mr-2">
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
                        </div>
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
                    </div> */}
                </div>
            </div>
        </footer>
    )
}
