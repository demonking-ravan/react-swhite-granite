import HoverCard from "../components/HoverCard";
import ImageSlider from "../components/ImageSlider";
import SectionTitle from "../components/SectionTitle";
import TestimonialSlider from "../components/TestimonialSlider";
import teamMembers from "../data/team.json";

export default function About() {
    return (
        <>
            <section>
                <div className="animate-it animation-trigger">
                    <div className="grid-main sec_container">
                        <div className="col-span-12 lg:col-span-9 text-block">
                            <div className="richtext">
                                <h1 className="font-serif">About us</h1>
                                <blockquote className="text-justify">
                                    At <span>S White Granite</span>, we’ve been transforming spaces for over 25 years with our premium marble and granite products.
                                    Established as a trusted name in the stone industry, our company has consistently set the standard for <span>quality</span>,
                                    <span> craftsmanship</span>, and <span>reliability</span>. From luxury homes to commercial spaces, we offer a wide variety of marble,
                                    granite, and custom stone solutions that make every project stand out.
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sec_container">
                <div className="grid md:grid-cols-2 md:gap-14 h-max">
                    <div className="w-full max-h-[540px] relative">
                        {/* <img
                            className="w-full h-full object-cover"
                            src="/images/about-us.png"
                            alt="image"
                        /> */}
                        <ImageSlider/>
                        <HoverCard positionStyles="right-[-16px] bottom-[-29px]" />
                    </div>
                    <div className="w-full h-max mt-10 md:mt-0">
                        <div>
                            <SectionTitle text="our story" />
                            <h2 className="sec_heading font-serif mb-6">
                                Exceptional Craftsmanship, <strong
                                >Endless Possibilities</strong>
                            </h2>
                            <p className="mb-2.5">
                                Founded by a team of passionate artisans, designers,
                                and experts in stonecraft, S White Granite began as
                                a small operation and has grown into one of the most
                                respected marble and granite suppliers in the
                                industry. Over the years, our commitment to
                                excellence and innovation has earned us a reputation
                                as the go-to provider for luxury stone in the
                                market.
                            </p>
                            <p className="mb-8">
                                Our extensive experience in the industry allows us
                                to deliver exceptional products and services to our
                                clients. Whether you're looking for sophisticated
                                marble countertops, granite tiles, or bespoke
                                stonework for a commercial project, we have the
                                materials and skills to bring your vision to life.
                            </p>
                        </div>

                        {/* <!-- info block --> */}
                        <div className="flex items-center flex-wrap">
                            <div
                                className="w-full sm:w-auto flex gap-4 items-center px-5"
                            >
                                <div
                                    className="w-16 h-16 rounded-full text-white bg-primary flex [flex-shrink:0] items-center justify-center"
                                >
                                    <svg
                                        className="w-8 h-8"
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ><circle cx="12" cy="12" r="10"
                                    ></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"
                                    ></path><line x1="9" x2="9.01" y1="9" y2="9"
                                    ></line><line
                                        x1="15"
                                        x2="15.01"
                                        y1="9"
                                        y2="9"></line></svg
                                    >
                                </div>
                                <div>
                                    <h4 className="font-primary text-lg">
                                        Happy Clients
                                    </h4>
                                    <h5
                                        className="text-primary text-[40px] font-bold font-serif leading-10 tracking-wide"
                                    >
                                        500+
                                    </h5>
                                </div>
                            </div>

                            <div
                                className="w-full sm:w-auto px-5 sm:border-l border-neutral-500 mt-8 sm:mt-0"
                            >
                                <div>
                                    <h4 className="font-primary text-lg">
                                        Clients Rating
                                    </h4>
                                    <div
                                        className="text-primary flex items-center gap-1.5 mt-2"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 512 512"
                                            height="16px"
                                            width="16px"
                                        ><path
                                            d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"
                                        ></path>
                                        </svg>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 512 512"
                                            height="16px"
                                            width="16px"
                                        ><path
                                            d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"
                                        ></path>
                                        </svg>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 512 512"
                                            height="16px"
                                            width="16px"
                                        ><path
                                            d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"
                                        ></path>
                                        </svg>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 512 512"
                                            height="16px"
                                            width="16px"
                                        ><path
                                            d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"
                                        ></path>
                                        </svg>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 512 512"
                                            height="16px"
                                            width="16px"
                                        ><path
                                            d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"
                                        ></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sec_container">
                <div className="flex flex-col items-center justify-center">
                    <SectionTitle text="our testimonials" />
                    <h2 className="sec_heading font-serif mb-6">
                        What Our <strong
                        >Clients Say</strong>
                    </h2>
                </div>

                <div>
                    <TestimonialSlider />
                </div>
            </section>

            <section className="py-16 lg:py-32 my-0 lg:my-0 bg-black text-white">
                <div className="sec_container">
                    <div>
                        <SectionTitle text="our team" />
                        <h2 className="sec_heading font-serif mb-6">
                            The SWhite <strong
                            >Team</strong>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-12">
                        {
                            teamMembers.map((teamMember) => (
                                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                                    {/* <img className="rounded-lg size-20 object-cover" src={teamMember.imgUrl} alt="Avatar" /> */}

                                    <div className="grow">
                                        <div>
                                            <h3 className="font-medium text-white">
                                                {teamMember.name}
                                            </h3>
                                            <p className="mt-1 text-xs uppercase text-gray-400">
                                                {teamMember.designation}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className="sec_container">
                {/* mission */}
                <div className="pt-10 lg:pt-14">
                    {/* Grid */}
                    <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                        <div>
                            <img className="rounded-xl max-h-[425px] w-full object-cover" src="/images/AGM-Warehouse.jpg" alt="our mission" />
                        </div>
                        {/* End Col */}

                        <div className="mt-5 sm:mt-10 lg:mt-0">
                            <div className="space-y-6 sm:space-y-8">
                                {/* Title */}
                                <div className="space-y-2 md:space-y-4">
                                    <h2 className="sec_heading font-serif">
                                        Our <strong>Mission</strong>
                                    </h2>
                                    <p>
                                        With over 25 years in the industry, our mission
                                        remains the same: to provide premium marble and
                                        granite products that meet the highest standards of
                                        quality and craftsmanship. We are passionate about
                                        delivering elegant, durable, and timeless solutions
                                        that elevate the aesthetic of every space. Guided by
                                        innovation and a commitment to excellence, we ensure
                                        each project is an expression of unparalleled skill and artistry.
                                    </p>
                                </div>
                                {/* End Title */}
                            </div>
                        </div>
                        {/* End Col */}
                    </div>
                    {/* End Grid */}
                </div>

                {/* vision */}
                <div className="pb-10 lg:pb-14 pt-9">
                    {/* Grid */}
                    <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                        <div className="mt-5 sm:mt-10 lg:mt-0">
                            <div className="space-y-6 sm:space-y-8">
                                {/* Title */}
                                <div className="space-y-2 md:space-y-4">
                                    <h2 className="sec_heading font-serif">
                                        Our <strong>Vision</strong>
                                    </h2>
                                    <p>
                                        We are guided and inspired by our vision to be the leading
                                        supplier of marble and granite in the industry. Our goal is
                                        to consistently exceed client expectations by offering a vast
                                        range of high-quality stone products that cater to diverse tastes
                                        and needs. We envision transforming spaces with the beauty and
                                        longevity of our products while maintaining an unwavering
                                        focus on sustainability and responsible sourcing.
                                    </p>
                                </div>
                                {/* End Title */}
                            </div>
                        </div>

                        <div>
                            <img className="rounded-xl max-h-[425px] w-full object-cover" src="/images/vision.jpeg" alt="our mission" />
                        </div>
                    </div>
                    {/* End Grid */}
                </div>
            </section>

            <section className="sec_container">
                <div>
                    <h2 className="sec_heading font-serif mb-6 text-center">
                        Our Strategic <strong>Focus</strong>
                    </h2>
                    <p className="text-center">
                        We’ve built our reputation by focusing on quality,
                        innovation, and customer satisfaction. Our strategic
                        approach includes:
                    </p>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-16"
                >
                    <div
                        className="bg-white hover:bg-secondaryshade duration-200 py-6 px-5 rounded-lg flex items-center flex-col shadow-[0px_0px_59px_0px_rgba(38,62,84,0.06)]"
                    >
                        <img
                            src="/images/wide-range.webp"
                            data-aos="fade-in"
                            alt="Wide range of materials"
                            loading="lazy"
                            width="250"
                            height="250"
                            className="w-16 aos-init aos-animate"
                        />
                        <h3 className="mt-7 mb-3 text-xl font-serif">Wide range of materials</h3>
                        <p className="text-sm text-center opacity-60">
                            From luxurious marble to durable granite, we provide a variety of options to suit every project
                        </p>
                    </div>

                    <div
                        className="bg-white hover:bg-secondaryshade duration-200 py-6 px-5 rounded-lg flex items-center flex-col shadow-[0px_0px_59px_0px_rgba(38,62,84,0.06)]"
                    >
                        <img
                            src="/images/cutting-edge-tech.webp"
                            data-aos="fade-in"
                            alt="Cutting-edge technology"
                            loading="lazy"
                            width="250"
                            height="250"
                            className="w-16 aos-init aos-animate"
                        />
                        <h3 className="mt-7 mb-3 text-xl font-serif">Cutting-edge technology</h3>
                        <p className="text-sm text-center opacity-60">
                            We use the latest machinery to ensure precision in every cut and finish
                        </p>
                    </div>

                    <div
                        className="bg-white hover:bg-secondaryshade duration-200 py-6 px-5 rounded-lg flex items-center flex-col shadow-[0px_0px_59px_0px_rgba(38,62,84,0.06)]"
                    >
                        <img
                            src="/images/sustainable.webp"
                            data-aos="fade-in"
                            alt="Sustainable practices"
                            loading="lazy"
                            width="250"
                            height="250"
                            className="w-16 aos-init aos-animate"
                        />
                        <h3 className="mt-7 mb-3 text-xl font-serif">Sustainable practices</h3>
                        <p className="text-sm text-center opacity-60">
                            We prioritize eco-friendly sourcing and production processes, ensuring our materials have a minimal environmental impact
                        </p>
                    </div>

                    <div
                        className="bg-white hover:bg-secondaryshade duration-200 py-6 px-5 rounded-lg flex items-center flex-col shadow-[0px_0px_59px_0px_rgba(38,62,84,0.06)]"
                    >
                        <img
                            src="/images/expert.webp"
                            data-aos="fade-in"
                            alt="Expert craftsmanship"
                            loading="lazy"
                            width="250"
                            height="250"
                            className="w-16 aos-init aos-animate"
                        />
                        <h3 className="mt-7 mb-3 text-xl font-serif">Expert craftsmanship</h3>
                        <p className="text-sm text-center opacity-60">
                            Our team of skilled artisans brings decades of experience to every project, ensuring impeccable results
                        </p>
                    </div>

                </div>
            </section>
        </>
    )
}
