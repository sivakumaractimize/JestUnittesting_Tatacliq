import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import InnerProductspage from '../../Pages/InnerProductspage';
import Imports from '../../Components/Imports';

// Mock Imports module
jest.mock('../../Components/Imports', () => {
  const originalModule = jest.requireActual('../../Components/Imports');
  return {
    ...originalModule,
    useLocation: jest.fn(),
    Navbar: jest.fn(() => <div data-testid="navbar">Navbar</div>),
    InnerProduct: jest.fn(() => <div data-testid="inner-product">Inner Product</div>),
    Footer: jest.fn(() => <div data-testid="footer">Footer</div>)
  };
});

describe('InnerProductspage component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Navbar, InnerProduct, and Footer components', () => {
    Imports.useLocation.mockReturnValueOnce({
      state: { product: { id: 1, name: 'Test Product' } }
    });

    render(
      <MemoryRouter>
        <InnerProductspage />
      </MemoryRouter>
    );

   
  });

  it('passes the correct product to the InnerProduct component', () => {
    const product = { id: 1, name: 'Test Product' };
    Imports.useLocation.mockReturnValueOnce({
      state: { product }
    });

    render(
      <MemoryRouter>
        <InnerProductspage />
      </MemoryRouter>
    );

    expect(Imports.InnerProduct).toHaveBeenCalledWith(
      expect.objectContaining({ product }),
      {}
    );
  });
});
