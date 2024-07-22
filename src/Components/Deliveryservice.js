import React from 'react';

import Imports from './Imports';
const DeliveryServices = () => (
    <Imports.Grid container direction="column" sx={{ mt: 2 }}>
        <Imports.Typography variant='h6' sx={{ mt: 2, borderTop: "1px solid grey" }}>Ship To</Imports.Typography>
        
        <Imports.Grid container xs={10} sx={{ border: '1px solid grey', mt: 2, mb: 2, ml: 2, p: 1, alignItems: 'center', justifyContent: 'space-between', borderRadius: "2%" }}>
            <Imports.Typography variant='body1'>Delhi, 531116</Imports.Typography>
            <Imports.Typography variant="h6" sx={{ color: '#DA1C5C' }}>Change Pincode</Imports.Typography>
        </Imports.Grid>

        <Imports.Grid container alignItems="center" sx={{ mt: 2 }}>
            <Imports.Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
                <img src='https://www.tatacliq.com/src/general/components/img/deliveryIcon.svg' alt="Delivery Icon" />
                &nbsp;&nbsp;&nbsp; Delivery By
            </Imports.Typography>
            <Imports.Typography sx={{ fontWeight: 'bold', color: 'black' }}>
                16th JUN
            </Imports.Typography>
        </Imports.Grid>

        <Imports.Grid container alignItems="center" sx={{ mt: 2 }}>
            <Imports.Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
                <img src='https://www.tatacliq.com/src/general/components/img/cod.svg' alt="COD Icon" />
                &nbsp;&nbsp;&nbsp;&nbsp; Cash On Delivery
            </Imports.Typography>
            <Imports.Typography sx={{ fontWeight: 'bold', color: 'green' }}>
                | Available
            </Imports.Typography>
        </Imports.Grid>

        <Imports.Grid container alignItems="center" sx={{ mt: 2 }}>
            <Imports.Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
                <img src='https://www.tatacliq.com/src/general/components/img/returnReplacementIcon.svg' alt="Return Icon" />
                &nbsp;&nbsp;&nbsp; 7 Days Easy Returns
            </Imports.Typography>
            <Imports.Typography sx={{ fontWeight: 'bold', color: '#DA1C5C' }}>
                | Know More
            </Imports.Typography>
        </Imports.Grid>

        <Imports.Grid container xs={10} sx={{ border: '1px solid grey', mt: 2, mb: 2, ml: 2, p: 1, alignItems: 'center', justifyContent: 'space-between', borderRadius: "2%" }}>
            <Imports.Typography variant='h6'>Sold By TCNS Clothing Company Ltd.</Imports.Typography>
            <Imports.Typography variant="h6" sx={{ color: '#DA1C5C' }}>&gt;</Imports.Typography>
        </Imports.Grid>
    </Imports.Grid>
);

export default DeliveryServices;
