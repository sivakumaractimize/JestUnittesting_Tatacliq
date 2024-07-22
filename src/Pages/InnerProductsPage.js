import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Imports from '../Components/Imports';

const theme = createTheme({
  typography: {
    fontSize: 12,
    h6: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: '12px',
      '@media (min-width:600px)': {
        fontSize: '16px',
      },
    },
    body1: {
      color: 'dark',
      fontWeight: '600',
      fontSize: '10px',
      '@media (min-width:600px)': {
        fontSize: '14px',
      },
    },
    p: {
      fontSize: '10px',
      color: 'grey',
      fontWeight: '400',
      '@media (min-width:600px)': {
        fontSize: '14px',
      },
    },
  },
});

const InnerProductspage = () => {
  
  const location = Imports.useLocation();
  const { product } = location.state; 

 

  return (
    <>
      
        <ThemeProvider theme={theme}>
          <Imports.Navbar />
          <Imports.InnerProduct product={product} /> 
          <Imports.Footer />
        </ThemeProvider>
    
    </>
  );
};

export default InnerProductspage;
