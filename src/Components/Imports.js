
import {
    AppBar, Typography, IconButton, Grid, InputBase, useMediaQuery, MenuItem, Menu, Paper, MenuList, ListItemText, Popover, Button, Badge
   ,Tab,Tabs, Divider,Select,CardContent,Card,CardMedia,Chip,Rating,
   ListItem,
   } from '@mui/material';
   import Box from '@mui/material/Box';
   import { styled } from '@mui/material/styles';
   import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import TextField from '@mui/material/TextField';

import {
    FavoriteBorderTwoTone as FavoriteBorderTwoToneIcon,
    ArrowDropDown as ArrowDropDownIcon, Menu as MenuIcon, AccountCircleOutlined as AccountCircleOutlinedIcon,
    LocalMallOutlined as LocalMallOutlinedIcon, NotificationsNoneOutlined as NotificationsNoneOutlinedIcon,
    CardGiftcardOutlined as CardGiftcardOutlinedIcon, AccountBalanceWalletTwoTone as AccountBalanceWalletTwoToneIcon,
    KeyboardArrowDownOutlined as KeyboardArrowDownOutlinedIcon, Logout as LogoutIcon,
    NotificationsOff,
    Logout, SettingsOutlined as SettingsOutlinedIcon,
} from '@mui/icons-material';

import PanoramaHorizontalIcon from '@mui/icons-material/PanoramaHorizontal';
import {  List} from '@mui/material';

import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import LocalShippingSharpIcon from '@mui/icons-material/LocalShippingSharp';
import CardGiftcardSharpIcon from '@mui/icons-material/CardGiftcardSharp';

import LibraryBooksSharpIcon from '@mui/icons-material/LibraryBooksSharp';
import LocalOfferSharpIcon from '@mui/icons-material/LocalOfferSharp';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import Switch from '@mui/material/Switch';
import ListItemButton from '@mui/material/ListItemButton';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import {  FormControl } from '@mui/material';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ListItemIcon from '@mui/material/ListItemIcon';

import SortIcon from '@mui/icons-material/Sort';
import TuneIcon from '@mui/icons-material/Tune';
import FilterListIcon from '@mui/icons-material/FilterList';



import { FavoriteBorder as FavoriteBorderIcon, Percent as PercentIcon, ShareOutlined as ShareOutlinedIcon, Favorite as FavoriteIcon } from '@mui/icons-material';
import { Bounce } from 'react-toastify';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from "@mui/icons-material/Delete";



import VerticalTabs from './BasicTabs';
import BrandTabs from './Megamenu/BrandsTabs';

import { deleteWishlist, getAddtobagproducts, getwishlistProducts, updateWishlist,deleteAddtobagproduct, addToWishlist, updateBagWishlist,addTobagproduct, updateBag } from '../Api/FetchApi';
import { getProductsStart, getProductsSuccess, getProductsError } from '../Redux/Actions/Actions';
import { getWishlistStart, getWishlistSuccess, getWishlistError } from "../Redux/Actions/Actions";
import { getProducts } from '../Api/FetchApi';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { getaddtobagStart, getaddtobagSuccess, getaddtobagError } from '../Redux/Actions/Actions';
import { BsFacebook, BsLinkedin, BsApple } from 'react-icons/bs';
import { FaTwitterSquare } from 'react-icons/fa';
import { AiFillInstagram, AiFillYoutube, AiFillAndroid } from 'react-icons/ai';
import LoginDialog from './Login';
import SearchComponent from './Search';
import SignupDialog from './SignupDilog';

import WomenMenu from './Megamenu/Women';
import MenMenu from './Megamenu/Men';
import KidsFashionMenu from './Megamenu/Kids';
import HomeKitchenMenu from './Megamenu/HomeandKitchen';
import BeautyMenu from './Megamenu/Beauty';
import GadgetsMenu from './Megamenu/Gadget';
import JwelMenu from './Megamenu/Jewellery';
import FashionMenu from './Megamenu/Acceceray';


import Womenbrands from './Megamenu/Brandswomen'
import Menbrands from './Megamenu/Brandsmen';
import FootWearBrands from './Megamenu/FootBrands';
import JewelryBrands from './Megamenu/JewelBrands';
import WatchBrands from './Megamenu/WatchBrands';
import KidsClothingBrands from './Megamenu/Kidsbrands';


//innerproduct

import OfferList from './Bankoffers';
import ProductDetails from './Productsdetails';
import DeliveryServices from './Deliveryservice';
import Styleswiper from './Innerproduct/Styleitwith';
import RatingsAndReviews from './Innerproduct/Rating';
import ShopMore from './Innerproduct/Shopmore';
import MoreFrom from './Innerproduct/MoreFrom';
import FrequentlyBought from './Innerproduct/FrequentlyBought';
import ReceantlyView from './Innerproduct/RecentlyViewed';
import ResponsiveViewImages from './Innerproduct/Responsiveviewimages';
import ImageSelectorDialog from './Innerproduct/DilogBox';
//my accout

import MyaccountMenu from './Myaccountmenu';
import MenuGrid from './MenuGrid';
import Address from './Address';
import Giftcard from './Giftcard';
import Notification from './Notifications';
import Profile from './Profile';
import UsefulLinks from "./UsefulLinks";

//product
import AccordionExpand from './Productsaccordian';
import SortingDropdown from './SortingDropdown';
import SortIconMenu from './Sortmenu';

