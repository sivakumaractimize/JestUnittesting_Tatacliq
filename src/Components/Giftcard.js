
import React from "react";
import Imports from "./Imports";

const Giftcard = () => {
    return (
        <Imports.Grid container justifyContent="center" sx={{ mt: 2 , borderRadius:"10px"}}>
            <Imports.Paper sx={{width:'90%'}}>
            <Imports.Grid
                item
                xs={12}
                sx={{
                    backgroundImage: 'url(https://www.tatacliq.com/src/account/components/img/cliqGiftCardBg.svg)', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center', 
                    height: '400px', 
                    width: '100%', 
                }}
            >
                
                <Imports.Typography sx={{fontWeight:'bold', color:"#DA1C5C", fontSize:'30px', textAlign:'start', ml:2}}>
                    CLIQ Gift Card
                </Imports.Typography>
                <Imports.Grid>
                <img src="https://www.tatacliq.com/src/account/components/img/headerBg.svg" alt="giftcard"></img>
                </Imports.Grid>
                <Imports.Button variant="contained" sx={{ backgroundColor: "#DA1C5C", color: "white", fontWeight: "bold", width:{xs:"55%", md:"20%"}, p: 1,mt:2,mb:2, borderRadius:'100px' ,fontSize:'10px', }} >Send A gift card</Imports.Button>
                
            </Imports.Grid>
            </Imports.Paper>
        </Imports.Grid>
    );
};

export default Giftcard;
