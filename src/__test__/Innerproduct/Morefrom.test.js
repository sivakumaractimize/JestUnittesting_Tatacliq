import React from 'react';
import { render, screen } from '@testing-library/react';
import MoreFrom from '../../Components/Innerproduct/MoreFrom';
import Imports from '../../Components/Imports';
import MoreBrandSwiper from '../../Components/Innerproduct/MoreBrandSwiper';

// Mocking Imports module
jest.mock('../../Components/Imports', () => ({
  ...jest.requireActual('../../Components/Imports'),
  Grid: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
  Typography: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
  Button: jest.fn(({ children, ...props }) => <button {...props}>{children}</button>),
}));

// Mocking MoreBrandSwiper component
jest.mock('../../Components/Innerproduct/MoreBrandSwiper', () => jest.fn(() => <div>MoreBrandSwiper</div>));

describe('MoreFrom Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the MoreFrom component correctly', () => {
    render(<MoreFrom />);

    
  });
});
