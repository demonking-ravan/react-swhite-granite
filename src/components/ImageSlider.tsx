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
            className='h-full'
            modules={[Autoplay]}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
        >
            {images.map((img) => <SwiperSlide>
                <img src={img} alt="slider image" />
            </SwiperSlide>)}
        </Swiper>
    );
}
