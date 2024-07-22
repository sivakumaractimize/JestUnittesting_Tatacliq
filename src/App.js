import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Store from './Redux/Store';
import React from 'react';
import Homepage from './Pages/Homepage';
import Productspage from './Pages/Productspage';
import InnerProductspage from './Pages/InnerProductsPage';
import WishlistPage from './Pages/WishlistPage';
import AddTObagPage from './Pages/AddtoBagpage';
import Myaccount from './Pages/Myaccountpage';

const theme = createTheme();

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/productpage' element={<Productspage />} />
            <Route path='/Innerproductspage' element={<InnerProductspage />} />
            <Route path='/wishlistpage' element={<WishlistPage />} />
            <Route path='/addtobagpage' element={<AddTObagPage />} />
            <Route path='/myaccount/*' element={<Myaccount />} />
          </Routes>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
