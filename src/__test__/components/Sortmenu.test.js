import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SortIconMenu from '../../Components/Sortmenu';



describe('sortmenu', () => {
  test('renders the sortmenu component', () => {
    render(<SortIconMenu />);


    const sortmenu = screen.getByTestId('sortmenu');
    expect(sortmenu).toBeInTheDocument();
  });


});
