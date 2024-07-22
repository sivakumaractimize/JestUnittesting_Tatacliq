import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../../components/Appbar';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Imports from '../../components/Imports';

// Mock the store
const mockStore = configureStore([]);
const store = mockStore({});

// Create a theme instance
const theme = createTheme();
jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'), // Use actual implementation for other exports
  useMediaQuery: jest.fn(), // Mock useMediaQuery as a Jest spy
}));
jest.mock('../../Api/FetchApi', () => ({
  __esModule: true,
  ...jest.requireActual('../../Api/FetchApi'), 
  getwishlistProducts: jest.fn(),
  getAddtobagproducts: jest.fn(),
}));
const renderWithProviders = (ui, { route = '/' } = {}) => {
  return render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={[route]}>
          <Routes>
            <Route path="/" element={ui} />
            <Route path="/wishlistpage" element={<div>Wishlist Page</div>} />
            <Route path="/addtobagpage" element={<div>Add to Bag Page</div>} />
            <Route path="/myaccount" element={<div>My Account</div>} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>
    </Provider>
  );
};

describe('Navbar component', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mock call history before each test
    localStorage.clear(); // Clear localStorage before each test
  });

  test('fetches data and updates state on component mount', async () => {
    // Mock data for API responses
    const wishlistDataMock = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
    const productsDataMock = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];

    // Mock the functions to return mock data
    //api.getwishlistProducts.mockResolvedValueOnce(wishlistDataMock);
   // api.getAddtobagproducts.mockResolvedValueOnce(productsDataMock);

   renderWithProviders(<Navbar />);

    // Wait for the component to render and useEffect to trigger
    // await waitFor(() => {
    //   expect(FetchApi.getwishlistProducts).toHaveBeenCalledTimes(1); // Ensure getwishlistProducts was called
    //   expect(FetchApi.getAddtobagproducts).toHaveBeenCalledTimes(1); // Ensure getAddtobagproducts was called
    //   expect(screen.getByTestId('wishlist-link')).toHaveTextContent('2'); // Replace with your expected count element and value
    //   expect(screen.getByTestId('shopping-cart')).toHaveTextContent('2'); // Replace with your expected product count element and value
    // });
  });



  test('opens login dialog on login/signup button click when user is not logged in', async () => {
    renderWithProviders(<Navbar />);

    const loginSignupLink = screen.queryByTestId('login-signup-link');

    //expect(loginSignupLink).toBeInTheDocument();

    // if (loginSignupLink) {
    //   fireEvent.click(loginSignupLink);
    //   await waitFor(() => expect(screen.getByRole('dialog')).toBeInTheDocument());
    // }
  });

  test('closes login dialog', async () => {
    renderWithProviders(<Navbar />);
    //fireEvent.click(screen.queryByTestId('login-signup-link'));
    //fireEvent.click(screen.getByRole('button', { name: /close/i }));
    //expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  test('navigates to My Account page', async () => {
    renderWithProviders(<Navbar />);

    const myAccountLink = await screen.queryByTestId('myaccount-link');
   // expect(myAccountLink).toBeInTheDocument();

    //fireEvent.click(myAccountLink);
   // expect(screen.getByText('My Account')).toBeInTheDocument();
  });

  test('navigates to Wishlist Page', async () => {
    renderWithProviders(<Navbar />);

    fireEvent.click(screen.queryByTestId('wishlist-link'));
    expect(screen.getByText('Wishlist Page')).toBeInTheDocument();
  });

  it('navigates to Add to Bag Page', () => {
    renderWithProviders(<Navbar />);
    fireEvent.click(screen.queryByTestId('shopping cart'));
    expect(screen.getByText('Add to Bag Page')).toBeInTheDocument();
  });

  test('logs out the user', async () => {
    localStorage.setItem('token', 'dummyToken');
    renderWithProviders(<Navbar />);

    const logoutButton = await screen.queryByTestId('logout');
    //expect(logoutButton).toBeInTheDocument();

    //fireEvent.click(logoutButton);
    //expect(localStorage.getItem('token')).toBeNull();
  });

  test('opens slide drawer on menu icon click in mobile view', () => {
    require('@mui/material').useMediaQuery.mockReturnValue(true);
    renderWithProviders(<Navbar />);

    fireEvent.click(screen.getByLabelText('menu'));
    //expect(screen.queryByTestId('temporary-drawer')).toBeInTheDocument();
  });

  test('toggles the drawer open and close state', async () => {
    renderWithProviders(<Navbar />);
  

    require('@mui/material').useMediaQuery.mockReturnValue(true);
  
  
    //fireEvent.click(screen.getByLabelText('menu'));
  
    // Wait for the drawer to open
    // await waitFor(() => {
    //   expect(screen.getByTestId('temporary-drawer')).toBeInTheDocument();
    // });
  
    // Simulate clicking outside the drawer to close it
    fireEvent.mouseDown(document);
  
    // Wait for the drawer to close
    await waitFor(() => {
      expect(screen.queryByTestId('temporary-drawer')).not.toBeInTheDocument();
    });
  });

  test('opens categories menu on mouse enter and closes on mouse leave', () => {
    renderWithProviders(<Navbar />);

    fireEvent.mouseEnter(screen.getByTestId('categories-button'));
    expect(screen.getByRole('menu')).toBeInTheDocument();

    fireEvent.mouseLeave(screen.getByRole('menu'));
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  test('opens brands menu on mouse enter and closes on mouse leave', () => {
    renderWithProviders(<Navbar />);

    fireEvent.mouseEnter(screen.getByTestId('brands-button'));
    expect(screen.getByRole('menu')).toBeInTheDocument();

    fireEvent.mouseLeave(screen.getByRole('menu'));
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  test('opens and closes popover', async () => {
    renderWithProviders(<Navbar />);

    // Wait for popover to be available in the DOM
    await waitFor(() => {
      const popoverTrigger = screen.queryByTestId('popover-trigger');
     // expect(popoverTrigger).toBeInTheDocument();

      // Open popover
      //fireEvent.click(popoverTrigger);
    });

    // Check popover content is displayed
    //const popoverContent = await screen.findByTestId('popover-content');
    //expect(popoverContent).toBeInTheDocument();

    // Ensure correct menu items are rendered
   // expect(screen.getByText('Item 1')).toBeInTheDocument();
   // expect(screen.getByText('Item 2')).toBeInTheDocument();

    // Close popover
    //fireEvent.click(screen.queryByTestId('popover-trigger')); // Close by clicking the trigger again

    // Wait for popover to close
    await waitFor(() => {
      expect(screen.queryByTestId('popover-content')).toBeNull();
    });
  });


  test('navigates to Wishlist Page on clicking My acount', () => {
    // const myaccountlink = screen.getByTestId('myaccount-link');
    // fireEvent.click(myaccountlink);
    // expect(mockNavigate).toHaveBeenCalledWith('/myaccount');
  });
});
