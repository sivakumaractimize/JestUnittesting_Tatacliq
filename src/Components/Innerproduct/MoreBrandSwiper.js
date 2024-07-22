import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


import Imports from '../Imports';
const MoreBrandSwiper = () => {
  const data = [
    { img: "https://img.tatacliq.com/images/i17//437Wx649H/MP000000021716478_437Wx649H_202403282108271.jpeg" },
    { img: "https://img.tatacliq.com/images/i16//437Wx649H/MP000000021569171_437Wx649H_202403152152001.jpeg" },
    { img: "https://img.tatacliq.com/images/i8/437Wx649H/MP000000013943082_437Wx649H_202207272256501.jpeg" },
    { img: "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009435915_437Wx649H_202104242059031.jpeg" },
    { img: "https://img.tatacliq.com/images/i18//437Wx649H/MP000000022450738_437Wx649H_202405311856021.jpeg" },
    { img: "https://img.tatacliq.com/images/i18//437Wx649H/MP000000022539730_437Wx649H_202406080816011.jpeg" }
  ];


  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={0}
      loop={true}
      navigation={true}
      pagination={false} 
      modules={[Navigation]}
      className="mySwiper1"
      style={{ width: '100%' }}
      breakpoints={{
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1440: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <Imports.Card sx={{width:{320:"180px",425:"150px", sm:"200px"}}}>
            <Imports.CardMedia
              component="img"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              image={item.img}
              alt={`image-${index}`}
            />
            <Imports.CardContent sx={{ textAlign: 'start' }}>
              <Imports.Typography variant="h6">UTSA</Imports.Typography>
              <Imports.Typography variant="body2">womens products</Imports.Typography>
              <Imports.Typography variant="body2">₹1299</Imports.Typography>
            </Imports.CardContent>
          </Imports.Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MoreBrandSwiper;
