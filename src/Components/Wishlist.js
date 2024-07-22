import React from "react";
import Imports from "./Imports";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  const [filteredWishlist, setFilteredWishlist] = useState([]);
  const [category, setCategory] = useState("all");
  const navigator = useNavigate();

  useEffect(() => {
    fetchApiData();
  }, [dispatch]);

  useEffect(() => {
    filterWishlist(category);
  }, [wishlist, category]);
  

  // Function for getting wishlist products
  const fetchApiData = async () => {
    dispatch(Imports.getWishlistStart());
    try {
      const wishlistData = await Imports.getwishlistProducts();
      dispatch(Imports.getWishlistSuccess(wishlistData));
    } catch (error) {
      dispatch(Imports.getWishlistError(error.message));
    }
  };

  const filterWishlist = (category) => {
    if (category === "all") {
      setFilteredWishlist(wishlist);
    } else {
      setFilteredWishlist(wishlist.filter((product) => product.status === category));
    }
  };

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  // Function for deleting wishlist products
  const handleDeleteWishlist = async (status, wishid, mainid, product) => {
    // Mapping function to correct endpoint
    const statusMap = {
      'Men': 'men',
      'Kids': 'kids',
      'womens': 'womens',
      'Home & Kitchen': 'Home',
    };
    
    const mapStatus = (status) => {
      return statusMap[status] || (status ? status.toLowerCase().replace(/\s+/g, '') : 'default');
    };

    const updatedStatus = mapStatus(status);
    const updatedProduct = { ...product, inwishlist: !product.inwishlist };

    try {
      // Update the product in the wishlist
      await Imports.updateWishlist(updatedStatus, mainid, updatedProduct);

      // Delete the product from the wishlist using the wishid
      await Imports.deleteWishlist(wishid);

      alert('Product deleted successfully');

      // Fetch the updated data to reflect the changes
      fetchApiData();
    } catch (error) {
      console.log('Error deleting wishlist item:', error);
    }
  };

  // Function for adding the products into bag
  const handleAddToBag = async (product) => {
    try {
      await Imports.addTobagproduct(product);
      alert('Product added to bag');
    } catch (error) {
      console.log('Error adding product to bag:');
    }
  };

  return (
    <>
      <Imports.Grid container xs={12} sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', mb: 5 }}>
        <Imports.Grid item xs={10}>
          <Imports.Typography
            sx={{ fontSize: '20px', fontWeight: '900', textAlign: 'start', mt: 3, mb: 2 }}
            data-testid="wishlist-title"
          >
            My Wishlist
          </Imports.Typography>
        </Imports.Grid>

        <Imports.Grid item xs={12}>
          <Imports.Divider sx={{ color: 'black', my: 2 }} />
        </Imports.Grid>

        {wishlist.length > 0 ? (
          <>
            <Imports.Grid item xs={10}>
              <Imports.Grid container gap={2} sx={{ justifyContent: "start" }}>
                <Imports.Grid item>
                  <Imports.Button
                    variant="outlined"
                    onClick={() => handleCategoryChange("all")}
                    sx={{
                      backgroundColor: category === "all" ? "#DA1C5C" : "transparent",
                      color: category === "all" ? "white" : "black"
                    }}
                    data-testid="category-all"
                  >
                    All
                  </Imports.Button>
                </Imports.Grid>
                <Imports.Grid item>
                  <Imports.Button
                    variant="outlined"
                    onClick={() => handleCategoryChange("womens")}
                    sx={{
                      backgroundColor: category === "womens" ? "#DA1C5C" : "transparent",
                      color: category === "womens" ? "white" : "black"
                    }}
                    data-testid="category-womens"
                  >
                    Womens
                  </Imports.Button>
                </Imports.Grid>
                <Imports.Grid item>
                  <Imports.Button
                    variant="outlined"
                    onClick={() => handleCategoryChange("Men")}
                    sx={{
                      backgroundColor: category === "Men" ? "#DA1C5C" : "transparent",
                      color: category === "Men" ? "white" : "black"
                    }}
                    data-testid="category-men"
                  >
                    Mens
                  </Imports.Button>
                </Imports.Grid>
                <Imports.Grid item>
                  <Imports.Button
                    variant="outlined"
                    onClick={() => handleCategoryChange("Kids")}
                    sx={{
                      backgroundColor: category === "Kids" ? "#DA1C5C" : "transparent",
                      color: category === "Kids" ? "white" : "black"
                    }}
                    data-testid="category-kids"
                  >
                    Kids
                  </Imports.Button>
                </Imports.Grid>
                <Imports.Grid item>
                  <Imports.Button
                    variant="outlined"
                    onClick={() => handleCategoryChange("Home & Kitchen")}
                    sx={{
                      backgroundColor: category === "Home & Kitchen" ? "#DA1C5C" : "transparent",
                      color: category === "Home & Kitchen" ? "white" : "black"
                    }}
                    data-testid="category-home-kitchen"
                  >
                    Home and Kitchen
                  </Imports.Button>
                </Imports.Grid>
              </Imports.Grid>
            </Imports.Grid>

            <Imports.Grid container xs={12} sm={10} md={10} sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              {filteredWishlist.map((product) => (
                <Imports.Card
                  key={product.id}
                  sx={{ width: { xs: '48%', sm: '30%', md: '30%' , lg:"17%"}, margin: '1%', overflow: 'hidden' }}
                  data-testid={`product-card-${product.id}`}
                >
                  <Imports.Box sx={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden' }}>
                    <Imports.CardMedia
                      component="img"
                      sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      image={product.image1}
                      alt="img"
                      data-testid={`product-image-${product.id}`}
                    />
                    <Imports.IconButton
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        zIndex: 13,
                        color: 'white',
                        backgroundColor: 'grey',
                      }}
                      onClick={() => handleDeleteWishlist(product.status, product.wishid, product.mainid, product)}
                      data-testid={`delete-button-${product.id}`}
                    >
                      <Imports.DeleteIcon />
                    </Imports.IconButton>
                  </Imports.Box>
                  <Imports.CardContent sx={{ textAlign: "left" }}>
                    <Imports.Button
                      variant="contained"
                      sx={{ backgroundColor: "#DA1C5C", color: "white", fontWeight: "bold", width: "100%", textAlign: 'center', fontSize: { xs: "10px", md: "15px" } }}
                      onClick={() => handleAddToBag(product)}
                      data-testid={`add-to-bag-button-${product.id}`}
                    >
                      Add To Bag
                    </Imports.Button>
                    <Imports.Typography
                      sx={{ fontWeight: "bold", fontSize: { xs: "10px", md: "15px" }, mt:2 }}
                      data-testid={`product-brand-${product.id}`}
                    >
                      {product.brand}
                    </Imports.Typography>
                    <Imports.Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1, fontSize: { xs: "9px", md: "12px" } }}
                      data-testid={`product-name-${product.id}`}
                    >
                      {product.name}
                    </Imports.Typography>
                    <Imports.Typography
                      variant="body1"
                      color="text.primary"
                      sx={{ mb: 1, fontSize: { xs: "9px", md: "12px" } }}
                      data-testid={`product-price-${product.id}`}
                    >
                      <span style={{ color: 'black', marginRight: '8px' }}>₹{product.price}</span>
                      <span style={{ textDecoration: 'line-through', color: 'grey', marginRight: '8px' }}>{product.originalPrice}</span>
                      <span style={{ color: 'green' }}>{product.discount}</span>
                    </Imports.Typography>
                  </Imports.CardContent>
                </Imports.Card>
              ))}
            </Imports.Grid>
          </>
        ) : (
          <Imports.Grid item xs={12} sx={{ textAlign: 'center', mt: 5 , mb:30 }}>
            <img
              src="https://www.tatacliq.com/src/account/components/img/emptyWishlist.svg"
              alt="empty wishlist"
              data-testid="empty-wishlist-image"
            />
            <Imports.Typography
              variant="h6"
              color="text.secondary"
              sx={{ mt: 2 }}
              data-testid="empty-wishlist-message"
            >
              Your Wishlist is Empty!
            </Imports.Typography>
          </Imports.Grid>
        )}
      </Imports.Grid>
    </>
  );
};

export default Wishlist;
