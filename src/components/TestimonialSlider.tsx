import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
    {
        text: "We’ve trusted S WhiteGranite for years, and they consistently deliver top-quality marble and granite for our projects. Their reliable service and premium materials make them our preferred supplier.",
        name: "Maa Durga Enterprises"
    },
    {
        text: "Your S White has been our trusted partner for all our marble and granite needs. Their quality and professionalism have always exceeded expectations, making every project a success.",
        name: "Surendra Kumar Baradiya, Jaipur"
    },
    {
        text: "Working with [Your Company Name] has been an absolute pleasure. Their exquisite marble and granite transformed my space, and their dedication to quality and service truly stands out. Highly recommended!",
        name: "Arbaz Khan, Actor"
    }
]

export default function TestimonialSlider() {
    return (
        <Swiper
            className='mt-12'
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            // autoplay={{ delay: 3000 }}
        >
            {testimonials.map((testimonial) => <SwiperSlide>
                <div className="max-w-2xl text-center mx-auto mb-10">
                    <p>{testimonial.text}</p>
                    <p className="mt-6 font-bold">{testimonial.name}</p>
                </div>
            </SwiperSlide>)}
        </Swiper>
    );
}
