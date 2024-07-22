import React from 'react';
import MoreBrandSwiper from './MoreBrandSwiper';
import Imports from '../Imports';
const MoreFrom = () => {
  return (
    <Imports.Grid container justifyContent="center">
      <Imports.Grid item xs={12} md={10} sx={{  mt: 2 }}>
        <Imports.Grid container sx={{ justifyContent: "space-between", alignItems: 'center' }}>
          <Imports.Grid item xs={3} md={6} sx={{ textAlign: 'left' }}>
            <Imports.Typography variant='h6' sx={{fontSize:{xs:"10px"}}}>More From Brand</Imports.Typography>
          </Imports.Grid>
          <Imports.Grid item xs={9} md={6} sx={{ textAlign: 'right' }}>
            <Imports.Button variant="contained" sx={{ backgroundColor: "#DA1C5C", p: 1, fontWeight: '900', fontSize:{xs:"8px", md:"12px"} , mr:1}}>+ Follow Brand</Imports.Button>
            <Imports.Button variant="outlined" sx={{ borderColor: "#DA1C5C", color: "#DA1C5C", fontWeight: "900", p: 1,fontSize:{xs:"8px", md:"12px"} }}>View All Products</Imports.Button>
          </Imports.Grid>
        </Imports.Grid>
      </Imports.Grid>

      <Imports.Grid item xs={10} sx={{  mt: 2}}>
        <MoreBrandSwiper />
      </Imports.Grid>
    </Imports.Grid>
  );
}

export default MoreFrom;
