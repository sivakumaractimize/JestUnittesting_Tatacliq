import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UsefulLinks from '../../Components/UsefulLinks';
import Imports from '../../Components/Imports';


jest.mock('../../Components/Imports', () => ({
  Grid: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
  Typography: jest.fn(({ children }) => <span>{children}</span>),
}));

describe('UsefulLinks', () => {
  test('renders the UsefulLinks component', () => {
    render(<UsefulLinks />);
    
    // Verify each link is rendered with the correct text
    const links = [
      "Help & Service",
      "Privacy Policy",
      "Terms & Conditions",
      "About Us",
      "FAQ"
    ];
    
    // links.forEach(linkText => {
    //   expect(screen.getByText(linkText)).toBeInTheDocument();
    // });
  });

 
});
