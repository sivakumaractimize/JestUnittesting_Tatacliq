import React from 'react';
import Imports from './Imports';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const AddtoBag = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector((state) => state.products);
    console.log("produts in bag", products)
    const [sizes, setSizes] = useState({});
    const [quantities, setQuantities] = useState({});
    const [totalCost, setTotalCost] = useState(0);

    const handleSizeChange = (productId, event) => {
        setSizes(prevSizes => ({
            ...prevSizes,
            [productId]: event.target.value,
        }));
    };

    const handleQuantityChange = (productId, event) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: event.target.value,
        }));
    };

    useEffect(() => {
        fetchProducts();
    }, [dispatch]);
    // function for getaddtobag products
    const fetchProducts = async () => {
        dispatch(Imports.getaddtobagStart());
        try {
            const productsData = await Imports.getAddtobagproducts();
            dispatch(Imports.getaddtobagSuccess(productsData));
        } catch (error) {
            dispatch(Imports.getaddtobagError(error.message));
            console.error('Error fetching products:');
        }
    };


    useEffect(() => {
        const calculateTotalCost = () => {//calulate the product total cost
            let total = 0;
            products.forEach(product => {
                const quantity = quantities[product.id] || 1;
                total += product.price * quantity;
            });
            setTotalCost(total);
        };

        calculateTotalCost();
    }, [quantities, products]);
    //delete product and update the bag status from bag
    const handleDeleteAddtobag = async (Bagid, status, mainid, product) => {
        const updatedProduct = { ...product, inBag: !product.inBag };
        const statusMap = {
            'Men': 'men',
            'Kids': 'kids',
            'womens': 'womens',
            'Home & Kitchen': 'Home',
        };

        const mapStatus = (status) => {
            return statusMap[status] || (status ? status.toLowerCase().replace(/\s+/g, '') : 'default');
        };

        try {
            console.log(`Deleting product with Bagid: ${Bagid}`);
            await Imports.deleteAddtobagproduct(Bagid);

            const updatedStatus = mapStatus(status);
            await Imports.updateBag(updatedStatus, mainid, updatedProduct);

            Imports.toast.error('Product Removed From bag', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Imports.Bounce,
            });
            fetchProducts();
        } catch (error) {

            Imports.toast.error('Error deleting product from bag', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Imports.Bounce,
            });
        }
    };

    //function for update and add to wishlist
    const handleAddWishlist = async (product, inwishlist) => {
        const updatedProduct = { ...product, inwishlist: !product.inwishlist };
        try {
            await Imports.updateBagWishlist(product.Bagid, updatedProduct);

            if (!inwishlist) {
                await Imports.addToWishlist(updatedProduct);
                Imports.toast('Product Added to Wishlist..!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Imports.Bounce,
                });
            }

            fetchProducts();

        } catch (error) {
            console.error('Error updating wishlist');
        }
    };

    return (
        <Imports.Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center', mb: 5 }}>
            <Imports.Grid item xs={10}>
                <Imports.Typography sx={{ fontSize: '20px', fontWeight: '900', textAlign: 'start', mt: 3, mb: 2 }}>
                    My Bag
                </Imports.Typography>
            </Imports.Grid>
            {Array.isArray(products) && products.length > 0 ? (
                <Imports.Grid container sx={{ justifyContent: 'center', mb: 5 }}>
                    <Imports.Grid item xs={12} md={7} sx={{ p: 2 }}>
                        {products.map(product => (
                            <Imports.Grid container key={product.id} sx={{ mb: 4, border: '1px solid #d0d5db' }}>
                                <Imports.Grid item xs={4} sx={{ mt: 2 }}>
                                    <img src={product.image1} alt={product.name} style={{ width: '50%' }} />
                                </Imports.Grid>
                                <Imports.Grid item xs={8} sx={{ mt: 2 }}>
                                    <Imports.Grid sx={{ display: 'flex', justifyContent: 'space-between', mr: 1 }}>
                                        <Imports.Grid textAlign="start">
                                            <Imports.Typography variant="h6" sx={{ fontSize: "15px" }}>{product.name}</Imports.Typography>
                                            <Imports.Typography variant="body1" color="textSecondary">₹{product.price}</Imports.Typography>
                                            <Imports.Typography variant="body2" color="textSecondary">Color: Red</Imports.Typography>
                                        </Imports.Grid>
                                        <Imports.Grid textAlign="end" sx={{ ml: 1 }}>
                                            <Imports.Box display="flex" alignItems="center">
                                                <Imports.LocalShippingSharpIcon />
                                                <Imports.Typography variant="body2" color="textSecondary" sx={{ fontSize: "10px", ml: 0.5 }}>
                                                    Delivery by June 22
                                                </Imports.Typography>
                                            </Imports.Box>
                                        </Imports.Grid>
                                    </Imports.Grid>
                                    <Imports.Grid container spacing={2} alignItems="center" sx={{ mt: 2 }}>
                                        <Imports.Grid item xs={6} sm={4}>
                                            <Imports.Typography sx={{ textAlign: 'start', fontSize: '10px' }}>Size</Imports.Typography>
                                            {/* <Imports.Select
                                                 data-testid={`size-select-${product.id}`}
                                                value={sizes[product.id] || 'L'}
                                                onChange={(event) => handleSizeChange(product.id, event)}
                                                fullWidth
                                                displayEmpty
                                                sx={{ height: "30px", textAlign: "start" }}
                                            >
                                                <Imports.MenuItem value="S">S</Imports.MenuItem>
                                                <Imports.MenuItem value="M">M</Imports.MenuItem>
                                                <Imports.MenuItem value="L">L</Imports.MenuItem>
                                                <Imports.MenuItem value="XL">XL</Imports.MenuItem>
                                            </Imports.Select> */}
                                            <Imports.Select
                                                data-testid={`size-select-${product.id}`}
                                                value={sizes[product.id] || 'L'} // Adjust this to your state
                                                onChange={(event) => handleSizeChange(product.id, event)}
                                                fullWidth
                                                displayEmpty
                                                sx={{ height: "30px", textAlign: "start" }}
                                            >
                                                {['S', 'M', 'L', 'XL'].map((size) => (
                                                    <Imports.MenuItem key={size} value={size}>{size}</Imports.MenuItem>
                                                ))}
                                            </Imports.Select>

                                        </Imports.Grid>
                                        <Imports.Grid item xs={6} sm={4}>
                                            <Imports.Typography sx={{ textAlign: 'start', fontSize: '10px' }}>Qty</Imports.Typography>
                                            {/* <Imports.Select
                                                data-testid={`quantity-select-${product.id}`}
                                                value={quantities[product.id] || 1}
                                                onChange={(event) => handleQuantityChange(product.id, event)}
                                                fullWidth
                                                displayEmpty

                                                sx={{ height: "30px", textAlign: "start" }}
                                            >
                                                {[1, 2, 3, 4, 5].map((qty) => (
                                                    <Imports.MenuItem key={qty} value={qty}>{qty}</Imports.MenuItem>
                                                ))}
                                            </Imports.Select> */}
                                            <Imports.Select
                                                data-testid={`quantity-select-${product.id}`}
                                                value={quantities[product.id] || 1}
                                                onChange={(event) => handleQuantityChange(product.id, event)}
                                                fullWidth
                                                displayEmpty
                                                sx={{ height: "30px", textAlign: "start" }}
                                            >
                                                {[1, 2, 3, 4, 5].map((qty) => (
                                                    <Imports.MenuItem key={qty} value={qty}>{qty}</Imports.MenuItem>
                                                ))}
                                            </Imports.Select>
                                        </Imports.Grid>
                                    </Imports.Grid>
                                    <Imports.Divider sx={{ mt: 2, }} />


                                    <Imports.Grid container sx={{ marginTop: 2, display: 'flex', justifyContent: 'end', mb: 1 }}>

                                        <Imports.Grid xs={6} md={6} lg={3} >
                                            <Imports.Typography
                                                variant='body2'
                                                sx={{

                                                    color: product.inwishlist ? 'gray' : 'primary',
                                                    cursor: product.inwishlist ? 'not-allowed' : 'pointer',
                                                    display: 'flex',
                                                    "&:hover": {
                                                        color: !product.inwishlist && '#fc7703',
                                                        fontWeight: !product.inwishlist && 'bold',
                                                    },
                                                }}
                                                data-testid="add-to-wishlist-button"
                                                onClick={product.inwishlist ? null : () => handleAddWishlist(product, product.inwishlist)}
                                            >
                                                <Imports.FavoriteBorderTwoToneIcon sx={{ fontSize: '19px', mr: 1 }} />
                                                Save to wishlist
                                            </Imports.Typography>
                                        </Imports.Grid>

                                        <Imports.Grid xs={3}>

                                            <Imports.Typography
                                                variant='body2'
                                                sx={{


                                                    color: 'gray',
                                                    cursor: 'pointer',
                                                    "&:hover": {
                                                        color: 'red',
                                                        fontWeight: 'bold',
                                                    },


                                                }}
                                                onClick={() => handleDeleteAddtobag(product.Bagid, product.status, product.mainid, product)}
                                            >
                                                Remove
                                            </Imports.Typography>
                                        </Imports.Grid>


                                    </Imports.Grid>
                                </Imports.Grid>
                            </Imports.Grid>
                        ))}
                    </Imports.Grid>
                    <Imports.Grid item xs={11} md={3} sx={{ mt: 2 }}>
                        <Imports.Grid item xs={12} sx={{ display: "flex", justifyContent: "space-between", border: '1px solid #d0d5db' }}>
                            <Imports.Typography sx={{ fontSize: "15px", fontWeight: "bold", p: 1 }}>Deliver To</Imports.Typography>
                            <Imports.Typography variant='body2' color="#DA1C5C" sx={{ p: 1 }}>change</Imports.Typography>
                        </Imports.Grid>
                        <Imports.Grid item xs={12} sx={{ display: "flex", justifyContent: "space-between", border: '1px solid #d0d5db' }}>
                            <Imports.Typography sx={{ fontSize: "15px", fontWeight: "bold", p: 1 }}>111011, Delhi</Imports.Typography>
                        </Imports.Grid>
                        <Imports.Grid container item xs={12} sx={{ border: '1px solid #d0d5db', p: 1, alignItems: 'center', justifyContent: 'space-between', borderRadius: "2%", mt: 2 }}>
                            <Imports.Box display="flex" alignItems="center">
                                <Imports.CardGiftcardSharpIcon />
                                <Imports.Typography variant="body2" sx={{ fontSize: "15px", fontWeight: "bold", ml: 0.5 }}>
                                    Check For Coupons
                                </Imports.Typography>
                            </Imports.Box>
                            <Imports.Typography variant="h6">&gt;</Imports.Typography>
                        </Imports.Grid>
                        <Imports.Grid sx={{ border: '1px solid #d0d5db' }}>
                            <Imports.Grid item xs={12} sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Imports.Typography variant='body2' sx={{ p: 1 }}>Bag Total</Imports.Typography>
                                <Imports.Typography variant='body2' sx={{ p: 1 }}>₹{totalCost.toFixed(2)}</Imports.Typography>
                            </Imports.Grid>
                            <Imports.Grid item xs={12} sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Imports.Typography variant='body2' sx={{ p: 1 }}>Processing Fee</Imports.Typography>
                                <Imports.Box sx={{ display: 'flex', alignItems: 'center', p: 1, justifyContent: 'center' }}>
                                    <Imports.Typography variant='body2' sx={{ textDecoration: "line-through", mr: 1 }}>
                                        ₹99.00
                                    </Imports.Typography>
                                    <Imports.Typography variant='body2'>
                                        ₹29.00
                                    </Imports.Typography>
                                </Imports.Box>
                            </Imports.Grid>
                            <Imports.Grid item xs={12} sx={{ display: "flex", justifyContent: "space-between", backgroundColor: "#F9F9F9" }}>
                                <Imports.Typography sx={{ fontSize: "10px", p: 1 }}>See how this is calculated
                                </Imports.Typography>
                                <Imports.Typography variant='body2' color="#DA1C5C" sx={{ fontSize: "10px" }}><Imports.KeyboardArrowDownSharpIcon /></Imports.Typography>
                                <Imports.Typography variant='body2' color="#DA1C5C" sx={{ p: 1, fontSize: "10px" }}>Know More</Imports.Typography>
                            </Imports.Grid>
                            <Imports.Grid item xs={12} sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Imports.Typography variant='body2' sx={{ p: 1 }}>Bag Sub Total</Imports.Typography>
                                <Imports.Typography variant='body2' sx={{ p: 1 }}>₹{(totalCost + 29).toFixed(2)}</Imports.Typography>
                            </Imports.Grid>
                        </Imports.Grid>
                        <Imports.Grid sx={{ border: '1px solid #d0d5db', display: 'flex', justifyContent: "space-between", p: 1 }}>
                            <Imports.Grid>
                                <Imports.Typography sx={{ fontSize: '15px', fontWeight: 'bold' }}>Total</Imports.Typography>
                                <Imports.Typography sx={{ fontSize: '15px', fontWeight: 'bold' }}>₹{(totalCost + 29).toFixed(2)}</Imports.Typography>
                            </Imports.Grid>
                            <Imports.Grid>
                                <Imports.Button variant='contained' sx={{ backgroundColor: "#DA1C5C", borderRadius: "100px" }}>Check out</Imports.Button>
                            </Imports.Grid>
                        </Imports.Grid>
                        <Imports.Grid container item xs={12} sx={{ border: '1px solid #d0d5db', p: 1, alignItems: 'center', justifyContent: 'space-between', borderRadius: "2%", mt: 2 }}>
                            <Imports.Box display="flex" alignItems="center">
                                <Imports.FavoriteBorderIcon />
                                <Imports.Typography variant="body2" sx={{ fontSize: "15px", ml: 0.5 }}>
                                    You have 1 item in your wishlist
                                </Imports.Typography>
                            </Imports.Box>
                            <Imports.Typography>see all</Imports.Typography>
                        </Imports.Grid>
                        <Imports.Grid container item xs={12} sx={{ border: '1px solid #d0d5db', alignItems: 'center', justifyContent: 'space-between', borderRadius: "2%", mt: 2 }}>
                            <Imports.Box display="flex" alignItems="center">
                                <Imports.VerifiedUserIcon sx={{ color: "#339999" }} />
                                <Imports.Typography variant="body2" sx={{ fontSize: "10px", ml: 0.5 }}>
                                    Safe and secure payments. Easy returns. 100% Authentic products.
                                </Imports.Typography>
                            </Imports.Box>
                        </Imports.Grid>
                    </Imports.Grid>
                </Imports.Grid>
            ) : (
                <Imports.Grid item xs={12} sx={{ textAlign: 'center', mt: 5, mb: 30 }}>
                    <img src="https://www.tatacliq.com/src/cart/components/img/emptycard.png" alt="Empty Cart" />
                    <Imports.Typography sx={{ mt: 2, fontWeight: "bold" }}>Your bag is empty! Let’s fill it up shall we?</Imports.Typography>
                    <Imports.Button
                        variant="outlined"

                        sx={{ color: "#DA1C5C", borderColor: "#DA1C5C", fontWeight: "bold", fontSize: { xs: "8px", md: "13px" }, width: { xs: "30%", sm: "20%", lg: "15%" }, mt: 2, borderRadius: "100px" }}
                    >
                        Continue Shopping
                    </Imports.Button>
                    <Imports.Button
                        variant="contained"

                        sx={{ color: "white", backgroundColor: "#DA1C5C", fontWeight: "bold", fontSize: { xs: "8px", md: "13px" }, width: { xs: "40%", sm: "20%", lg: "15%" }, mt: 2, ml: 2, borderRadius: '100px' }}
                    >
                        View Saved Products
                    </Imports.Button>
                </Imports.Grid>
            )}
        </Imports.Grid>
    );
};

export default AddtoBag;
