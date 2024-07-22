import { Grid } from '@mui/material';
import React from 'react';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


const ResponsiveViewImages = ({ imgUrls }) => {
    

    const getImageStyle = () => ({
        width: '60%',
        height: 'auto',
        display: 'block',
        margin: '0 auto'
    });

    return (
        <>
            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item xs={12} sx={{ ml: 0, display: 'flex', justifyContent: 'center' }}>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={0}
                        freeMode={true}
                        pagination={false}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                           
                        }}
                    >
                        {Array.isArray(imgUrls) && imgUrls.map((imgUrl, index) => (
                            <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img
                                    src={imgUrl}
                                    alt={`Slide ${index}`}
                                    style={getImageStyle()}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Grid>
            </Grid>
        </>
    );
};

export default ResponsiveViewImages;
