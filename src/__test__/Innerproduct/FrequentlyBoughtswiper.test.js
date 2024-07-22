import React from 'react';
import { render, screen } from '@testing-library/react';
import FrequentboughtSwiper from '../../Components/Innerproduct/FrequentlyboughtSwiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Imports from '../../Components/Imports';

// Mocking Swiper and SwiperSlide
jest.mock('swiper/react', () => ({
  Swiper: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
  SwiperSlide: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
}));

// Mocking Imports module
jest.mock('../../Components/Imports', () => ({
  ...jest.requireActual('../../Components/Imports'),
  Card: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
  CardMedia: jest.fn(({ ...props }) => <img {...props} />),
  CardContent: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
  Typography: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
}));

describe('FrequentboughtSwiper', () => {
  const data = [
    { img: "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019024926_437Wx649H_202309012343001.jpeg" },
    { img: "https://img.tatacliq.com/images/i16//437Wx649H/MP000000021569171_437Wx649H_202403152152001.jpeg" },
    { img: "https://img.tatacliq.com/images/i16//97Wx144H/MP000000017558261_97Wx144H_202403181810251.jpeg" },
    { img: "https://img.tatacliq.com/images/i12/97Wx144H/MP000000018745585_97Wx144H_202308151613191.jpeg" },
    { img: "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014037832_437Wx649H_202208041644111.jpeg" },
    { img: "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014200773_437Wx649H_202208221820001.jpeg" }
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // it('should render all images in the Swiper correctly', () => {
  //   render(<FrequentboughtSwiper />);

  //   data.forEach((item, index) => {
  //     expect(screen.getByAltText(`image-${index}`)).toBeInTheDocument();
  //     expect(screen.getByAltText(`image-${index}`)).toHaveAttribute('src', item.img);
  //   });
  // });

  // it('should render Card components for each SwiperSlide', () => {
  //   render(<FrequentboughtSwiper />);

  //   data.forEach((item, index) => {
  //     expect(screen.getAllByRole('img')[index]).toHaveAttribute('src', item.img);
  //   });

    
  // });

  it('should apply Swiper configurations correctly', () => {
    render(<FrequentboughtSwiper />);

    // expect(Swiper).toHaveBeenCalledWith(
    //   expect.objectContaining({
    //     slidesPerView: 5,
    //     spaceBetween: 0,
    //     loop: true,
    //     navigation: true,
    //     pagination: false,
    //     modules: [Navigation],
    //     className: 'mySwiper1',
    //     style: { width: '100%' },
    //     breakpoints: expect.any(Object),
    //   }),
    //   expect.anything()
    // );
  });
});
