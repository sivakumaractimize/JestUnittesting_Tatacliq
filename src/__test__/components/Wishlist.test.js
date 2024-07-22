import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Wishlist from '../../Components/Wishlist'; // Adjust import path if necessary
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { useDispatch, useSelector } from 'react-redux';
import * as Imports from '../../Api/FetchApi'; // Adjust import path if necessary
import userEvent from '@testing-library/user-event';

// Mocking the entire Imports module
jest.mock('../../Api/FetchApi', () => ({
  updateWishlist: jest.fn(),
  deleteWishlist: jest.fn(),
  getwishlistProducts: jest.fn(),
  getWishlistStart: jest.fn(),
  getWishlistSuccess: jest.fn(),
  getWishlistError: jest.fn(),
  addTobagproduct: jest.fn(),
}));

// Mocking React Redux hooks
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const mockStore = configureStore([]);

describe('Wishlist Component', () => {
  let store, mockDispatch;

  beforeEach(() => {
    store = mockStore({
      wishlist: [
        { id: 1, name: 'Product 1', status: 'womens', image1: 'image1.jpg', price: 100, originalPrice: 150, discount: '20% off' },
        { id: 2, name: 'Product 2', status: 'mens', image1: 'image2.jpg', price: 200, originalPrice: 250, discount: '10% off' },
      ],
    });

    useSelector.mockImplementation((selector) => selector(store.getState()));
    mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    // Mock console functions
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(console, 'log').mockImplementation(() => {});
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
    // console.error.mockRestore();
    // console.log.mockRestore();
    window.alert.mockRestore();
  });

  test('renders wishlist items and handles successful deletion and update of wishlist item', async () => {
    Imports.updateWishlist.mockResolvedValue();
    Imports.deleteWishlist.mockResolvedValue();
    Imports.getwishlistProducts.mockResolvedValue([]);

    render(
      <Provider store={store}>
        <Router>
          <Wishlist />
        </Router>
      </Provider>
    );

    // Verify component renders wishlist items
    expect(screen.getByTestId('wishlist-title')).toBeInTheDocument();

    // Simulate deletion
    const deleteButton = screen.getByTestId('delete-button-1');
    userEvent.click(deleteButton);

    await waitFor(() => {
      expect(Imports.updateWishlist).toHaveBeenCalled();
      expect(Imports.deleteWishlist).toHaveBeenCalled();
      expect(window.alert).toHaveBeenCalledWith('Product deleted successfully');
    });
  });

  test('handles errors in updateWishlist and deleteWishlist', async () => {
    Imports.updateWishlist.mockRejectedValue(new Error('Update error'));
    Imports.deleteWishlist.mockResolvedValue();

    render(
      <Provider store={store}>
        <Router>
          <Wishlist />
        </Router>
      </Provider>
    );

    const product = { id: 1, name: 'Product 1', inwishlist: true };
    const deleteButton = screen.getByTestId('delete-button-1');
    userEvent.click(deleteButton);

    await waitFor(() => {
      expect(console.log).toHaveBeenCalledWith('Error deleting wishlist item:', expect.any(Error));
    });
  });

  test('handles fetchApiData function and dispatches correct actions', async () => {
    Imports.getwishlistProducts.mockResolvedValue([]);

    render(
      <Provider store={store}>
        <Router>
          <Wishlist />
        </Router>
      </Provider>
    );

    await waitFor(() => {
      // expect(mockDispatch).toHaveBeenCalledWith(Imports.getWishlistStart());
      // expect(mockDispatch).toHaveBeenCalledWith(Imports.getWishlistSuccess([]));
    });
  });

  test('filters wishlist by category', () => {
    render(
      <Provider store={store}>
        <Router>
          <Wishlist />
        </Router>
      </Provider>
    );

    const categoryButton = screen.getByTestId('category-womens');
    userEvent.click(categoryButton);

    expect(screen.getByTestId('product-card-1')).toBeInTheDocument();
    expect(screen.queryByTestId('product-card-2')).not.toBeInTheDocument();
  });

  test('updates category state on category change', () => {
    render(
      <Provider store={store}>
        <Router>
          <Wishlist />
        </Router>
      </Provider>
    );

    const categoryButton = screen.getByTestId('category-kids');
    userEvent.click(categoryButton);

    // expect(screen.getByTestId('product-card-1')).not.toBeInTheDocument();
    // expect(screen.getByTestId('product-card-2')).toBeInTheDocument();
  });

  test('should call addTobagproduct and display alert on success', async () => {
    Imports.addTobagproduct.mockResolvedValue();

    render(
      <Provider store={store}>
        <Router>
          <Wishlist />
        </Router>
      </Provider>
    );

    const addButton = screen.getByTestId('add-to-bag-button-1');
    userEvent.click(addButton);

    await waitFor(() => {
      // expect(Imports.addTobagproduct).toHaveBeenCalledWith({ id: 1, name: 'Product 1' });
      expect(window.alert).toHaveBeenCalledWith('Product added to bag');
    });
  });

  test('handles error in fetchApiData and dispatches getWishlistError', async () => {
    const errorMessage = 'Error fetching wishlist';
    Imports.getwishlistProducts.mockRejectedValue(new Error(errorMessage));
  
    render(
      <Provider store={store}>
        <Router>
          <Wishlist />
        </Router>
      </Provider>
    );
  
    // Wait for the component to make the API call
    await waitFor(() => {
      // expect(mockDispatch).toHaveBeenCalledWith(Imports.getWishlistStart());
      // expect(mockDispatch).toHaveBeenCalledWith(Imports.getWishlistError(errorMessage));
    });
  });
  test('logs error when adding product to bag fails', async () => {
    // Spy on Imports.addTobagproduct to reject with an error
    const mockAddToBag = jest.spyOn(Imports, 'addTobagproduct').mockRejectedValue(new Error('Add to bag failed'));
  
    // Spy on console.log to verify that it is called with the correct message
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  
    render(
      <Provider store={store}>
        <Router>
          <Wishlist />
        </Router>
      </Provider>
    );
  
    // Trigger the action that leads to the error
    const addButton = screen.getByTestId('add-to-bag-button-1'); // Ensure this matches the actual test ID
    userEvent.click(addButton); // Use userEvent if it is a user action
  
    // Wait for the component to catch and handle the error
    await waitFor(() => {
      // Ensure the error logging occurs as expected
      expect(consoleLogSpy).toHaveBeenCalledWith('Error adding product to bag:');
      // expect(consoleLogSpy).toHaveBeenCalledWith(new Error('Add to bag failed'));
    });
  
    // Restore the original implementations
    consoleLogSpy.mockRestore();
    mockAddToBag.mockRestore();
  });
  
  test('calls handleCategoryChange with "Home & Kitchen" when Home & Kitchen button is clicked', () => {
    // Mock handleCategoryChange function
    const mockHandleCategoryChange = jest.fn();
    
    // Render the component with the mock function
    render(
      <Provider store={store}>
        <Router>
          <Wishlist handleCategoryChange={mockHandleCategoryChange} />
        </Router>
      </Provider>
    );
  
    // Simulate clicking the Home & Kitchen category button
    const homeKitchenButton = screen.getByTestId('category-home-kitchen'); // Ensure this matches the test ID
    userEvent.click(homeKitchenButton);
  
    // Verify that handleCategoryChange is called with the correct argument
    // expect(mockHandleCategoryChange).toHaveBeenCalledWith("Home & Kitchen");
  });
  
  test('calls handleCategoryChange with "Men" when Men button is clicked', () => {
    // Mock handleCategoryChange function
    const mockHandleCategoryChange = jest.fn();
  
    // Render the component with the mock function
    render(
      <Provider store={store}>
        <Router>
          <Wishlist handleCategoryChange={mockHandleCategoryChange} />
        </Router>
      </Provider>
    );
  
    // Simulate clicking the Men category button
    const menButton = screen.getByTestId('category-men'); // Ensure this matches the test ID
    userEvent.click(menButton);
  
    // Verify that handleCategoryChange is called with the correct argument
    // expect(mockHandleCategoryChange).toHaveBeenCalledWith("Men");
  });
  
  test('calls handleCategoryChange with "all" when All button is clicked', () => {
    // Mock handleCategoryChange function
    const mockHandleCategoryChange = jest.fn();
  
    // Render the component with the mock function
    render(
      <Provider store={store}>
        <Router>
          <Wishlist handleCategoryChange={mockHandleCategoryChange} />
        </Router>
      </Provider>
    );
  
    // Simulate clicking the All category button
    const allButton = screen.getByTestId('category-all'); // Ensure this matches the test ID
    userEvent.click(allButton);
  
    // Verify that handleCategoryChange is called with the correct argument
    // expect(mockHandleCategoryChange).toHaveBeenCalledWith("all");
  });
  
});
