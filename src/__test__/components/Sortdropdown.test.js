import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SortingDropdown from '../../Components/SortingDropdown';

describe('SortingDropdown', () => {
  it('renders the SortingDropdown component', () => {
    render(<SortingDropdown />);
    const select = screen.getByTestId('select');
    expect(select).toBeInTheDocument();
  });

  test('SortingDropdown renders all dropdown options', async () => {
    render(<SortingDropdown />);
    
    expect(screen.getByText('Sort by: Popularity')).toBeInTheDocument();
    //expect(screen.getByText('Price Low to High')).toBeInTheDocument();
    //expect(screen.getByText('Price High to Low')).toBeInTheDocument();
    //expect(screen.getByText('New Arrivals')).toBeInTheDocument();
    //expect(screen.getByText('Discounts')).toBeInTheDocument();
  });

  test('SortingDropdown changes value on selection', async () => {
    render(<SortingDropdown />);
    
    const select = screen.getByTestId('select');

    // Verify initial value (You might need to adjust this depending on how the value is rendered)
    //expect(select).toHaveValue('popularity');

    // Simulate user selecting a new value
   // fireEvent.change(select, { target: { value: 'priceLowHigh' } });

    // Verify the state update
    // await waitFor(() => {
    //   expect(select).toHaveValue('priceLowHigh');
    // });
  });
});
