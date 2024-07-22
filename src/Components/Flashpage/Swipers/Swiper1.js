import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {  Navigation } from 'swiper/modules';

import { useMediaQuery } from '@mui/material';

import Imports from '../../Imports';
const Swiper1 = ({images}) => {
 
  const isXs = useMediaQuery('(max-width:640px)');
  const isSm = useMediaQuery('(min-width:641px) and (max-width:768px)');
  const isMd = useMediaQuery('(min-width:769px) and (max-width:1024px)');
  
  const getImgWidth = () => {
    if (isXs) return '100px'; 
    if (isSm) return '150px'; 
    if (isMd) return '200px'; 
    return '290px'; 
  };

  return (
    <Imports.Grid container justifyContent="center"  sx={{ mt:{xs:1,sm:5, md:10} }}>
      <Imports.Grid item xs={10}>
        <Swiper
          slidesPerView={1}
          spaceBetween={-20}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="swiper1"
          breakpoints={{
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              425: {
                slidesPerView: 3,
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
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="slide-content" style={{ backgroundColor: 'rgb(236,236,236)' }}>
                <img src={image.src} alt={image.alt} style={{ width: getImgWidth() }} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Imports.Grid>
    </Imports.Grid>
  );
}

export default Swiper1;
