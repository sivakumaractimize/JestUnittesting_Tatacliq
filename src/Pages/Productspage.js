import React from 'react';

import Imports from '../Components/Imports';



const  Productspage=()=> {
 
  const location = Imports.useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');
  console.log(category)




  return (
    <>
   
 
    <Imports.Navbar/>
    
    <Imports.Product category={category} />
    <Imports.Footer/>
      
  
    
  
    </>
  )
}

export default Productspage
