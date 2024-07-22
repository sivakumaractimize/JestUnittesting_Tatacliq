import React from 'react';
import Imports from './Imports';

const SortingDropdown = () => {
  const [sortValue, setSortValue] = Imports.useState('popularity');


  return (
    <Imports.FormControl variant="outlined" fullWidth>
      <Imports.Select
        data-testid="select"
        value={sortValue}
        IconComponent={Imports.FilterListIcon}
        sx={{ textAlign: 'start' }}
      >
        <Imports.MenuItem value="popularity">Sort by: Popularity</Imports.MenuItem>
        <Imports.MenuItem value="priceLowHigh">Price Low to High</Imports.MenuItem>
        <Imports.MenuItem value="priceHighLow">Price High to Low</Imports.MenuItem>
        <Imports.MenuItem value="newArrivals">New Arrivals</Imports.MenuItem>
        <Imports.MenuItem value="discounts">Discounts</Imports.MenuItem>
      </Imports.Select>
    </Imports.FormControl>
  );
};

export default SortingDropdown;