import LinearDeterminate from './LinerProgress';
import BrandInfo from './Brand';
import ProfileDialog from "./Profiledilogbox"; 


import Navbar from './Appbar';

import Spinner from '../Components/Spinner';

import AddtoBag from '../Components/AddtoBag';

import TitleSwiper from '../Components/Flashpage/TitleSwiper';
import CardImages from '../Components/Flashpage/CardImages';
import BlockbusterDeals from '../Components/Flashpage/BlockbusterDeals';

import Sealthedeals from '../Components/Flashpage/SealtheDeals';
import Footer from '../Components/Footer';
import InnerProduct from '../Components/Innerproduct';

import Myaccount from '../Components/Myaccount';

import Product from '../Components/Product';
import Wishlist from '../Components/Wishlist';

import OfferCard from './Flashpage/OffercardSwiper';
import { ImageList, ImageListItem } from '@mui/material';

import MostwantedDeals from './Flashpage/MostwantedDeals';
import BrandbargainSwiper from './Flashpage/Swipers/Brandbargainswiper';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


import InputLabel from '@mui/material/InputLabel';



const Imports = {

    useEffect,
    useState,
    useLocation,
    Bounce,
    toast,

    Grid,
    AppBar,
    Typography,
    IconButton,
    InputBase,
    useMediaQuery,
    MenuItem,
    Menu,
    Paper,
    MenuList,
    ListItemText,
    Popover,
    Button,
    Badge,
    FavoriteBorderTwoToneIcon,
    ArrowDropDownIcon,
    MenuIcon,
    AccountCircleOutlinedIcon,
    LocalMallOutlinedIcon,
    CardGiftcardOutlinedIcon,
    KeyboardArrowDownOutlinedIcon,
    NotificationsNoneOutlinedIcon,
    Logout,
    AccountBalanceWalletTwoToneIcon,
    NotificationsOff,
    LogoutIcon,
    KeyboardArrowDownSharpIcon,
    VerifiedUserIcon,
    LocalShippingSharpIcon,
    CardGiftcardSharpIcon,
    FavoriteBorderIcon,
    PercentIcon,
    ShareOutlinedIcon,
    FavoriteIcon,
    MdKeyboardArrowUp,
    BsFacebook,
    BsApple,
    BsLinkedin,
    FaTwitterSquare,
    AiFillInstagram,
    AiFillAndroid,
    AiFillYoutube,
    LibraryBooksSharpIcon,
    LocalOfferSharpIcon,
    PaymentOutlinedIcon,
   SettingsOutlinedIcon,
   PanoramaHorizontalIcon,
   ChatOutlinedIcon,
   ThumbUpOffAltIcon,
   AddIcon,
   RemoveIcon,
   ListItemIcon,
   SortIcon,
   TuneIcon,
   FilterListIcon,
   DeleteIcon,
   NavigateBeforeIcon,
   NavigateNextIcon,
   CloseIcon,
   StarIcon,
   FiberManualRecordIcon,
   ArrowForwardIosIcon,



    Link,
    useNavigate,
    Tabs,
    Tab,
    Box,
    Avatar,
    Divider,
    Select,
    CardContent,
    Card,
    CardMedia,
    Chip,
    Rating,
    LinearProgress,
    Dialog,
    DialogActions,
    DialogContent,
    styled,
    HighlightOffIcon,
    TextField,
     Switch,
     ListItemButton,
     Accordion,
     AccordionSummary,
     AccordionDetails,
     DialogTitle,
     FormControl,
     ImageList,
     ImageListItem,
   List,
   ListItem,
   InputLabel,

  
  

    
    

   //api 

   getAddtobagproducts,
   getwishlistProducts,
   deleteAddtobagproduct,
   updateBagWishlist,
   addToWishlist,
   deleteWishlist,
   updateWishlist,
   addTobagproduct,
   getProducts,
   updateBag,

   //actions
   getaddtobagStart,
   getaddtobagSuccess,
   getaddtobagError,
   useDispatch,
   useSelector,
   getProductsStart,
   getProductsSuccess,
   getProductsError,
   getWishlistStart,
   getWishlistSuccess,
   getWishlistError,




// nav bar components
VerticalTabs,
LoginDialog,
BrandTabs,
SearchComponent,
WomenMenu,
MenMenu,
KidsFashionMenu,
HomeKitchenMenu,
BeautyMenu,
GadgetsMenu,
JwelMenu,
FashionMenu,
Menbrands,
Womenbrands,
KidsClothingBrands,
WatchBrands,
JewelryBrands,
FootWearBrands,
//inner product


OfferList,
ProductDetails,
DeliveryServices,
Styleswiper,
ShopMore,
RatingsAndReviews,
MoreFrom,
FrequentlyBought,
ReceantlyView,
ResponsiveViewImages,
ImageSelectorDialog,

SignupDialog,


//my accout

MenuGrid,
MyaccountMenu,
Address,
Giftcard,
Notification,
Profile,
UsefulLinks,

//products
AccordionExpand,
SortingDropdown,
SortIconMenu,

LinearDeterminate,
BrandInfo,
ProfileDialog,


// pages

Navbar,
Spinner,
AddtoBag,

//homepage components
TitleSwiper,
Footer,
CardImages,
BlockbusterDeals,
Sealthedeals,
InnerProduct,

Myaccount,
Product,
Wishlist,
OfferCard,
MostwantedDeals,
BrandbargainSwiper,




}
export default Imports;