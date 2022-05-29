import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slide = () => {
    return (
        <Swiper
            className="mySwiper"
            // install Swiper modules
            modules={[Pagination]}
            effect={'fade'}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <img src="/images/group_detail_img.png" alt="slide" />
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    );
};

export default Slide;
