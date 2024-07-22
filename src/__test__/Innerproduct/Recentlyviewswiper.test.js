import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RecentlyViewSwiper from '../../Components/Innerproduct/RecentlyviewSwiper';
import Imports from '../../Components/Imports';

// Mock the Imports module
jest.mock('../../Components/Imports', () => ({
  Card: ({ children }) => <div>{children}</div>,
  CardMedia: ({ component, ...props }) => <img {...props} />,
  CardContent: ({ children }) => <div>{children}</div>,
  Typography: ({ children }) => <div>{children}</div>,
}));

describe('RecentlyViewSwiper', () => {
  test('renders the swiper with images and texts', () => {
    render(<RecentlyViewSwiper />);

   
  });
});
