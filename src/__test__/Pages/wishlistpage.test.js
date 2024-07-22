import React from 'react';
import { render, screen } from '@testing-library/react';
import WishlistPage from '../../Pages/WishlistPage';
import Imports from '../../Components/Imports';

// Mock Imports module
jest.mock('../../Components/Imports', () => ({
  Navbar: jest.fn(() => <div data-testid="navbar">Navbar</div>),
  Wishlist: jest.fn(() => <div data-testid="wishlist">Wishlist</div>),
  Footer: jest.fn(() => <div data-testid="footer">Footer</div>)
}));

describe('WishlistPage component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Navbar, Wishlist, and Footer components', () => {
    render(<WishlistPage />);

   
  });
});
