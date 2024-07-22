import React from 'react';
import Imports from './Imports';

const BrandInfo = () => (
    <Imports.Grid 
        sx={{ 
            mb: 2, 
            display: 'flex', 
            justifyContent: "center", 
            flexDirection: "column", 
            borderTop: "1px solid grey", 
            mt: 2 
        }}
    >
        <Imports.Typography variant='h6' sx={{ mt: 2 }}>From The Brand</Imports.Typography>
        
        <Imports.Grid
            item
            xs={12}
            sx={{
                background: "linear-gradient(165.89deg, #fbe8ef 21.19%, #fff 90.98%)",
                display: 'flex',
                justifyContent: 'center',
              
                borderRadius: "3%"
            }}
        >
            <Imports.Grid 
                item 
                xs={10} 
                sx={{ 
                    backgroundColor: "white", 
                    mt: 2, 
                    borderRadius: "3%" 
                }}
            >
                <Imports.Grid sx={{ display: "flex", mt: 2, ml: 2 }}>
                    <img src='https://assets.tatacliq.com/medias/sys_master/images/31578895122462.jpg' width="40px" alt="Brand logo" />
                    <Imports.Typography variant='h6' sx={{ ml: 5 }}>W</Imports.Typography>
                </Imports.Grid>
                <Imports.Typography variant='body2' sx={{ ml: 2, mr: 2, mt: 1 }}>
                    W makes use of clean cuts, smart silhouettes and quality fabric that make it the first choice of every fashion forward woman. Browse through its collection of kurtis and palazzos right here on Tata CliQ.
                </Imports.Typography>
                <Imports.Button 
                    variant='outlined' 
                    sx={{ 
                        color: "#DA1C5C", 
                        width: "90%", 
                        borderColor: "#DA1C5C", 
                        mt: 3, 
                        mb: 3, 
                        ml: 3, 
                        fontWeight: "900" 
                    }}
                >
                    Visit Store
                </Imports.Button>
            </Imports.Grid>
        </Imports.Grid>
    </Imports.Grid>
);

export default BrandInfo;
