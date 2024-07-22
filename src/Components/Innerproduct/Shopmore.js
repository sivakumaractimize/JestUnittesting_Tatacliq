import React from 'react';

import Imports from '../Imports';
const ShopMore = () => {
    return (
        <>
            <Imports.Grid container justifyContent="center"sx={{mt:2}}>
                <Imports.Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 2 }}>
                    <Imports.FiberManualRecordIcon sx={{ color: "grey", fontSize:"14px" }} />
                    <Imports.Divider sx={{ width:{xs:"90px", md:"400px"}, bgcolor: 'grey', height: 0, mx: 1 }} />
                    <Imports.Typography sx={{ mx: 2, fontWeight: 'bold', fontSize:{xs:"8px", sm:"15px"}, color:'black' }}>Shop More</Imports.Typography>
                    <Imports.Divider sx={{ width:{xs:"90px", md:"400px"}, bgcolor: 'grey', height: 0, mx: 1 }} />
                    <Imports.FiberManualRecordIcon sx={{ color: "grey", fontSize:'14px' }} />
                </Imports.Grid>

                <Imports.Grid item xs={12} md={11} sx={{ display: "flex", flexDirection:{xs:"column", md:"row"}, mt: 2, mb: 2 }}>
                    <Imports.Grid container item xs={11} md={4} sx={{ border: '1px solid grey', p: 1, mx: 1, alignItems: 'center', justifyContent: 'space-between',  borderRadius:"3%"}}>
                        <Imports.Typography variant='body1'>More Kurtis & Kurtas By Utsa</Imports.Typography>
                        <Imports.Typography variant="h6">&gt;</Imports.Typography>
                    </Imports.Grid>
                    
                    <Imports.Grid container item xs={11} md={4} sx={{ border: '1px solid grey', p: 1, mx: 1, alignItems: 'center', justifyContent: 'space-between',  borderRadius:"3%"}}>
                        <Imports.Typography variant='body1'>More Products by Utsa</Imports.Typography>
                        <Imports.Typography variant="h6">&gt;</Imports.Typography>
                    </Imports.Grid>
                    
                    <Imports.Grid container item xs={11} md={4} sx={{ border: '1px solid grey', p: 1, mx: 1, alignItems: 'center', justifyContent: 'space-between', borderRadius: "3%" }}>
                        <Imports.Typography variant='body1'>More Products Under ₹1500</Imports.Typography>
                        <Imports.Typography variant="h6">&gt;</Imports.Typography>
                    </Imports.Grid>
                </Imports.Grid>
            </Imports.Grid>
        </>
    )
}

export default ShopMore;
