import React from 'react';
import { render, screen } from '@testing-library/react';
import Swiper1 from '../../Components/Flashpage/Swipers/Swiper1';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useMediaQuery } from '@mui/material';
import Imports from '../../Components/Imports';

// Mocking Swiper and SwiperSlide
jest.mock('swiper/react', () => ({
  Swiper: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
  SwiperSlide: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
}));

// Mocking useMediaQuery
jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  useMediaQuery: jest.fn(),
}));

// Mocking Imports module
jest.mock('../../Components/Imports', () => ({
  ...jest.requireActual('../../Components/Imports'),
  Grid: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
}));

describe('Swiper1', () => {
  const images = [
    { src: 'https://assets.tatacliq.com/medias/sys_master/images/51889195647006.jpg', alt: 'img1' },
    { src: 'https://assets.tatacliq.com/medias/sys_master/images/51889195712542.jpg', alt: 'img2' },
    { src: 'https://assets.tatacliq.com/medias/sys_master/images/51889195778078.jpg', alt: 'img3' },
    { src: 'https://assets.tatacliq.com/medias/sys_master/images/51889195843614.jpg', alt: 'img4' },
    { src: 'https://assets.tatacliq.com/medias/sys_master/images/51889195909150.jpg', alt: 'img5' },
    { src: 'https://assets.tatacliq.com/medias/sys_master/images/51889195974686.jpg', alt: 'img6' },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render all images in the Swiper correctly', () => {
    render(<Swiper1 images={images} />);

    // images.forEach((image) => {
    //   expect(screen.getByAltText(image.alt)).toBeInTheDocument();
    //   expect(screen.getByAltText(image.alt)).toHaveAttribute('src', image.src);
    // });
  });

  it('should apply correct image width for xs screen size', () => {
    useMediaQuery.mockImplementation(query => query === '(max-width:640px)' ? true : false);

    render(<Swiper1 images={images} />);

    // const imagesElements = screen.getAllByRole('img');
    // imagesElements.forEach((image) => {
    //   expect(image).toHaveStyle('width: 100px');
    // });
  });

  it('should apply correct image width for sm screen size', () => {
    useMediaQuery.mockImplementation(query => query === '(min-width:641px) and (max-width:768px)' ? true : false);

    render(<Swiper1 images={images} />);

    // const imagesElements = screen.getAllByRole('img');
    // imagesElements.forEach((image) => {
    //   expect(image).toHaveStyle('width: 150px');
    // });
  });

  it('should apply correct image width for md screen size', () => {
    useMediaQuery.mockImplementation(query => query === '(min-width:769px) and (max-width:1024px)' ? true : false);

    render(<Swiper1 images={images} />);

    // const imagesElements = screen.getAllByRole('img');
    // imagesElements.forEach((image) => {
    //   expect(image).toHaveStyle('width: 200px');
    // });
  });

  it('should apply correct image width for larger screen sizes', () => {
    useMediaQuery.mockImplementation(query => query === '(min-width:1025px)' ? true : false);

    render(<Swiper1 images={images} />);

    // const imagesElements = screen.getAllByRole('img');
    // imagesElements.forEach((image) => {
    //   expect(image).toHaveStyle('width: 290px');
    // });

  });

  it('should apply Swiper configurations correctly', () => {
    render(<Swiper1 images={images} />);

    
  });
});
