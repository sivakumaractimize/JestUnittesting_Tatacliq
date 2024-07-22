import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyaccountMenu from '../../Components/Myaccountmenu';

describe('MyaccountMenu component', () => {
  test('renders without crashing', () => {
    render(<MyaccountMenu />);
  });

  test('tabs are clickable and change content', () => {
    render(<MyaccountMenu />);

    // Initially, "Recent orders" tab should be selected
    expect(screen.getByText('Recent orders')).toHaveStyle('border-bottom: 2px solid red');

    // Click on "Recent orders" tab
    fireEvent.click(screen.getByText('Recent orders'));
    expect(screen.getByText('You have not made any purchase yet')).toBeInTheDocument();
    expect(screen.getByText('Continue Shopping')).toBeInTheDocument();

    // Click on "My Reviews" tab
    fireEvent.click(screen.getByText('My Reviews'));
    expect(screen.getByText('No Reviews')).toBeInTheDocument();

    // Click on "Useful links" tab
    fireEvent.click(screen.getByText('Useful links'));
    expect(screen.getByText('Help & Service')).toBeInTheDocument(); // Check for a part of the content

    // Click on "Alerts" tab
    fireEvent.click(screen.getByText('Alerts'));
    expect(screen.getByText('No Alerts Alert')).toBeInTheDocument();

    // Click on "Coupons" tab
    fireEvent.click(screen.getByText('Coupons'));
    expect(screen.getByText('Flat 10% Off Upto Rs. 2000 | Min purchase of Rs. 9000')).toBeInTheDocument();
    expect(screen.getByText('Additional 15% Off on Denim on Rs.2499')).toBeInTheDocument();
  });
});
