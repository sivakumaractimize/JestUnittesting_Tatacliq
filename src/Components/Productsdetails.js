import React from 'react';

import Imports from './Imports';
const ProductDetails = () => (
    <Imports.Grid sx={{ borderTop: '1px solid grey', borderBottom: "1px solid grey", }}>
        <Imports.Typography variant='h6' sx={{ mt: 2 }}>Product Details</Imports.Typography>
        <Imports.Typography>
            Give your wardrobe a fashionable spin with this navy kurta from W. Tailored to sartorial perfection from premium quality fabric, it assures a soft and soothing touch against your skin.
        </Imports.Typography>

        <Imports.Grid item xs={4} container direction="column" spacing={2}>
        <Imports.Grid item container sx={{ mt: 2 }} justifyContent="space-between" alignItems="center">
                <Imports.Typography sx={{ backgroundColor: "#F2F9F9", textAlign: 'left', color: "black", p: 1, }}>
                    Fit
                </Imports.Typography>
                <Imports.Typography sx={{ textAlign: 'right', p: 1 }}>
                  Regular Fit
                </Imports.Typography>
            </Imports.Grid>
           
            <Imports.Grid item container sx={{ mt: 2 }} justifyContent="space-between" alignItems="center">
                <Imports.Typography sx={{ backgroundColor: "#F2F9F9", textAlign: 'left', color: "black", p: 1,}}>
                    Pattern
                </Imports.Typography>
                <Imports.Typography sx={{ textAlign: 'right', p: 1 }}>
                    Floral
                </Imports.Typography>
            </Imports.Grid>
        </Imports.Grid>

        <Imports.Grid container xs={10} sx={{ border: '1px solid grey', mt: 2, mb: 2, ml: 2, p: 1, alignItems: 'center', justifyContent: 'space-between', borderRadius: "2%" }}>
            <Imports.Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                <img src='https://www.tatacliq.com/src/pdp/components/img/moreProduct.svg' alt="More Product" />
                <Imports.Grid item sx={{ ml: 1 }}>
                    <Imports.Typography variant='body1'>More Product Information</Imports.Typography>
                    <Imports.Typography variant='body1'>Manufacturing, Packaging & Import info</Imports.Typography>
                </Imports.Grid>
            </Imports.Grid>
            <Imports.Grid item>
                <Imports.Typography variant="h6" sx={{ color: 'black' }}>&gt;</Imports.Typography>
            </Imports.Grid>
        </Imports.Grid>

        <Imports.Grid sx={{ borderTop: '1px solid grey' }}>
            <Imports.Typography variant='h6' sx={{ mt: 2 }}>Customers thought the product's fit was</Imports.Typography>
            <Imports.Grid container alignItems="center" sx={{ mt: 1 }}>
                <Imports.Grid item sx={{ ml: 1 }}>
                    As expected (82%)
                </Imports.Grid>
                <Imports.Grid item sx={{ width:{xs:"40%", sm:"60%"}, ml: 2 }}>
                    <Imports.LinearDeterminate progress={82} />
                </Imports.Grid>
            </Imports.Grid>
            <Imports.Grid container alignItems="center" sx={{ mt: 1 }}>
                <Imports.Grid item sx={{ ml: 1 }}>
                    Too Tight (12%)
                </Imports.Grid>
                <Imports.Grid item sx={{ width:{xs:"40%", sm:'60%'}, ml:{xs:4, sm:5} }}>
                    <Imports.LinearDeterminate progress={12} />
                </Imports.Grid>
            </Imports.Grid>
            <Imports.Grid container alignItems="center" sx={{ mt: 1 }}>
                <Imports.Grid item sx={{ ml: 1 }}>
                    Too Loose (6%)
                </Imports.Grid>
                <Imports.Grid item sx={{ width: {xs:"40%", sm:"60%"},ml:{xs:5, sm:6}}}>
                    <Imports.LinearDeterminate progress={6} />
                </Imports.Grid>
            </Imports.Grid>
        </Imports.Grid>

        <Imports.BrandInfo />
    </Imports.Grid>
);

export default ProductDetails;
