import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BeautyMenu from '../../Components/Megamenu/Beauty';
import * as Imports from '../../Components/Imports';

// Mock the Imports module and its methods
jest.mock('../../Components/Imports', () => ({
  ...jest.requireActual('../../Components/Imports'),
  Grid: jest.fn(({ children }) => <div>{children}</div>),
  Typography: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
  useNavigate: jest.fn(),
}));

describe('BeautyMenu Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders categories and items correctly', async () => {
    render(<BeautyMenu />);

  });

  test('applies correct styles and cursor for items', async () => {
    render(<BeautyMenu />);

    
  });

  test('does not trigger any action on item click', async () => {
    render(<BeautyMenu />);

  });
});
