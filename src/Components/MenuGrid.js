import React from "react";
import { Grid, MenuItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import LibraryBooksSharpIcon from "@mui/icons-material/LibraryBooksSharp";
import LocalOfferSharpIcon from "@mui/icons-material/LocalOfferSharp";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import AccountBalanceWalletTwoToneIcon from "@mui/icons-material/AccountBalanceWalletTwoTone";

const MenuGrid = () => {
    const navigate = useNavigate();

    return (
        <Grid container xs={12} textAlign="start" sx={{ display: { xs: 'block', md: 'none', backgroundColor: "#ECECEC" } }}>
            <Grid container xs={12} sx={{ display: 'flex', justifyContent: "space-evenly", alignItems: "center", ml:{sm:2} }}>
                <MenuItem sx={{ color: 'grey', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <FavoriteBorderTwoToneIcon />
                    <Typography sx={{ fontSize: { xs: '10px', sm: '15px' } }}>My WishList</Typography>
                </MenuItem>
                <MenuItem sx={{ color: 'grey', display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => navigate('/myaccount')}>
                    <LocalMallOutlinedIcon />
                    <Typography sx={{ fontSize: { xs: '10px', sm: '15px' } }}>Order History</Typography>
                </MenuItem>
                <MenuItem sx={{ color: 'grey', display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 2 }} onClick={() => navigate('/myaccount/address')}>
                    <LibraryBooksSharpIcon />
                    <Typography sx={{ fontSize: { xs: '10px', sm: '15px' } }}>Address Book</Typography>
                </MenuItem>
            </Grid>
            <Grid container xs={12} sx={{ display: 'flex', justifyContent: "space-evenly", alignItems: "center", ml: {  sm: 2 }, mt: 2 }}>
                <MenuItem sx={{ color: 'grey', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <LocalOfferSharpIcon />
                    <Typography sx={{ fontSize: { xs: '10px', sm: '15px' } }}>Brands</Typography>
                </MenuItem>
                <MenuItem sx={{ color: 'grey', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <PaymentOutlinedIcon />
                    <Typography sx={{ fontSize: { xs: '10px', sm: '15px' } }}>Saved Payments</Typography>
                </MenuItem>
                <MenuItem sx={{ color: 'grey', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <NotificationsNoneOutlinedIcon />
                    <Typography sx={{ fontSize: { xs: '10px', sm: '15px' } }}>Alerts & Coupons</Typography>
                </MenuItem>
            </Grid>
            <Grid container xs={12} sx={{ display: 'flex', justifyContent: "space-evenly", alignItems: "center", mt: 2 }}>
                <MenuItem sx={{ color: 'grey', display: 'flex', flexDirection: 'column', alignItems: 'center', ml: { sm: 5 } }} onClick={() => navigate('/myaccount/giftcard')}>
                    <CardGiftcardOutlinedIcon />
                    <Typography sx={{ fontSize: { xs: '10px', sm: '15px' } }}>Gift card</Typography>
                </MenuItem>
                <MenuItem sx={{ color: 'grey', display: 'flex', flexDirection: 'column', alignItems: 'center', ml: { xs: 2, sm: 4 } }}>
                    <AccountBalanceWalletTwoToneIcon />
                    <Typography sx={{ fontSize: { xs: '10px', sm: '15px' } }}>CLIQ Cash</Typography>
                </MenuItem>
                <MenuItem sx={{ color: 'grey', display: 'flex', flexDirection: 'column', alignItems: 'center', ml: { xs: 1, sm: 2 } }} onClick={() => navigate('/myaccount/manage-Notification')}>
                    <LibraryBooksSharpIcon />
                    <Typography sx={{ fontSize: { xs: '10px', sm: '15px' } }}>Manage Notifications</Typography>
                </MenuItem>
            </Grid>
        </Grid>
    );
};

export default MenuGrid;
