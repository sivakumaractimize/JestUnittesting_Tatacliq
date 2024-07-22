import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TemporaryDrawer from '../../Components/SideDrawer';

// Mocking the useNavigate hook
const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

describe('TemporaryDrawer component', () => {
  const handleLoginClick = jest.fn();
  const handleLogout = jest.fn();
  const toggleDrawer = jest.fn();

  beforeEach(() => {
    mockedNavigate.mockClear();
    handleLoginClick.mockClear();
    handleLogout.mockClear();
    toggleDrawer.mockClear();
  });

  test('navigates to /myaccount when MenuItem is clicked and token is present', () => {
    render(
      <MemoryRouter>
        <TemporaryDrawer
          token="dummy-token"
          handleLoginClick={handleLoginClick}
          handleLogout={handleLogout}
          open={true}
          toggleDrawer={toggleDrawer}
        />
      </MemoryRouter>
    );

    const myAccountMenuItem = screen.getByText(/My account/i);
    fireEvent.click(myAccountMenuItem);

    expect(mockedNavigate).toHaveBeenCalledWith('/myaccount');
  });
});
