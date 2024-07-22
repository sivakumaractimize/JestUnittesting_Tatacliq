import React from 'react';
import FrequentboughtSwiper from './FrequentlyboughtSwiper';
import Imports from '../Imports';
const FrequentlyBought = () => {
  return (
    <Imports.Grid container justifyContent="center" sx={{mt:5}}>
      <Imports.Grid item xs={10} sx={{  mt: 2 }}>
        <Imports.Grid container sx={{ justifyContent: "space-between", alignItems: 'center' }}>
          <Imports.Grid item xs={6} sx={{ textAlign: 'left' }}>
            <Imports.Typography variant='h6'>Frequently Bought Together</Imports.Typography>
          </Imports.Grid>
          <Imports.Grid item xs={6} sx={{ textAlign: 'right' }}>
            
            <Imports.Button variant="outlined" sx={{ borderColor: "#DA1C5C", color: "Grey", fontWeight: "900", p: 1, fontSize:{xs:"8px", md:"12px"} }}>View All Products</Imports.Button>
          </Imports.Grid>
        </Imports.Grid>
      </Imports.Grid>

      <Imports.Grid item xs={10} sx={{  mt: 2}}>
        <FrequentboughtSwiper/>
      </Imports.Grid>
    </Imports.Grid>
  );
}

export default FrequentlyBought;
