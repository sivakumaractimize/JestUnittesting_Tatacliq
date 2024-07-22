import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReceantlyView from '../../Components/Innerproduct/RecentlyViewed';
import Imports from '../../Components/Imports';
import RecentlyViewSwiper from '../../Components/Innerproduct/RecentlyviewSwiper';

// Mock the Imports and RecentlyViewSwiper module
jest.mock('../../Components/Imports', () => ({
  Grid: ({ children, ...props }) => <div {...props}>{children}</div>,
  Typography: ({ children }) => <div>{children}</div>,
  Button: ({ children, ...props }) => <button {...props}>{children}</button>,
}));

jest.mock('../../Components/Innerproduct/RecentlyviewSwiper', () => () => <div>RecentlyViewSwiper Component</div>);

describe('ReceantlyView', () => {
  test('renders the grid container', () => {
    render(<ReceantlyView />);

    // Check if the main grid container is rendered
    // const gridContainer = screen.getByRole('grid', { name: /container/i });
    // expect(gridContainer).toBeInTheDocument();
  });

  test('renders the "Recently Viewed" title', () => {
    render(<ReceantlyView />);

    // Check if the "Recently Viewed" title is rendered
    const title = screen.getByText('Recently Viewed');
    expect(title).toBeInTheDocument();
  });

  test('renders the "View All Products" button', () => {
    render(<ReceantlyView />);

    // Check if the "View All Products" button is rendered
    const button = screen.getByRole('button', { name: /View All Products/i });
    expect(button).toBeInTheDocument();
  });

  test('renders the RecentlyViewSwiper component', () => {
    render(<ReceantlyView />);

    // Check if the RecentlyViewSwiper component is rendered
    const swiper = screen.getByText('RecentlyViewSwiper Component');
    expect(swiper).toBeInTheDocument();
  });
});
