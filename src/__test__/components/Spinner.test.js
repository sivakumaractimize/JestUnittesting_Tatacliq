import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Spinner from '../../Components/Spinner';
import PuffLoader from 'react-spinners/PuffLoader';
import { Grid } from '@mui/material';



describe('Spinner', () => {
  test('renders the Spinner component', () => {
    render(<Spinner />);


    const puffLoader = screen.getByTestId('puff-loader');
    expect(puffLoader).toBeInTheDocument();
  });


});
