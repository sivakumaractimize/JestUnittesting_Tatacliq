import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Myaccount from '../../Components/Myaccount';
import { MemoryRouter } from 'react-router-dom';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Myaccount Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Myaccount />
      </MemoryRouter>
    );
  });
  test('navigates to Wishlist Page on clicking My acount', () => {
    const myaccountlink = screen.getByTestId('myaccount-link');
    fireEvent.click(myaccountlink);
    expect(mockNavigate).toHaveBeenCalledWith('/myaccount');
  });
  test('navigates to Wishlist Page on clicking My acount', () => {
    const myaccountlink = screen.getByTestId('myaccount-link-1');
    fireEvent.click(myaccountlink);
    expect(mockNavigate).toHaveBeenCalledWith('/myaccount');
  });
  test('navigates to Wishlist Page on clicking My WishList', () => {
    const wishListLink = screen.getByTestId('wishlist-link');
    fireEvent.click(wishListLink);
    expect(mockNavigate).toHaveBeenCalledWith('/wishlistpage');
  });

  test('navigates to Gift card Page on clicking Gift card', () => {
    const giftCardLink = screen.getByTestId('giftcard-link');
    fireEvent.click(giftCardLink);
    expect(mockNavigate).toHaveBeenCalledWith('/myaccount/giftcard');
  });


  test('navigates to profile c Page on clicking profile', () => {
    const profilelink = screen.getByTestId('profile-link');
    fireEvent.click(profilelink);
    expect(mockNavigate).toHaveBeenCalledWith('/myaccount/profile');
  });

  test('navigates to address  Page on clicking address', () => {
    const addreslink = screen.getByTestId('address-link');
    fireEvent.click(addreslink);
    expect(mockNavigate).toHaveBeenCalledWith('/myaccount/address');


  });

  test('navigates to address  Page on clicking address', () => {
    const notification = screen.getByTestId('notification-link');
    fireEvent.click(notification);
    expect(mockNavigate).toHaveBeenCalledWith('/myaccount/manage-Notification');
  });
});
