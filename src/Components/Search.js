import React, { useState, useEffect } from 'react';
import { styled, alpha, createTheme } from '@mui/material/styles';
import { InputBase } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const SearchIconWrapper = styled('div')(({ theme }) => ({
  width: theme.spacing(7),
  height: '90%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  height: '40px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      '320': 320,
      '375': 375,
      '425': 425,
    },
  },
});

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [customTheme.breakpoints.up('320')]: {
      width: '28ch',
      height:'2ch'
    },
    [customTheme.breakpoints.up('375')]: {
      width: '39ch',
    },
    [customTheme.breakpoints.up('425')]: {
      width: '50ch',
    },
    [theme.breakpoints.up('sm')]: {
      width: '58ch',
    },
    [theme.breakpoints.up('md')]: {
      width: '42ch',
    },
    [theme.breakpoints.up('lg')]: {
      width: '50ch',
    },
    [theme.breakpoints.up('xl')]: {
      width: '60ch',
    },
  },
}));

const SearchComponent = () => {
  const placeholders = ['Search for Products', 'Search for Brands', 'Search for Categories'];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [placeholders.length]);

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={placeholders[placeholderIndex]}
        inputProps={{ 'aria-label': 'search' }}
        sx={{ fontSize: { xs: '8px', sm: '15px', md: '15px', lg: '20px', xl: '17px' } }}
      />
    </Search>
  );
};

export default SearchComponent;
