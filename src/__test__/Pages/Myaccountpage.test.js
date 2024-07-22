import React from 'react';
import { render, screen } from '@testing-library/react';
import Myaccountpage from '../../Pages/Myaccountpage';
import Imports from '../../Components/Imports';

// Mock Imports module
jest.mock('../../Components/Imports', () => ({
  Navbar: jest.fn(() => <div data-testid="navbar">Navbar</div>),
  Myaccount: jest.fn(() => <div data-testid="my-account">My Account</div>),
  Footer: jest.fn(() => <div data-testid="footer">Footer</div>)
}));

describe('Myaccountpage component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Navbar, Myaccount, and Footer components', () => {
    render(<Myaccountpage />);

   
  });
});
