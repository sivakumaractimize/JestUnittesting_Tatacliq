import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Homepage from '../../Pages/Homepage';
import Imports from '../../Components/Imports';


jest.mock('../../Components/Imports', () => ({
  Navbar: () => <div data-testid="navbar">Navbar Mock</div>,
  Grid: ({ children }) => <div data-testid="grid">{children}</div>,
  TitleSwiper: () => <div data-testid="title-swiper">TitleSwiper Mock</div>,
  CardImages: () => <div data-testid="card-images">CardImages Mock</div>,
  BlockbusterDeals: () => <div data-testid="blockbuster-deals">BlockbusterDeals Mock</div>,
  Sealthedeals: () => <div data-testid="seal-the-deals">Sealthedeals Mock</div>,
  Footer: () => <div data-testid="footer">Footer Mock</div>,
}));

describe('Homepage', () => {
  test('renders Homepage component', () => {
    render(<Homepage />);
   
  });

  
});
