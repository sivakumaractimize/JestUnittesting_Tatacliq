import React from "react";
import Imports from "./Imports";

const Address = () => {
    return (
        <Imports.Grid container justifyContent="center" sx={{ mt: 2 }}>
            <Imports.Grid item xs={12} md={10} sx={{ backgroundColor:'white', textAlign: "start", borderRadius: '10px', p: 2 }}>
                <Imports.Grid item sx={{ ml: 2, color: 'grey' }} >
                    <Imports.Typography sx={{ fontWeight: 'bold', color: 'black' }}>Siva Kumar V</Imports.Typography>
                    <Imports.Typography>Mandapeta East Godavari</Imports.Typography>
                    <Imports.Typography>533308 IN</Imports.Typography>
                    <Imports.Typography>Ph.No : 7032514136</Imports.Typography>
                </Imports.Grid>
                <Imports.Divider sx={{ my: 2 }} />
                <Imports.Grid container>
                    <Imports.Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Imports.Typography sx={{ mr: 2, cursor: 'pointer', color:'grey' }}>Delete</Imports.Typography>
                        <Imports.Button
                            variant="contained"
                            sx={{
                                backgroundColor: "white",
                                color: "black",
                                fontWeight: "bold",
                                width: { xs: "55%",sm:'30%', md: "30%" },
                                p: 1,
                                borderRadius: '100px',
                                fontSize: '10px',
                                border: '1px solid black'
                            }}
                        >
                            Edit Address
                        </Imports.Button>
                    </Imports.Grid>
                </Imports.Grid>
            </Imports.Grid>
            <Imports.Grid item xs={12} md={10} sx={{ backgroundColor: "white", textAlign: "start", borderRadius: '10px', mt:5, display:"flex", justifyContent:'center', alignItems:"center", height:"200px" }}>
                
            <Imports.Button
                            variant="contained"
                            sx={{
                                backgroundColor: "white",
                                color: "black",
                                fontWeight: "bold",
                                width:{ xs: "55%",sm:'30%', md: "30%" },
                                p: 1,
                                borderRadius: '100px',
                                fontSize: '10px',
                                border: '1px solid black',
                                height:'30px'
                            }}
                        >
                            Add New Address
                        </Imports.Button>
                
            </Imports.Grid>
        </Imports.Grid>
    );
};

export default Address;
