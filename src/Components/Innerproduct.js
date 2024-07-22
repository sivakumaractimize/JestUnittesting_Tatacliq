import React, { useState } from 'react';
import Imports from './Imports';
import ImageSelectorDialog from './Innerproduct/DilogBox';
import { useNavigate } from 'react-router-dom';

const InnerProduct = ({ product }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const category = product?.status || 'default';
  const navigator = useNavigate();

  const handleImageClick = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  const defaultImageURL = "https://t3.ftcdn.net/jpg/03/45/05/92/360_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg";

  const handleWishlistToggle = async (product, event) => {
    event.stopPropagation();

    try {
      const updatedProduct = { ...product, inwishlist: !product.inwishlist };
      await Imports.updateWishlist(category, product.mainid, updatedProduct);
        alert('Product added to wishlist');
        await Imports.addToWishlist(updatedProduct);
      
    } catch (error) {
      console.error("Error updating wishlist:", error);
    }
  };

  const handleAddToBag = async (product) => {
    const updatedProduct = { ...product, inBag: !product.inBag };
    const status = product.status;
    const mainid = product.mainid;

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

    try {
      console.log(`Original Status: ${status}, Mapped Status: ${updatedStatus}`);

      // Update the product in the bag
      await Imports.updateBag(updatedStatus, mainid, updatedProduct);
      if (product.inBag) {
        navigator('/addtobagpage'); // Use navigate function for routing
      } else {
        alert('Product added to bag');
        await Imports.addTobagproduct(updatedProduct);
        
      }
    } catch (error) {
      console.error('Error updating bag:', error);
    }
  };


  const renderCard = (imageUrl, index) => (
    <Imports.Card key={index} sx={{ maxWidth: 300, borderRadius: '5%', position: 'relative', margin: '0 8px' }}  data-testid={`card-${index}`} onClick={handleImageClick}>
      <Imports.CardMedia
        component="img"
        height="auto"
        image={imageUrl ? imageUrl : defaultImageURL}
        alt={`image-${index}`}
        data-testid={`card-image-${index}`}
      />
      {index === 1 && (
        <Imports.IconButton
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 13,
            color: product.inwishlist ? 'red' : 'black',
            backgroundColor: 'white',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: product.inwishlist ? 'red' : 'white',
            },
          }}
          data-testid="wishlist-toggle"
          onClick={(e) => handleWishlistToggle(product, e)}
           
        >
          {product.inwishlist ? <Imports.FavoriteIcon /> : <Imports.FavoriteBorderIcon />}
        </Imports.IconButton>
      )}
    </Imports.Card>
  );

  const renderSizeOption = (size) => (
    <Imports.Typography key={size} sx={{ fontSize: '15px', padding: '8px 15px', border: '1px solid grey', borderRadius: '10%', margin: '0 8px' }}  data-testid={`size-option-${size}`}>
      {size}
    </Imports.Typography>
  );

  return (
    <Imports.Grid container sx={{ display: 'flex', justifyContent: 'start' }}>
      <Imports.Grid item xs={12} md={6} sx={{ display: { xs: "none", md: 'block' } }}>
        <Imports.Grid sx={{ display: 'flex', justifyContent: 'end', mt: 3, mr: 2 }}>
          {product.imageUrls && product.imageUrls.slice(0, 2).map((imageUrl, index) => renderCard(imageUrl, index))}
          <ImageSelectorDialog imgUrls={product.imageUrls} open={openDialog} onClose={handleCloseDialog} />
        </Imports.Grid>
        <Imports.Grid item sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
          {product.imageUrls && product.imageUrls.slice(2, 4).map((imageUrl, index) => renderCard(imageUrl, index + 2))}
        </Imports.Grid>
      </Imports.Grid>
      <Imports.Grid item xs={12} sx={{ display: { xs: "block", md: 'none' } }}>
        <Imports.ResponsiveViewImages imgUrls={product.imageUrls} />
      </Imports.Grid>
      <Imports.Grid item xs={12} sm={11} md={5} sx={{ mt: 2, ml: { xs: 1, sm: 2 } }}>
        <Imports.Grid item sx={{ display: 'flex', mt: 1 }}>
          <Imports.Typography variant="body1">Home &gt; &nbsp;</Imports.Typography>
          <Imports.Typography variant="body1">{product.status} &gt; &nbsp;</Imports.Typography>
          <Imports.Typography variant="body1">Ethenic Wear &gt; &nbsp;</Imports.Typography>
          <Imports.Typography variant="body1">{product.innerstatus} &gt; &nbsp;</Imports.Typography>
          <Imports.Typography variant="body1">{product.brand}</Imports.Typography>
        </Imports.Grid>
        <Imports.Grid item sx={{ mt: 1, display: 'flex', justifyContent: 'start' }}>
          <Imports.Chip
            sx={{ fontSize: '12px', backgroundColor: '#FDF4F7', color: 'grey' }}
            label={
              <span  data-testid="popular-chip">
                <Imports.FavoriteBorderIcon sx={{ color: 'pink', verticalAlign: 'middle' }} />
                &nbsp;Popular: Recently wishlisted 344 times
              </span>
            }
          />
        </Imports.Grid>
        <Imports.Grid item sx={{ mt: 1, textAlign: 'start' }}>
        <Imports.Typography variant="h6" data-testid="product-brand">{product.brand}</Imports.Typography>
          <Imports.Typography variant="p" data-testid="product-name">{product.name}</Imports.Typography>
          <Imports.Typography sx={{ mt: 2 }} variant="h6" data-testid="product-original-price">MRP : ₹{product.originalPrice}</Imports.Typography>
          <Imports.Typography variant="p" data-testid="product-inclusive-taxes">Inclusive of all taxes</Imports.Typography>
          <Imports.Grid item sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <Imports.Grid item sx={{ backgroundColor: 'green', color: 'white', fontSize: '17px', display: 'flex', alignItems: 'center', padding: '0 8px', marginRight: '8px' }}>
              {product.rating}<Imports.Rating name="read-only" value={1} max={1} readOnly size="small" sx={{ color: 'white', ml: 0.5 }} />
            </Imports.Grid>
            <Imports.Typography data-testid="product-reviews">{product.reviews} Ratings</Imports.Typography>
          </Imports.Grid>
          <Imports.Typography variant="p">Earn <img src='https://www.tatacliq.com/src/account/components/Neupass_CircleBG.svg' alt='nupass' style={{ width: '12px' }} /> 5.19 Neucoins on this order</Imports.Typography>
          <Imports.Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, borderTop: '1px solid grey', borderBottom: '1px solid grey' }}>
            <Imports.Grid item sx={{ display: 'flex', alignItems: 'center', mt: 1, mb: 1 }}>
              <Imports.IconButton
                sx={{
                  border: '1px solid green',
                  borderRadius: '50%',
                  color: product.inwishlist ? 'red' : 'black',
                  backgroundColor: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    color: product.inwishlist ? 'red' : 'white',
                  },
                  padding: 1,
                }}
                 data-testid="percent-icon-button"
              >
                <Imports.PercentIcon />
              </Imports.IconButton>
              <Imports.Typography sx={{ ml: 1 }}>Get this for only</Imports.Typography>
              <Imports.Typography variant="h6" sx={{ color: 'green', ml: 1 }}>₹{product.price}</Imports.Typography>
            </Imports.Grid>
            <Imports.Typography variant="h6" sx={{ color: '#DA1C5C' }}>View Offers</Imports.Typography>
          </Imports.Grid>
          <Imports.Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
            <Imports.Grid item sx={{ display: 'flex', alignItems: 'center', mt: 1, mb: 1 }}>
              <Imports.Typography variant="body1" sx={{ ml: 1 }}>Select Size</Imports.Typography>
            </Imports.Grid>
            <Imports.Typography variant="h6" sx={{ color: '#DA1C5C' }}>Size Guide</Imports.Typography>
          </Imports.Grid>
          <Imports.Grid item sx={{ display: 'flex' }}>
            {['XS', 'S', 'M', 'L', 'XL'].map(renderSizeOption)}
          </Imports.Grid>
          <Imports.Grid item sx={{ display: 'flex', flexDirection: 'column' }}>
            <Imports.Typography variant="p">The model is 5'7" and is wearing size S</Imports.Typography>
            <Imports.Typography variant="p">100% Cotton, Machine Wash</Imports.Typography>
          </Imports.Grid>
          <Imports.Grid item sx={{ borderTop: '1px solid grey', mt: 2 }}>
            <Imports.Typography variant='h6' sx={{ mt: 2 }}>Available Offers</Imports.Typography>
            <Imports.OfferList />
            <Imports.Typography variant="h6" sx={{ color: '#DA1C5C' }}>See 1 more Offers</Imports.Typography>
          </Imports.Grid>
          <Imports.DeliveryServices />
          <Imports.ProductDetails />
          <Imports.Grid container direction="row" justifyContent="space-between" alignItems="center"
            sx={{
              mt: 2, mb: 4,
              position: 'sticky',
              backgroundColor: 'white',
              bottom: 0
            }}>
            <Imports.Grid item xs={1} sx={{ mt: 4, display: { xs: "none", sm: "block" } }}>
              <Imports.ShareOutlinedIcon sx={{ border: "1px solid grey", p: 1, borderRadius: "5% 5%" }} />
            </Imports.Grid>
            <Imports.Grid item xs={1} sx={{ mt: 4, ml: { xs: 2, sm: 0 } }}>
              <Imports.IconButton
                sx={{
                  border: "1px solid grey", p: 1, borderRadius: "5% 5%",
                  color: product.inwishlist ? 'red' : 'black',
                  backgroundColor: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    color: product.inwishlist ? 'red' : 'white',
                  },
                }}
                data-testid="wishlist-toggle"
                
              >
                {product.inwishlist ? <Imports.FavoriteIcon /> : <Imports.FavoriteBorderIcon />}
              </Imports.IconButton>
            </Imports.Grid>
            <Imports.Grid item xs={4} sx={{ mt: 4 }}>
              <Imports.Button
                variant="contained"
                sx={{ backgroundColor: "#DA1C5C", color: "white", fontWeight: "900", width: "100%", p: 1 }}
                onClick={() => {
                  handleAddToBag(product);
                  navigator('/addtobagpage');
                }}
                data-testid="add-to-bag-button"
              >
                Buy Now
              </Imports.Button>
            </Imports.Grid>
            <Imports.Grid item xs={4} sx={{ mt: 4, mr: { xs: 2, sm: 0 } }}>
              <Imports.Button
                variant="contained"
                sx={{ backgroundColor: "#DA1C5C", color: "white", fontWeight: "900", width: "100%", p: 1 }}
                onClick={() => {
                  handleAddToBag(product);
                }}
                data-testid="add-to-bag-button-2"
              >
                {product.inBag ? "Go to Bag" : "Add to Bag"}
              </Imports.Button>

            </Imports.Grid>
          </Imports.Grid>
        </Imports.Grid>
      </Imports.Grid>
      <Imports.Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Imports.Styleswiper status={product.status} />
      </Imports.Grid>
      <Imports.Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Imports.RatingsAndReviews />
      </Imports.Grid>
      <Imports.Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Imports.ShopMore />
      </Imports.Grid>
      <Imports.Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Imports.MoreFrom />
      </Imports.Grid>
      <Imports.Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Imports.FrequentlyBought />
      </Imports.Grid>
      <Imports.Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Imports.ReceantlyView />
      </Imports.Grid>
    </Imports.Grid>
  );
};

export default InnerProduct;
