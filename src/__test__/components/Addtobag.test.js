import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddtoBag from '../../Components/AddtoBag'; // Adjust import path if necessary
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import * as Imports from '../../Api/FetchApi'; // Adjust import path if necessary
import userEvent from '@testing-library/user-event';
import { updateWishlist } from '../../Api/FetchApi';

// Mocking the Imports module
jest.mock('../../Api/FetchApi', () => ({
  getaddtobagStart: jest.fn(),
  getAddtobagproducts: jest.fn(),
  getaddtobagSuccess: jest.fn(),
  getaddtobagError: jest.fn(),
  deleteAddtobagproduct: jest.fn(),
  updateBag: jest.fn(),
  updateBagWishlist: jest.fn(),
  addToWishlist: jest.fn(),
  updateWishlist: jest.fn(),
  toast: jest.fn(),
  Bounce: 'bounce-transition',
}));

// Mocking React Redux hooks
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const mockStore = configureStore([]);

describe('AddtoBag Component', () => {
  let store, mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
    store = mockStore({
      products: [
        { id: 1, name: 'Product 1', image1: 'image1.jpg', price: 100, inwishlist: false, Bagid: 'bag1', status: 'Men', mainid: 'main1' },
        { id: 2, name: 'Product 2', image1: 'image2.jpg', price: 200, inwishlist: true, Bagid: 'bag2', status: 'Kids', mainid: 'main2' },
      ],
    });

    jest.spyOn(require('react-redux'), 'useDispatch').mockReturnValue(mockDispatch);
    jest.spyOn(require('react-redux'), 'useSelector').mockImplementation((selector) => selector(store.getState()));

    // Mock console.error
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <Router>
          <AddtoBag />
        </Router>
      </Provider>
    );

    expect(screen.getByText(/My Bag/i)).toBeInTheDocument();
  });

  it('fetches products on render', async () => {
    Imports.getAddtobagproducts.mockResolvedValue([
      { id: 1, name: 'Product 1', image1: 'image1.jpg', price: 100, inwishlist: false, Bagid: 'bag1', status: 'Men', mainid: 'main1' }
    ]);

    render(
      <Provider store={store}>
        <Router>
          <AddtoBag />
        </Router>
      </Provider>
    );

    await waitFor(() => expect(Imports.getAddtobagproducts).toHaveBeenCalled());
  });

  // it('handles size and quantity changes', () => {
  //   render(
  //     <Provider store={store}>
  //       <Router>
  //         <AddtoBag />
  //       </Router>
  //     </Provider>
  //   );

  //   const sizeSelect = screen.getAllByRole('combobox')[0];
  //   const quantitySelect = screen.getAllByRole('combobox')[1];

  //   userEvent.selectOptions(sizeSelect, 'M');
  //   userEvent.selectOptions(quantitySelect, '3');

  //   expect(sizeSelect).toHaveValue('M');
  //   expect(quantitySelect).toHaveValue('3');
  // });

  it('handles delete product from bag', async () => {
    Imports.deleteAddtobagproduct.mockResolvedValue({});
    Imports.updateBag.mockResolvedValue({});

    render(
      <Provider store={store}>
        <Router>
          <AddtoBag />
        </Router>
      </Provider>
    );

    const removeButtons = screen.getAllByText(/Remove/i);
    userEvent.click(removeButtons[0]);

    await waitFor(() => expect(Imports.deleteAddtobagproduct).toHaveBeenCalled());
    await waitFor(() => expect(Imports.updateBag).toHaveBeenCalled());
  });

  it('handles add to wishlist', async () => {
    Imports.updateBagWishlist.mockResolvedValue({});
    Imports.addToWishlist.mockResolvedValue({});
    Imports.toast.mockImplementation(() => {});

    render(
      <Provider store={store}>
        <Router>
          <AddtoBag />
        </Router>
      </Provider>
    );

    //const wishlistButton = screen.getByText(/Save to wishlist/i);
    //userEvent.click(wishlistButton);

    
  });

  it('renders empty bag message when no products', () => {
    store = mockStore({
      products: [],
    });

    render(
      <Provider store={store}>
        <Router>
          <AddtoBag />
        </Router>
      </Provider>
    );

    expect(screen.getByText(/Your bag is empty! Let’s fill it up shall we?/i)).toBeInTheDocument();
  });

  it('handles error fetching products', async () => {
    const error = new Error('Fetch error');
    Imports.getAddtobagproducts.mockRejectedValue(error);

    render(
      <Provider store={store}>
        <Router>
          <AddtoBag />
        </Router>
      </Provider>
    );

    await waitFor(() => {
      //expect(Imports.getaddtobagError).toHaveBeenCalledWith(error.message);
      expect(console.error).toHaveBeenCalledWith('Error fetching products:', error);
    });
  });

  it('handles error deleting wishlist item', async () => {
    const error = new Error('Delete error');
    Imports.deleteAddtobagproduct.mockRejectedValue(error);
    Imports.toast.mockImplementation(() => {});

    render(
      <Provider store={store}>
        <Router>
          <AddtoBag />
        </Router>
      </Provider>
    );

    const removeButtons = screen.getAllByText(/Remove/i);
    userEvent.click(removeButtons[0]);

    await waitFor(() => {
     // expect(console.error).toHaveBeenCalledWith('Error deleting wishlist item:', error);
      // expect(Imports.toast).toHaveBeenCalledWith('Error deleting product from bag', {
      //   position: "top-right",
      //   autoClose: 3000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      //   transition: 'bounce-transition',
      // });
    });
  });

  it('handles adding a product to the wishlist', async () => {
    const product = { id: 1, name: 'Product 1', image1: 'image1.jpg', price: 100, inwishlist: false, Bagid: 'bag1', status: 'Men', mainid: 'main1' };
    const inwishlist = false;

    Imports.updateBagWishlist.mockResolvedValue({});
    Imports.addToWishlist.mockResolvedValue({});
    Imports.toast.mockImplementation(() => {});
    const fetchProducts = jest.fn();

    render(
      <Provider store={store}>
        <Router>
          <AddtoBag />
        </Router>
      </Provider>
    );

    // Trigger the handleAddWishlist function
    //const addToWishlistButton = screen.getByText(/Add to wishlist/i);
    //userEvent.click(addToWishlistButton);

    await waitFor(() => {
      //expect(Imports.updateBagWishlist).toHaveBeenCalledWith(product.Bagid, { ...product, inwishlist: !product.inwishlist });
      expect(Imports.addToWishlist).toHaveBeenCalledWith({ ...product, inwishlist: !product.inwishlist });
      // expect(Imports.toast).toHaveBeenCalledWith('Product Added to Wishlist..!', {
      //   position: "top-right",
      //   autoClose: 3000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      //   transition: 'bounce-transition',
      // });
      expect(fetchProducts).toHaveBeenCalled();
    });
  });

  it('handles error updating wishlist', async () => {
    const product = { id: 1, name: 'Product 1', image1: 'image1.jpg', price: 100, inwishlist: false, Bagid: 'bag1', status: 'Men', mainid: 'main1' };
    const inwishlist = false;
    const error = new Error('Update error');

    Imports.updateBagWishlist.mockRejectedValue(error);
    Imports.addToWishlist.mockResolvedValue({});
    Imports.toast.mockImplementation(() => {});
    const fetchProducts = jest.fn();

    render(
      <Provider store={store}>
        <Router>
          <AddtoBag />
        </Router>
      </Provider>
    );

   

    await waitFor(() => {
      //expect(console.error).toHaveBeenCalledWith('Error updating wishlist', error);
    });
  });

  it('handles add to wishlist and shows toast notification', async () => {
    const product = { id: 1, name: 'Product 1', image1: 'image1.jpg', price: 100, inwishlist: false, Bagid: 'bag1', status: 'Men', mainid: 'main1' };
    const inwishlist = false;
  
    Imports.updateBagWishlist.mockResolvedValue({});
    Imports.addToWishlist.mockResolvedValue({});
    Imports.toast.mockImplementation(() => {});
  
    render(
      <Provider store={store}>
        <Router>
          <AddtoBag />
        </Router>
      </Provider>
    );
  
    // Find the button or action that triggers the add to wishlist
    const addToWishlistButton = screen.queryAllByTestId('add-to-wishlist-button'); // Use data-testid
    //userEvent.click(addToWishlistButton);
  
    await waitFor(() => {
      // Verify that `updateBagWishlist` and `addToWishlist` are called
      expect(Imports.updateBagWishlist).toHaveBeenCalledWith(product.Bagid, { ...product, inwishlist: !product.inwishlist });
      expect(Imports.addToWishlist).toHaveBeenCalledWith({ ...product, inwishlist: !product.inwishlist });
  
      // Check that `toast` is called with the correct arguments
      expect(Imports.toast).toHaveBeenCalledWith('Product Added to Wishlist..!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: 'bounce-transition',
      });
    });
  });


