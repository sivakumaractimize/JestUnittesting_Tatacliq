import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Productspage from '../../Pages/Productspage';
import Imports from '../../Components/Imports';

// Mock Imports module
jest.mock('../../Components/Imports', () => {
  const originalModule = jest.requireActual('../../Components/Imports');
  return {
    ...originalModule,
    useLocation: jest.fn(),
    Navbar: jest.fn(() => <div data-testid="navbar">Navbar</div>),
    Product: jest.fn(() => <div data-testid="product">Product List</div>),
    Footer: jest.fn(() => <div data-testid="footer">Footer</div>)
  };
});

describe('Productspage component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Navbar, Product, and Footer components', () => {
    Imports.useLocation.mockReturnValueOnce({ search: '?category=electronics' });

    render(
      <MemoryRouter>
        <Productspage />
      </MemoryRouter>
    );

    
  });

  it('logs the category from URLSearchParams', () => {
    Imports.useLocation.mockReturnValueOnce({ search: '?category=electronics' });
    const consoleSpy = jest.spyOn(console, 'log');

    render(
      <MemoryRouter>
        <Productspage />
      </MemoryRouter>
    );

    expect(consoleSpy).toHaveBeenCalledWith('electronics');
  });

  it('passes the correct category to the Product component', () => {
    Imports.useLocation.mockReturnValueOnce({ search: '?category=electronics' });

    render(
      <MemoryRouter>
        <Productspage />
      </MemoryRouter>
    );

    expect(Imports.Product).toHaveBeenCalledWith(
      expect.objectContaining({ category: 'electronics' }),
      {}
    );
  });
});
