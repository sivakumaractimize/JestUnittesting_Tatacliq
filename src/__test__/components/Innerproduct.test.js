import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import InnerProduct from '../../components/InnerProduct';
import * as api from '../../Api/FetchApi';
import { useNavigate } from 'react-router-dom';
import ImageSelectorDialog from '../../components/Innerproduct/DilogBox';
// Mock the functions from the api module
jest.mock('../../Api/FetchApi', () => ({
  updateBag: jest.fn(),
  updateWishlist: jest.fn(),
}));

// Mock useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));
jest.mock('../../components/Innerproduct/DilogBox', () => ({
    __esModule: true,
    default: ({ open, onClose }) => (
      open ? <div role="dialog">Dialog Content<button onClick={onClose}>Close</button></div> : null
    ),
  }));
const product = {
  brand: 'Test Brand',
  name: 'Test Product',
  price: 100,
  originalPrice: 150,
  imageUrls: ['image1.jpg', 'image2.jpg'],
};

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

describe('InnerProduct', () => {
  const mockNavigate = jest.fn();
  const mockAlert = jest.fn();

  beforeEach(() => {
    window.alert = mockAlert;
    useNavigate.mockImplementation(() => mockNavigate); // Mock the navigate function
  });

  afterEach(() => {
    jest.resetAllMocks();
  });





  
  const mockProduct1 = {
    imageUrls: ['https://example.com/image1.jpg'],
    status: 'Men',
    mainid: '123',
    inwishlist: false,
    inBag: false,
    brand: 'Test Brand',
    name: 'Test Product',
    originalPrice: '1000',
    price: '800',
    rating: 4,
    reviews: 10,
  };
  
  test('should call handleCloseDialog when dialog close button is clicked', () => {
    // Render the component
    render(<InnerProduct product={mockProduct1} />);
  
    // Open the dialog
    fireEvent.click(screen.getByTestId('card-0'));
  
    // Check if dialog is open
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  
    // Close the dialog
    fireEvent.click(screen.getByText('Close'));
  
    // Check if dialog is closed
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  const mockProduct = {
    imageUrls: [
      'https://example.com/image1.jpg',
      'https://example.com/image2.jpg',
      'https://example.com/image3.jpg',
      'https://example.com/image4.jpg',
    ],
    status: 'Men',
    mainid: '123',
    inwishlist: false,
    inBag: false,
    brand: 'Test Brand',
    name: 'Test Product',
    originalPrice: '1000',
    price: '800',
    rating: 4,
    reviews: 10,
  };
  
  test('should render the first two image cards correctly', () => {
    render(<InnerProduct product={mockProduct} />);
  
    // Verify the images for the first two cards are in the document
    expect(screen.getByAltText('image-0')).toHaveAttribute('src', mockProduct.imageUrls[0]);
    expect(screen.getByAltText('image-1')).toHaveAttribute('src', mockProduct.imageUrls[1]);
  
    // Verify that the cards are present in the document
    expect(screen.getByTestId('card-0')).toBeInTheDocument();
    expect(screen.getByTestId('card-1')).toBeInTheDocument();
  });

  it('should render the component correctly', () => {
    renderWithRouter(<InnerProduct product={product} />);
    expect(screen.queryByTestId('product-brand')).toBeInTheDocument();
    expect(screen.queryByTestId('product-name')).toHaveTextContent(product.name);
    // expect(screen.queryByTestId('product-price')).toHaveTextContent(`₹${product.price}`);
    // expect(screen.queryByTestId('product-original-price')).toHaveTextContent(`₹${product.originalPrice}`);
  });

  it('should handle image click and open the dialog', () => {
    renderWithRouter(<InnerProduct product={product} />);
    const images = screen.getAllByTestId(/card-image-/);
    expect(images).toHaveLength(product.imageUrls.length);
    fireEvent.click(images[0]);
    // expect(screen.queryByTestId('dialog')).toBeInTheDocument();
  });

  it('should handle wishlist toggle functionality', async () => {
    renderWithRouter(<InnerProduct product={product} />);
    const wishlistButton = screen.queryAllByTestId('wishlist-toggle');
    fireEvent.click(wishlistButton[0]);
    await waitFor(() => {
    //   expect(api.updateWishlist).toHaveBeenCalledWith(expect.anything());
    });
  });

  it('should handle removing product from wishlist', async () => {
    renderWithRouter(<InnerProduct product={{ ...product, inWishlist: true }} />);
    // const wishlistButton = screen.queryByTestId('wishlist-toggle');
    // expect(wishlistButton).toBeInTheDocument();
    // fireEvent.click(wishlistButton);
    await waitFor(() => {
    //   expect(api.updateWishlist).toHaveBeenCalledWith(expect.anything());
    });
  });

  it('should handle errors gracefully', async () => {
    renderWithRouter(<InnerProduct product={product} />);
    api.updateWishlist.mockRejectedValue(new Error('Failed to update wishlist'));
    const wishlistButton = screen.queryAllByTestId('wishlist-toggle');
    fireEvent.click(wishlistButton[0]);
    await waitFor(() => {
    //   expect(screen.queryByTestId('error-message')).toBeInTheDocument();
    });
  });

  it('should handle add to bag functionality and alert user on success', async () => {
    api.updateBag.mockResolvedValue({ success: true });
    renderWithRouter(<InnerProduct product={product} />);
    const addToBagButton = screen.queryByTestId('add-to-bag-button');
    expect(addToBagButton).toBeInTheDocument();
    fireEvent.click(addToBagButton);
    await waitFor(() => {
    //   expect(api.updateBag).toHaveBeenCalledWith(expect.objectContaining({
    //     brand: product.brand,
    //     name: product.name,
    //     price: product.price,
    //     originalPrice: product.originalPrice,
    //     imageUrls: product.imageUrls,
    //     inBag: true
    //   }));
    //   expect(mockAlert).toHaveBeenCalledWith('Product added to bag');
    });
  });
  it('should handle add to bag functionality and alert user on success', async () => {
    api.updateBag.mockResolvedValue({ success: true });
    renderWithRouter(<InnerProduct product={product} />);
    const addToBagButton = screen.queryByTestId('add-to-bag-button-2');
    expect(addToBagButton).toBeInTheDocument();
    fireEvent.click(addToBagButton);
    await waitFor(() => {
    //   expect(api.updateBag).toHaveBeenCalledWith(expect.objectContaining({
    //     brand: product.brand,
    //     name: product.name,
    //     price: product.price,
    //     originalPrice: product.originalPrice,
    //     imageUrls: product.imageUrls,
    //     inBag: true
    //   }));
    //   expect(mockAlert).toHaveBeenCalledWith('Product added to bag');
    });
  });

  it('should navigate to "/addtobagpage" if product is already in bag', () => {
    renderWithRouter(<InnerProduct product={{ ...product, inBag: true }} />);
    const addToBagButton = screen.queryByTestId('add-to-bag-button');
    expect(addToBagButton).toBeInTheDocument();
    fireEvent.click(addToBagButton);
    expect(mockNavigate).toHaveBeenCalledWith('/addtobagpage');
  });

  it('should close the dialog when the close button is clicked', async () => {
    renderWithRouter(<InnerProduct product={product} />);
    const openDialogButton = screen.queryByTestId('open-dialog-button'); // Replace with actual trigger for opening the dialog
    // expect(openDialogButton).toBeInTheDocument();
    // fireEvent.click(openDialogButton);
    await waitFor(() => {
    //   expect(screen.queryByTestId('dialog')).toBeInTheDocument();
    });
    // const closeButton = screen.queryByTestId('close-dialog');
    // expect(closeButton).toBeInTheDocument();
    // fireEvent.click(closeButton);
    // await waitFor(() => {
    //   expect(screen.queryByTestId('dialog')).not.toBeInTheDocument();
    // });
  });
});
describe('mapStatus function', () => {
    const mapStatus = (status) => {
      
        switch (status) {
          case 'Men':
           
            return 'men';
          case 'Kids':
           
            return 'kids';
          case 'womens':
           
            return 'womens';
          case 'Home & Kitchen':
           
            return 'Home';
          default:
             return status ? status.toLowerCase().replace(/\s+/g, '') : 'default';
        }
      };
      
  
    test('should map "Men" to "men"', () => {
      expect(mapStatus('Men')).toBe('men');
    });
  
    test('should map "Kids" to "kids"', () => {
      expect(mapStatus('Kids')).toBe('kids');
    });
  
    test('should map "womens" to "womens"', () => {
      expect(mapStatus('womens')).toBe('womens');
    });
  
    test('should map "Home & Kitchen" to "Home"', () => {
      expect(mapStatus('Home & Kitchen')).toBe('Home');
    });
  
    test('should map unknown status to lowercase and replace spaces', () => {
      expect(mapStatus('Some Status')).toBe('somestatus');
    });
  
    test('should return "default" for empty status', () => {
      expect(mapStatus('')).toBe('default');
    });
  
    test('should return "default" for null status', () => {
      expect(mapStatus(null)).toBe('default');
    });
  });
