import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TitleSwiper from '../../Components/Flashpage/TitleSwiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

test('renders TitleSwiper component', () => {
  render(<TitleSwiper />);

 
});
