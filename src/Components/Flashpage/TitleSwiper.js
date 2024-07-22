import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

const TitleSwiper = () => {
  const swiperImages = [
    'https://assets.tatacliq.com/medias/sys_master/images/52240703750174.jpg',
    'https://assets.tatacliq.com/medias/sys_master/images/52240703815710.jpg',
    'https://assets.tatacliq.com/medias/sys_master/images/52240703881246.jpg',
    'https://assets.tatacliq.com/medias/sys_master/images/52240703946782.jpg',
    'https://assets.tatacliq.com/medias/sys_master/images/52240704012318.jpg',
    'https://assets.tatacliq.com/medias/sys_master/images/52240704143390.jpg',
    'https://assets.tatacliq.com/medias/sys_master/images/52240704208926.jpg',
    'https://assets.tatacliq.com/medias/sys_master/images/52240704274462.jpg'
  ];

  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }} 
      loop={true} 

      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]} 
      className="custom-swiper"
    >
      {swiperImages.map((imageUrl, index) => (
        <SwiperSlide key={index}>
          <img src={imageUrl} alt={`banner ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TitleSwiper;
