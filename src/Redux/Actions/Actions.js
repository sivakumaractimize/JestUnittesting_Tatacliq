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
} from './ActionTypes';

export const getProductsStart = () => ({
  type: GET_PRODUCTS_START,
});

export const getProductsSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
});

export const getProductsError = (error) => ({
  type: GET_PRODUCTS_ERROR,
  payload: error,
});

export const getWishlistStart = () => ({
  type: GET_WISHLIST_START,
});

export const getWishlistSuccess = (products) => ({
  type: GET_WISHLIST_SUCCESS,
  payload: products,
});

export const getWishlistError = (error) => ({
  type: GET_WISHLIST_ERROR,
  payload: error,
});
export const getaddtobagStart = () => ({
  type: GET_ADDTOBAG_START,
});

export const getaddtobagSuccess = (data) => ({
  type: GET_ADDTOBAG_SUCCESS,
  payload: data,
});

export const getaddtobagError = (error) => ({
  type: GET_ADDTOBAG_ERROR,
  payload: error,
});
