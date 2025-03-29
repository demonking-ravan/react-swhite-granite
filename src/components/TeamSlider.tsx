import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import teamMembers from "../data/team.json"

export default function TeamSlider() {
    return (
        <Swiper
            className="team-slider"
            modules={[Autoplay]}
            slidesPerView={1}
            // spaceBetween={100}
            centeredSlides={true}
            loop={true}
            // navigation={{
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // }}
            breakpoints={{
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 100
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 60,
                },
                556: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
            }}
            autoplay = {{
                delay: 5000,
                disableOnInteraction: false,
            }}
        >
            {teamMembers.map((member, index) => (
                <SwiperSlide key={index} className="team-slide">
                    <div className="w-3xs h-max card">
                        <p className='font-light mb-2'>{`0${index + 1}. ${member.name}`}</p>
                        <img src={member.imgUrl} alt={`Team Member ${index + 1}`} className="w-full h-78 object-cover filter grayscale" />
                        <p className='font-light mt-2'>{member.designation}</p>
                    </div>
                </SwiperSlide>
            ))}
            {/* <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div> */}
        </Swiper>
    );
};



