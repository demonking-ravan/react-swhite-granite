import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const images = [
    "/images/slider1.png",
    "/images/slider2.png",
    "/images/slider3.png",
    "/images/about-us.png"
]

export default function ImageSlider() {
    return (
        <Swiper
            className='h-full max-md:w-[calc(100vw-clamp(1.5rem,calc(3.57143vw+1.14286px),3.5rem)*2)]'
            modules={[Autoplay]}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
        >
            {images.map((img) => <SwiperSlide>
                <img className='w-full h-full object-cover' src={img} alt="slider image" />
            </SwiperSlide>)}
        </Swiper>
    );
}
