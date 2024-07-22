import React from 'react';
import { render, screen } from '@testing-library/react';
import AddTObagPage from '../../Pages/AddTObagPage';
import Imports from '../../Components/Imports';

// Mock Imports module
jest.mock('../../Components/Imports', () => ({
  Navbar: jest.fn(() => <div data-testid="navbar">Navbar</div>),
  AddtoBag: jest.fn(() => <div data-testid="add-to-bag">Add to Bag</div>)
}));

describe('AddTObagPage component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Navbar and AddtoBag components', () => {
    render(<AddTObagPage />);

  });
});
