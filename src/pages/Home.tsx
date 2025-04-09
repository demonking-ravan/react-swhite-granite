import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";

export default function Home() {
    return (
        <>
            <section className="relative !mt-0 pt-0">
                <div className="sec_container relative fade-in-bottom-slow">
                    <video playsInline autoPlay loop muted id="fullScreenVideo" className="w-full video object-cover">
                        <source src="/assets/hero.mp4" type="video/mp4"></source>
                    </video>
                    {/* <div className="play-button absolute">
            <span className="mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" fill="none" className="mr-1">
                <path fill="#fff" d="M9 8 .75 15.794V.206L9 8Z"></path>
              </svg>
            </span>
            PLAY
          </div> */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                        <p className="uppercase text-white text-[10px] font-[461]">SWhite Granite</p>
                        <hr className="border-l-[1px] border-t-0 h-5 border-white w-[1px] mx-auto mt-1"></hr>
                    </div>
                    {/* <video playsInline autoPlay loop muted className="w-full h-[calc(100dvh-(100px)-(theme(grid.gridXMargin)))] flex md:hidden">
            <source src="https://cdn.sanity.io/files/534owa5g/production/fc64899153f84c56a571a99c2e54a49a954e18d4.mp4" type="video/mp4"></source>
          </video> */}
                </div>
            </section>

            <section >
                <div
                    className="sec_container flex w-full origin-top flex-col items-center justify-center"
                    style={{ background: "black", color: "white" }}
                >
                    <div className="flex items-center flex-col px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                        <SectionTitle text="our collections" />
                        <h2 className="sec_heading font-serif mb-6">
                            Explore our premium <strong
                            >Collections</strong>
                        </h2>
                    </div>

                    {/* Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 pb-14 lg:pb-18">
                        {/* Card */}
                        <Link
                            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-hidden focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5"
                            to="/products"
                        >
                            <div className="h-80">
                                <img className="w-full h-full object-cover rounded-xl" src="/images/products/bianca-oro.jpg" alt="Blog Image" />
                            </div>
                            <div className="my-6">
                                <h3 className="text-xl lg:text-2xl font-semibold">
                                    White Collection
                                </h3>
                                {/* <p className="mt-5 text-gray-600">
                                    At Wake, our mission has always been focused on bringing openness.
                                </p> */}
                            </div>
                            <div>
                                <h5 className="text-sm hover:border-b-2 border-white transition-all w-max">View Collection</h5>
                            </div>
                        </Link>
                        {/* End Card */}


                        {/* Card */}
                        <Link
                            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-hidden focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5"
                            to="/products"
                        >
                            <div className="h-80">
                                <img className="w-full h-full object-cover rounded-xl" src="/images/products/noir-st-laurent.jpg" alt="Blog Image" />
                            </div>
                            <div className="my-6">
                                <h3 className="text-xl lg:text-2xl font-semibold">
                                    Colored Collection
                                </h3>
                                {/* <p className="mt-5 text-gray-600">
                                    Are you an accountant? Are you a company formation advisor?
                                </p> */}
                            </div>
                            <div>
                                <h5 className="text-sm hover:border-b-2 border-white transition-all w-max">View Collection</h5>
                            </div>
                        </Link>
                        {/* End Card */}
                    </div>
                    {/* End Grid */}
                </div>
            </section>

            <section>
                <div className="relative sec_container">
                    <div
                        className=" flex w-full origin-top flex-col items-center justify-center px-4"
                        // style={{ height: "max-content", background: "#F7F7F7" }}
                    >
                        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                            {/* Grid */}
                            <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
                                <div className="lg:col-span-7">
                                    {/* Grid */}
                                    <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10 max-h-[500px]">
                                        <div className="col-span-4">
                                            <img className="rounded-xl" src="/images/expertise2.png" alt="Features Image" />
                                        </div>
                                        {/* End Col */}

                                        <div className="col-span-3">
                                            <img className="rounded-xl aspect-2/3 object-cover" src="/images/expertise1.png" alt="Features Image" />
                                        </div>
                                        {/* End Col */}

                                        <div className="col-span-5">
                                            <img className="rounded-xl aspect-2/3 object-cover" src="/images/expertise3.jpg" alt="Features Image" />
                                        </div>
                                        {/* End Col */}
                                    </div>
                                    {/* End Grid */}
                                </div>
                                {/* End Col */}

                                <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
                                    <div className="">
                                        {/* Title */}
                                        <div className="flex flex-col gap-4.5">
                                            <h2 className="sec_heading font-serif">
                                                Industry Expertise <strong>You Can Trust</strong>
                                            </h2>
                                            <p>
                                                At S White Granite, we believe that every architectural project deserves a personalized touch.
                                                Architects and designers can rely on our team’s deep industry expertise to create innovative,
                                                tailored solutions that bring their visions to life. Whether it's a large-scale commercial
                                                development or a private luxury space, we are dedicated to customizing our products to meet
                                                the specific needs and aspirations of every client.
                                            </p>
                                            <Link className="p-6 text-[10px] bg-primary text-white uppercase rounded-sm w-max hover:bg-[#222]" to="/about">Learn More</Link>
                                        </div>
                                        {/* End Title */}
                                    </div>
                                </div>
                                {/* End Col */}
                            </div>
                            {/* End Grid */}
                        </div>
                        {/* End Features */}
                    </div>
                </div>
            </section>

            <section className="sec_container relative">
                <div
                    className=" flex w-full origin-top flex-col items-center justify-center px-4"
                    style={{ background: "white", color: "black" }}
                >
                    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                        {/* Grid */}
                        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center lg:justify-between">
                            <div className="lg:col-span-5 lg:col-start-1">
                                {/* Title */}
                                <div className="mb-8">
                                    <h2 className="sec_heading font-serif">
                                        Director’s <strong>Message</strong>
                                    </h2>
                                    {/* <p className="text-gray-600">
                                            We provide you with a test account that can be set up in seconds. Our main focus is getting responses to you as soon as we can.
                                        </p> */}
                                </div>
                                {/* End Title */}

                                {/* Blockquote */}
                                <blockquote className="relative">
                                    <svg className="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 size-16 text-gray-200" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor" />
                                    </svg>

                                    <div className="relative z-10">
                                        <p className="text-xl italic text-gray-800">
                                            Success is built on the foundation of trust, dedication, and hard work. Over the years,
                                            we have earned the trust of our clients by always delivering the highest quality marble
                                            and granite, and we will continue to uphold these values in every project we take on.
                                        </p>
                                    </div>

                                    <div className="mt-6">
                                        <div className="flex items-center gap-x-4">
                                            <div className="shrink-0">
                                                <img className="size-8 rounded-full" src="/images/team/jagdish-prasad-sahu.jpg" alt="Avatar" />
                                            </div>
                                            <div className="grow">
                                                <div className="font-semibold text-sm text-gray-800">Jagdish Prasad Sahu</div>
                                                <div className="nav-link">Director | S White</div>
                                            </div>
                                        </div>
                                    </div>
                                </blockquote>
                                {/* End Blockquote */}
                            </div>
                            {/* End Col */}

                            <div className="mt-10 lg:mt-0 lg:col-span-6 lg:col-end-13">
                                <div className="space-y-6 sm:space-y-8">
                                    {/* List */}
                                    <ul className="grid grid-cols-2 divide-y-2 divide-x-2 divide-gray-200 overflow-hidden">
                                        <li className="flex flex-col -m-0.5 p-4 sm:p-8">
                                            <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2">
                                                25+
                                            </div>
                                            <p className="text-sm sm:text-base text-gray-600">
                                                years - of industry expertise
                                            </p>
                                        </li>

                                        <li className="flex flex-col -m-0.5 p-4 sm:p-8">
                                            <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2">
                                                {/* <svg className="shrink-0 size-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg> */}
                                                500+
                                            </div>
                                            <p className="text-sm sm:text-base text-gray-600">
                                                clients
                                            </p>
                                        </li>

                                        <li className="flex flex-col -m-0.5 p-4 sm:p-8">
                                            <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2">
                                                {/* <svg className="shrink-0 size-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg> */}
                                                100%
                                            </div>
                                            <p className="text-sm sm:text-base text-gray-600">
                                                customer satisfaction
                                            </p>
                                        </li>

                                        <li className="flex flex-col -m-0.5 p-4 sm:p-8">
                                            <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2">
                                                50+
                                            </div>
                                            <p className="text-sm sm:text-base text-gray-600">
                                                professional team members
                                            </p>
                                        </li>
                                    </ul>
                                    {/* End List */}
                                </div>
                            </div>
                            {/* End Col */}
                        </div>
                        {/* End Grid */}
                    </div>
                </div>
            </section>
        </>
    )
}
