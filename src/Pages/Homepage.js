import React from 'react'
import Imports from '../Components/Imports';
const  Homepage=()=> {

  return (
    <>
    

    <Imports.Navbar/>
      <Imports.Grid sx={{ backgroundColor:"rgb(236,236,236)"}}>
     
     
      <Imports.TitleSwiper  />
      <Imports.CardImages/> 
      <Imports.BlockbusterDeals/>
      <Imports.Sealthedeals/>
     
     
      </Imports.Grid>
      <Imports.Footer/>
      
    
  
    
    
    </>
  )
}

export default Homepage
