
import PuffLoader from "react-spinners/PuffLoader"
import { Grid } from "@mui/material";

function Spinner() {
    

    return (
        <>
       <Grid sx={{display:"flex", justifyContent:"center", alignContent:"center"}}>
        <PuffLoader
        data-testid="puff-loader"
         color="#fc9403" 
         size={150}
         
         
         />
         </Grid>
         <Grid></Grid>
         </>

    );
}

export default Spinner;
