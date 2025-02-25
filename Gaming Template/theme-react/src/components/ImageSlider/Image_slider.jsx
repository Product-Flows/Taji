import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Correct import for Swiper 8+

const ImageSlider = ({ screens }) => {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1} // Default 1 image per view on mobile
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                breakpoints={{
                    640: { // Mobile - 1 image per slide
                        slidesPerView: 1,
                    },
                    1024: { // Tablet and laptop - 2 images per slide
                        slidesPerView: 3,
                    },
                }}
                className="mySwiper"
            >
                {screens?.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={image}
                            alt={`Gamezone Screenshot ${index + 1}`}
                            className="w-full h-auto rounded-lg"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

// Example Usage
const Image_slider = ({ screens }) => {

    return (
        <div className="p-4">
            <ImageSlider screens={screens} />
        </div>
    );
};

export default Image_slider;
