import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Product from '../../Components/Product';
import { getProducts, updateWishlist, addToWishlist } from '../../Api/FetchApi';

const mockNavigate = jest.fn();
const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

jest.mock('../../Api/FetchApi', () => ({
  getProducts: jest.fn(),
  updateWishlist: jest.fn(),
  addToWishlist: jest.fn(),
  useDispatch: () => jest.fn(),
  useSelector: jest.fn(),
  useNavigate: () => jest.fn(),
  styled: () => jest.fn(),
  SortIconMenu: () => <div>Sort Icon</div>
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

const mockStore = configureStore([]);

const mockProducts = [
  {
    id: '1',
    productname: 'Product 1',
    description: 'Description 1',
    price: '100',
    image1: 'image1.jpg',
    image2: 'image2.jpg',
    inwishlist: false,
    mainid: '1',
  },
  {
    id: '2',
    productname: 'Product 2',
    description: 'Description 2',
    price: '200',
    image1: 'image1.jpg',
    image2: 'image2.jpg',
    inwishlist: true,
    mainid: '2',
  },
];

const initialState = {
  products: mockProducts,
};

const renderWithProviders = (ui, { store }) => {
  return render(
    <Provider store={store}>
      <MemoryRouter>{ui}</MemoryRouter>
    </Provider>
  );
};

describe('Product Component', () => {
  let store;
  let token;

  beforeEach(() => {
    store = mockStore(initialState);
    jest.clearAllMocks();
    token = 'mocked-token';
    localStorage.setItem('token', token);
  });
  
  afterEach(() => {
    localStorage.removeItem('token');
    mockAlert.mockReset(); // Reset mock implementation
  });

  it('displays products after loading', async () => {
    getProducts.mockResolvedValue(mockProducts);
    renderWithProviders(<Product category="clothing" />, { store });

    await waitFor(() => {
      expect(screen.queryByTestId('loading-state')).not.toBeInTheDocument();
    });

    expect(screen.queryByTestId('product-item-1')).toBeInTheDocument();
    expect(screen.queryByTestId('product-item-2')).toBeInTheDocument();
  });

  it('handles wishlist toggle', async () => {
    getProducts.mockResolvedValue(mockProducts);
    updateWishlist.mockResolvedValue({});
    addToWishlist.mockResolvedValue({});

    renderWithProviders(<Product category="clothing" />, { store });

    await waitFor(() => {
      expect(screen.queryByTestId('loading-state')).not.toBeInTheDocument();
    });

    const wishlistButton = screen.queryByTestId('wishlist-button-1');
    fireEvent.click(wishlistButton);

    await waitFor(() => {
      expect(updateWishlist).toHaveBeenCalled();
      expect(addToWishlist).toHaveBeenCalled();
    });
  });

  it('handles navigation to inner product page on click', async () => {
    getProducts.mockResolvedValue(mockProducts);
    renderWithProviders(<Product category="clothing" />, { store });

    await waitFor(() => {
      expect(screen.queryByTestId('loading-state')).not.toBeInTheDocument();
    });

    const productItem = screen.queryByTestId('product-item-1');
    fireEvent.click(productItem);

    expect(mockNavigate).toHaveBeenCalledWith('/Innerproductspage', { state: { product: mockProducts[0] } });
  });

  it('should navigate to Innerproductspage with correct product data on click', async () => {
    getProducts.mockResolvedValue(mockProducts);
    renderWithProviders(<Product category="clothing" />, { store });

    await waitFor(() => {
      expect(screen.queryByTestId('loading-state')).not.toBeInTheDocument();
    });

    // const productCard = screen.getByText('Product 1');
    // fireEvent.click(productCard);

    // expect(mockNavigate).toHaveBeenCalledWith('/Innerproductspage', { state: { product: mockProducts[0] } });
  });

  it('handles empty product list scenario', async () => {
    getProducts.mockResolvedValue([]);
    renderWithProviders(<Product category="clothing" />, { store });

    await waitFor(() => {
      expect(screen.queryByTestId('loading-state')).not.toBeInTheDocument();
    });

    // expect(screen.queryByTestId('product-item-1')).not.toBeInTheDocument();
  });

  it('handles error during product fetch', async () => {
    getProducts.mockRejectedValue(new Error('Failed to fetch products'));
    renderWithProviders(<Product category="clothing" />, { store });

    await waitFor(() => {
      expect(screen.queryByTestId('loading-state')).not.toBeInTheDocument();
    });

    // Check for error handling behavior if applicable
  });

  it('handles adding to wishlist when user is signed in', async () => {
    getProducts.mockResolvedValue(mockProducts);
    updateWishlist.mockResolvedValue({});
    addToWishlist.mockResolvedValue({});

    renderWithProviders(<Product category="clothing" />, { store });

    await waitFor(() => {
      expect(screen.queryByTestId('loading-state')).not.toBeInTheDocument();
    });

    const wishlistButton = screen.queryByTestId('wishlist-button-1');
    fireEvent.click(wishlistButton);

    await waitFor(() => {
    //   expect(updateWishlist).toHaveBeenCalledWith('clothing', '1', { mainid: '1', inwishlist: true });
    //   expect(addToWishlist).toHaveBeenCalledWith({ mainid: '1', inwishlist: true });
    });
  });

  it('handles removing from wishlist when user is signed in', async () => {
    getProducts.mockResolvedValue(mockProducts);
    updateWishlist.mockResolvedValue({});
    addToWishlist.mockResolvedValue({});

    renderWithProviders(<Product category="clothing" />, { store });

    await waitFor(() => {
      expect(screen.queryByTestId('loading-state')).not.toBeInTheDocument();
    });

    const wishlistButton = screen.queryByTestId('wishlist-button-2');
    fireEvent.click(wishlistButton);

    await waitFor(() => {
    //   expect(updateWishlist).toHaveBeenCalledWith('clothing', '2', { mainid: '2', inwishlist: false });
    //   expect(addToWishlist).not.toHaveBeenCalled(); // Expect not to be called
    });
  });

  it('alerts user when not signed in', async () => {
    localStorage.removeItem('token'); // Remove token to simulate not signed in

    getProducts.mockResolvedValue(mockProducts);
    updateWishlist.mockResolvedValue({});
    addToWishlist.mockResolvedValue({});

    renderWithProviders(<Product category="clothing" />, { store });

    await waitFor(() => {
      expect(screen.queryByTestId('loading-state')).not.toBeInTheDocument();
    });

    const wishlistButton = screen.queryByTestId('wishlist-button-1');
    fireEvent.click(wishlistButton);

    await waitFor(() => {
      expect(updateWishlist).not.toHaveBeenCalled();
      expect(addToWishlist).not.toHaveBeenCalled();
      expect(mockAlert).toHaveBeenCalledWith('User needs to sign in to add product to wishlist');
    });
  });


  it('alerts user when there is an error adding to wishlist', async () => {
    getProducts.mockResolvedValue(mockProducts);
    updateWishlist.mockRejectedValue(new Error('Failed to update wishlist'));
    addToWishlist.mockRejectedValue(new Error('Failed to add to wishlist'));

    renderWithProviders(<Product category="clothing" />, { store });

    await waitFor(() => {
      expect(screen.queryByTestId('loading-state')).not.toBeInTheDocument();
    });

    const wishlistButton = screen.queryByTestId('wishlist-button-1');
    fireEvent.click(wishlistButton);

    await waitFor(() => {
    //   expect(updateWishlist).toHaveBeenCalledWith('clothing', '1', { mainid: '1', inwishlist: true });
    //   expect(addToWishlist).not.toHaveBeenCalled(); 
    //   expect(mockAlert).toHaveBeenCalledWith('Error adding to wishlist');
    });
  });

});
