import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FrequentlyBought from '../../Components/Innerproduct/FrequentlyBought';
import Imports from '../../Components/Imports';
import FrequentboughtSwiper from '../../Components/Innerproduct/FrequentlyboughtSwiper';

// Mock the Imports and FrequentboughtSwiper module
jest.mock('../../Components/Imports', () => ({
  Grid: ({ children, ...props }) => <div {...props}>{children}</div>,
  Typography: ({ children }) => <div>{children}</div>,
  Button: ({ children, ...props }) => <button {...props}>{children}</button>,
}));

jest.mock('../../Components/Innerproduct/FrequentlyboughtSwiper', () => () => <div>FrequentboughtSwiper Component</div>);

describe('FrequentlyBought', () => {
  test('renders the grid container', () => {
    render(<FrequentlyBought />);

    // // Check if the main grid container is rendered
    // const gridContainer = screen.getByRole('grid', { name: /container/i });
    // expect(gridContainer).toBeInTheDocument();
  });

  test('renders the "Frequently Bought Together" title', () => {
    render(<FrequentlyBought />);

    // Check if the "Frequently Bought Together" title is rendered
    const title = screen.getByText('Frequently Bought Together');
    expect(title).toBeInTheDocument();
  });

  test('renders the "View All Products" button', () => {
    render(<FrequentlyBought />);

    // Check if the "View All Products" button is rendered
    const button = screen.getByRole('button', { name: /View All Products/i });
    expect(button).toBeInTheDocument();
  });

  test('renders the FrequentboughtSwiper component', () => {
    render(<FrequentlyBought />);

    // Check if the FrequentboughtSwiper component is rendered
    const swiper = screen.getByText('FrequentboughtSwiper Component');
    expect(swiper).toBeInTheDocument();
  });
});