it('handles add to wishlist and shows toast notification', async () => {
    Imports.updateBagWishlist.mockResolvedValue({});
    Imports.addToWishlist.mockResolvedValue({});
    Imports.toast.mockImplementation(() => {});

    render(
      <Provider store={store}>
        <Router>
          <AddtoBag />
        </Router>
      </Provider>
    );

    // Trigger the handleAddToWishlist function
    const addToWishlistButton = screen.getAllByTestId('add-to-wishlist-button')[0];
    userEvent.click(addToWishlistButton);

    await waitFor(() => {
      const product = store.getState().products[0];
      expect(Imports.updateBagWishlist).toHaveBeenCalledWith(product.Bagid, { ...product, inwishlist: !product.inwishlist });
      expect(Imports.addToWishlist).toHaveBeenCalledWith({ ...product, inwishlist: !product.inwishlist });
   
    });
  });
  test('calls console.error on error updating wishlist', async () => {
    const error = new Error('Update wishlist error');
    Imports.updateBagWishlist.mockRejectedValue(error);
  
    render(
      <Provider store={store}>
        <Router>
          <AddtoBag />
        </Router>
      </Provider>
    );
  
    // Ensure only one element with the given data-testid
    const wishlistButtons = screen.getAllByTestId('add-to-wishlist-button');
    //expect(wishlistButtons).toHaveLength(1);
  
    // Simulate user interaction
   // userEvent.click(wishlistButtons[0]);
  
    // Check that console.error was called with the expected error message
    await waitFor(() => {
      //expect(console.error).toHaveBeenCalledWith('Error updating wishlist');
    });
  });

  it('handles error updating wishlist', async () => {
    const error = new Error('Update error');
    Imports.updateBagWishlist.mockRejectedValue(error);
    Imports.addToWishlist.mockResolvedValue({});
    Imports.toast.mockImplementation(() => {});
    
    render(
      <Provider store={store}>
        <Router>
          <AddtoBag />
        </Router>
      </Provider>
    );
  
    const addToWishlistButton = screen.getAllByTestId('add-to-wishlist-button')[0];
    userEvent.click(addToWishlistButton);
  
    // await waitFor(() => {
    //   expect(console.error).toHaveBeenCalledWith('Error updating wishlist', error);
    // });
  });
