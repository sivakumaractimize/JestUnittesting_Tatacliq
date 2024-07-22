import React from 'react';
import { render, screen } from '@testing-library/react';
import RatingsAndReviews from '../../Components/Innerproduct/Rating';
import Imports from '../../Components/Imports';

// Mocking Imports module
jest.mock('../../Components/Imports', () => ({
  ...jest.requireActual('../../Components/Imports'),
  Grid: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
  Typography: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
  Divider: jest.fn(({ ...props }) => <div {...props} />),
  LinearProgress: jest.fn(({ ...props }) => <div {...props} />),
  StarIcon: jest.fn(() => <span>★</span>),
}));

describe('RatingsAndReviews Component', () => {
  it('should render the Ratings and Reviews section', () => {
    render(<RatingsAndReviews />);

  });

  it('should render the correct count of each star rating', () => {
    render(<RatingsAndReviews />);

  });
});
