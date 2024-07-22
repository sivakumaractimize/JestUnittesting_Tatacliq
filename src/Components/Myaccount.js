import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Imports from './Imports';
import MyaccountMenu from './Myaccountmenu';
import Profile from './Profile';
import Address from './Address';
import Giftcard from './Giftcard';
import Notification from './Notifications';

const Myaccount = () => {
    const navigate = Imports.useNavigate();
    const location = useLocation();

    //getting local storage data
    const firstname = localStorage.getItem('firstName');
    const lastname = localStorage.getItem('lastName');
    const fullName = `${firstname} ${lastname}`;
    const mail = localStorage.getItem('mail');

    return (
        <Imports.Grid container sx={{ display: 'flex', backgroundColor: location.pathname === '/myaccount' ? 'white' : '#ECECEC', mt: 5 }}>
            <Imports.MenuGrid />
            <Imports.Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: "end", mt: { xs: 0, md: 5 } }}>
                <Imports.Grid item xs={12} md={10} lg={8} textAlign="start" sx={{ display: { xs: 'none', md: 'block' }, borderRadius: '10px', backgroundColor: 'white' }}>
                    <Imports.Typography sx={{ fontSize: '15px', fontWeight: 'bold', ml: 2, mb: 2, mt: 2 }}>Menu</Imports.Typography>
                    <Imports.MenuItem data-testid="wishlist-link" sx={{ color: 'grey' }} onClick={() => navigate('/wishlistpage')}>
                        <Imports.FavoriteBorderTwoToneIcon />
                        <Imports.Typography sx={{ ml: 2, fontSize: "13px", color: location.pathname === '/wishlistpage' ? 'red' : 'grey' }}>My WishList</Imports.Typography>
                    </Imports.MenuItem>
                    <Imports.MenuItem data-testid="myaccount-link"  sx={{ color: 'grey', mt: 2 }} onClick={() => navigate('/myaccount')}>
                        <Imports.LocalMallOutlinedIcon />
                        <Imports.Typography sx={{ ml: 2, fontSize: "13px", color: location.pathname === '/myaccount' ? 'red' : 'grey' }}>Order History</Imports.Typography>
                    </Imports.MenuItem>
                    <Imports.MenuItem data-testid="address-link" sx={{ color: 'grey', mt: 2 }} onClick={() => navigate('/myaccount/address')}>
                        <Imports.LibraryBooksSharpIcon />
                        <Imports.Typography sx={{ ml: 2, fontSize: "13px", color: location.pathname === '/myaccount/address' ? 'red' : 'grey' }}>Address Book</Imports.Typography>
                    </Imports.MenuItem>
                    <Imports.MenuItem sx={{ color: 'grey', mt: 2 }}>
                        <Imports.LocalOfferSharpIcon />
                        <Imports.Typography sx={{ ml: 2, fontSize: "13px" }}>Brands</Imports.Typography>
                    </Imports.MenuItem>
                    <Imports.MenuItem sx={{ color: 'grey', mt: 2 }}>
                        <Imports.PaymentOutlinedIcon />
                        <Imports.Typography sx={{ ml: 2, fontSize: "13px" }}>Saved Payments</Imports.Typography>
                    </Imports.MenuItem>
                    <Imports.MenuItem data-testid="myaccount-link-1" sx={{ color: 'grey', mt: 2 }} onClick={() => navigate('/myaccount')}>
                        <Imports.NotificationsNoneOutlinedIcon />
                        <Imports.Typography sx={{ ml: 2, fontSize: "13px" }}>Alerts & Coupons</Imports.Typography>
                    </Imports.MenuItem>
                    <Imports.MenuItem data-testid="giftcard-link" sx={{ color: 'grey', mt: 2 }} onClick={() => navigate('/myaccount/giftcard')}>
                        <Imports.CardGiftcardOutlinedIcon />
                        <Imports.Typography sx={{ ml: 2, fontSize: "13px", color: location.pathname === '/myaccount/giftcard' ? 'red' : 'grey' }}>Gift card</Imports.Typography>
                    </Imports.MenuItem>
                    <Imports.MenuItem sx={{ color: 'grey', mt: 2 }}>
                        <Imports.AccountBalanceWalletTwoToneIcon />
                        <Imports.Typography sx={{ ml: 2, fontSize: "13px" }}>CLIQ Cash</Imports.Typography>
                    </Imports.MenuItem>
                    <Imports.MenuItem sx={{ color: 'grey', mt: 2 }} onClick={() => navigate('/myaccount/manage-Notification')}>
                        <Imports.LibraryBooksSharpIcon />
                        <Imports.Typography data-testid="notification-link" sx={{ ml: 2, fontSize: "13px", color: location.pathname === '/myaccount/manage-Notification' ? 'red' : 'grey' }}>Manage Notifications</Imports.Typography>
                    </Imports.MenuItem>
                    <Imports.MenuItem data-testid="profile-link" sx={{ color: 'grey', mt: 2, mb: 2 }} onClick={() => navigate('/myaccount/profile')}>
                        <Imports.SettingsOutlinedIcon />
                        <Imports.Typography sx={{ ml: 2, fontSize: "13px", color: location.pathname === '/myaccount/profile' ? 'red' : 'grey' }}>Profile</Imports.Typography>
                    </Imports.MenuItem>
                </Imports.Grid>
            </Imports.Grid>
            <Imports.Grid item xs={12} md={6} lg={6} sx={{ mt: 5 }}>
                <Routes>
                    <Route path="/" element={<MyaccountMenu />} />
                    <Route path="address" element={<Address />} />
                    <Route path="giftcard" element={<Giftcard />} />
                    <Route path="manage-Notification" element={<Notification />} />
                    <Route path="profile" element={<Profile />} />
                </Routes>
            </Imports.Grid>
            <Imports.Grid item xs={12} md={3} lg={3} sx={{ display: { xs: 'none', md: 'block' }, mt: 10 }}>
                <Imports.Paper sx={{ width: "60%" }}>
                    <Imports.Grid container sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: "center" }}>
                        <Imports.Avatar sx={{ bgcolor: "purple", width: "60px", height: '60px', mt: 2 }}>S</Imports.Avatar>
                        <Imports.Typography sx={{ fontSize: '15px', fontWeight: 'bold', mt: 2 }}>{fullName}</Imports.Typography>
                        <Imports.Typography sx={{ fontSize: '12px', mb: 5 }}>{mail}</Imports.Typography>
                    </Imports.Grid>
                </Imports.Paper>
            </Imports.Grid>
        </Imports.Grid>
    );
};

export default Myaccount;