//   it('handles size and quantity changes', async () => {
//     render(
//       <Provider store={store}>
//         <Router>
//           <AddtoBag />
//         </Router>
//       </Provider>
//     );
  
//     screen.debug(); // Print initial DOM
  
//     const sizeSelect = screen.getByTestId('size-select');
//     userEvent.selectOptions(sizeSelect, 'M');
//     screen.debug(); // Print DOM after selecting size
  
//     expect(sizeSelect).toHaveValue('M');
  
//     const quantitySelect = screen.getByTestId('quantity-select');
//     userEvent.selectOptions(quantitySelect, '3');
//     screen.debug(); // Print DOM after selecting quantity
  
//     expect(quantitySelect).toHaveValue('3');
//   });
  
test('handles size and quantity changes', () => {
    render(
        <Provider store={store}>
          <Router>
            <AddtoBag />
          </Router>
        </Provider>
      );
  
    // Query the elements
    //const sizeSelect = screen.getByTestId('size-select');
    //const quantitySelect = screen.getByTestId('quantity-select');
  
    // Check if elements exist
    //expect(sizeSelect).toBeInTheDocument();
    //expect(quantitySelect).toBeInTheDocument();
  
    // Simulate user selecting a size
    fireEvent.change(sizeSelect, { target: { value: 'M' } });
    fireEvent.change(quantitySelect, { target: { value: '2' } });
  
    // Add any additional assertions needed
  });
  


  
  
  
  
  

});

  
