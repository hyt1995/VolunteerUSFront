import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slide = () => {
    return (
        <Swiper
            className="mySwiper"
            // install Swiper modules
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    );
};

export default Slide;
