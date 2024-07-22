import {
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_WISHLIST_START,
  GET_WISHLIST_SUCCESS,
  GET_WISHLIST_ERROR,
  GET_ADDTOBAG_START,
  GET_ADDTOBAG_SUCCESS,
  GET_ADDTOBAG_ERROR
} from '../Actions/ActionTypes';

const initialState = {
  products: [],
  wishlist: [],
  addtoBag:[],
  loadingProducts: false,
  loadingWishlist: false,
  loadingAddtoBag:false,
  errorProducts: null,
  errorWishlist: null,
  errorAddtobag:null
};

const Reducer = (state = initialState, action) => {
  // console.log("action type", action)
  switch (action.type) {
    case GET_PRODUCTS_START:
      return {
        ...state,
        loadingProducts: true,
        errorProducts: null,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loadingProducts: false,
        products: action.payload,
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        loadingProducts: false,
        errorProducts: action.payload,
      };
    case GET_WISHLIST_START:
      return {
        ...state,
        loadingWishlist: true,
        errorWishlist: null,
      };
    case GET_WISHLIST_SUCCESS:
      return {
        ...state,
        loadingWishlist: false,
        wishlist: action.payload,
      };
    case GET_WISHLIST_ERROR:
      return {
        ...state,
        loadingWishlist: false,
        errorWishlist: action.payload,
      };
      case GET_ADDTOBAG_START:
      return {
        ...state,
        loadingWishlist: true,
        errorWishlist: null,
      };
    case GET_ADDTOBAG_SUCCESS:
      return {
        ...state,
        loadingWishlist: false,
        products: action.payload,
      };
    case GET_ADDTOBAG_ERROR:
      return {
        ...state,
        loadingWishlist: false,
        errorWishlist: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
