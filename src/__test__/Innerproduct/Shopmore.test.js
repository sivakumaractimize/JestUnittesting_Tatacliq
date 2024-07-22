import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShopMore from '../../Components/Innerproduct/Shopmore';
import Imports from '../../Components/Imports';

// Mock the Imports module
jest.mock('../../Components/Imports', () => ({
  Grid: ({ children, ...props }) => <div {...props}>{children}</div>,
  Typography: ({ children }) => <div>{children}</div>,
  Divider: (props) => <div {...props} />,
  FiberManualRecordIcon: (props) => <span {...props}>•</span>,
}));

describe('ShopMore', () => {
  test('renders the ShopMore component', () => {
    render(<ShopMore />);

    // Check if the "Shop More" text is rendered
    const title = screen.getByText('Shop More');
    expect(title).toBeInTheDocument();

    // Check if the section titles are rendered
    const sectionTitles = [
      'More Kurtis & Kurtas By Utsa',
      'More Products by Utsa',
      'More Products Under ₹1500',
    ];
    sectionTitles.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });

    // Check if the dividers and icons are rendered
    // const dividers = screen.getAllByRole('divider');
    // expect(dividers).toHaveLength(2);

    // const icons = screen.getAllByText('•');
    // expect(icons).toHaveLength(2);
  });
});
