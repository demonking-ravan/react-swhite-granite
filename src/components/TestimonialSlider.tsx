import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const testimonials = [
    {
        text: "We’ve trusted S White Granite for years, and they consistently deliver top-quality marble and granite for our projects. Their reliable service and premium materials make them our preferred supplier.",
        name: "Maa Durga Enterprises"
    },
    {
        text: "Your S White has been our trusted partner for all our marble and granite needs. Their quality and professionalism have always exceeded expectations, making every project a success.",
        name: "Surendra Kumar Baradiya",
        place: "Jaipur",
    },
    {
        text: "Working with S White Granite has been an absolute pleasure. Their exquisite marble and granite transformed my space, and their dedication to quality and service truly stands out. Highly recommended!",
        name: "Arbaz Khan",
        designation: "Actor"
    }
]

export default function TestimonialSlider() {
    return (
        <Swiper
            className='mt-6'
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
        >
            {testimonials.map((testimonial) => <SwiperSlide>
                {/* Testimonials */}
                <div className="relative max-w-[85rem] pb-14 mx-auto">
                    {/* Blockquote */}
                    <blockquote className="text-center lg:mx-auto lg:w-3/5">

                        <div className="mt-6 lg:mt-10">
                            <p className="relative text-xl sm:text-2xl md:text-3xl md:leading-normal font-medium text-gray-800">
                                <svg className="absolute top-0 start-0 transform -translate-y-8 size-16 text-gray-200 sm:h-24 sm:w-24" width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M7.18079 9.25611C7.18079 10.0101 6.93759 10.6211 6.45119 11.0891C5.96479 11.5311 5.35039 11.7521 4.60799 11.7521C3.71199 11.7521 2.96958 11.4531 2.38078 10.8551C1.81758 10.2571 1.53598 9.39911 1.53598 8.28111C1.53598 7.08511 1.86878 5.91511 2.53438 4.77111C3.22559 3.60111 4.18559 2.67811 5.41439 2.00211L6.29759 3.36711C5.63199 3.83511 5.09439 4.35511 4.68479 4.92711C4.30079 5.49911 4.04479 6.16211 3.91679 6.91611C4.14719 6.81211 4.41599 6.76011 4.72319 6.76011C5.43999 6.76011 6.02879 6.99411 6.48959 7.46211C6.95039 7.93011 7.18079 8.52811 7.18079 9.25611ZM14.2464 9.25611C14.2464 10.0101 14.0032 10.6211 13.5168 11.0891C13.0304 11.5311 12.416 11.7521 11.6736 11.7521C10.7776 11.7521 10.0352 11.4531 9.44639 10.8551C8.88319 10.2571 8.60159 9.39911 8.60159 8.28111C8.60159 7.08511 8.93439 5.91511 9.59999 4.77111C10.2912 3.60111 11.2512 2.67811 12.48 2.00211L13.3632 3.36711C12.6976 3.83511 12.16 4.35511 11.7504 4.92711C11.3664 5.49911 11.1104 6.16211 10.9824 6.91611C11.2128 6.81211 11.4816 6.76011 11.7888 6.76011C12.5056 6.76011 13.0944 6.99411 13.5552 7.46211C14.016 7.93011 14.2464 8.52811 14.2464 9.25611Z" fill="currentColor" />
                                </svg>
                                <span className="relative z-10 italic text-gray-800">{testimonial.text}</span>
                            </p>
                        </div>

                        <footer className="mt-6">
                            <div className="font-semibold text-gray-800">{testimonial.name}</div>
                            {testimonial.designation && <div className="text-sm ">{testimonial.designation}</div>}
                            {testimonial.place && <div className="text-sm">{testimonial.place}</div>}
                        </footer>
                    </blockquote>
                    {/* End Blockquote */}
                </div>
                {/* End Testimonials */}
            </SwiperSlide>)}
        </Swiper>
    );
}
