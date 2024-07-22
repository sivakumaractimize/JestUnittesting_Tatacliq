import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import Imports from '../Imports';
const RecentlyViewSwiper = () => {
  const data = [
    { img: "https://img.tatacliq.com/images/i17//437Wx649H/MP000000021744568_437Wx649H_202403300016301.jpeg" },
    { img: "https://img.tatacliq.com/images/i13/437Wx649H/MP000000018962190_437Wx649H_202308291251021.jpeg" },
    { img: "https://img.tatacliq.com/images/i16//437Wx649H/MP000000021492360_437Wx649H_202403082121231.jpeg" },
    { img: "https://img.tatacliq.com/images/i17//437Wx649H/MP000000021850565_437Wx649H_202404070248491.jpeg" },
    { img: "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009110224_437Wx649H_202103182004561.jpeg" },
    { img: "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019431689_437Wx649H_202310010806351.jpeg" }
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
          }
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

export default RecentlyViewSwiper;
