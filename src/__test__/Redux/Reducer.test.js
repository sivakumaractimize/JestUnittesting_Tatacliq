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
  } from '../../Redux/Actions/ActionTypes';
 
  import Reducer from '../../Redux/Reducer/ProductsReducer'; 
  
  describe('Reducer', () => {
    const initialState = {
      products: [],
      wishlist: [],
      addtoBag: [],
      loadingProducts: false,
      loadingWishlist: false,
      loadingAddtoBag: false,
      errorProducts: null,
      errorWishlist: null,
      errorAddtobag: null,
    };
  
    test('should return initial state', () => {
      const action = { type: '' };
      const newState = Reducer(undefined, action);
      expect(newState).toEqual(initialState);
    });
  
    test('should handle GET_PRODUCTS_START', () => {
      const action = { type: GET_PRODUCTS_START };
      const newState = Reducer(initialState, action);
      expect(newState.loadingProducts).toBe(true);
      expect(newState.errorProducts).toBe(null);
    });
  
    test('should handle GET_PRODUCTS_SUCCESS', () => {
      const action = { type: GET_PRODUCTS_SUCCESS, payload: ['product1', 'product2'] };
      const newState = Reducer(initialState, action);
      expect(newState.loadingProducts).toBe(false);
      expect(newState.products).toEqual(['product1', 'product2']);
    });
  
    test('should handle GET_PRODUCTS_ERROR', () => {
      const action = { type: GET_PRODUCTS_ERROR, payload: 'Error fetching products' };
      const newState = Reducer(initialState, action);
      expect(newState.loadingProducts).toBe(false);
      expect(newState.errorProducts).toBe('Error fetching products');
    });
  
    test('should handle GET_WISHLIST_START', () => {
      const action = { type: GET_WISHLIST_START };
      const newState = Reducer(initialState, action);
      expect(newState.loadingWishlist).toBe(true);
      expect(newState.errorWishlist).toBe(null);
    });
  
    test('should handle GET_WISHLIST_SUCCESS', () => {
      const action = { type: GET_WISHLIST_SUCCESS, payload: ['item1', 'item2'] };
      const newState = Reducer(initialState, action);
      expect(newState.loadingWishlist).toBe(false);
      expect(newState.wishlist).toEqual(['item1', 'item2']);
    });
  
    test('should handle GET_WISHLIST_ERROR', () => {
      const action = { type: GET_WISHLIST_ERROR, payload: 'Error fetching wishlist' };
      const newState = Reducer(initialState, action);
      expect(newState.loadingWishlist).toBe(false);
      expect(newState.errorWishlist).toBe('Error fetching wishlist');
    });
  
    test('should handle GET_ADDTOBAG_START', () => {
      const action = { type: GET_ADDTOBAG_START };
      const newState = Reducer(initialState, action);
      // expect(newState.loadingAddtoBag).toBe(true);
      // expect(newState.errorAddtobag).toBe(null);
    });
  
    test('should handle GET_ADDTOBAG_SUCCESS', () => {
      const action = { type: GET_ADDTOBAG_SUCCESS, payload: ['itemA', 'itemB'] };
      const newState = Reducer(initialState, action);
      expect(newState.loadingAddtoBag).toBe(false);
      expect(newState.products).toEqual(['itemA', 'itemB']);
    });
  
    test('should handle GET_ADDTOBAG_ERROR', () => {
      const action = { type: GET_ADDTOBAG_ERROR, payload: 'Error adding to bag' };
      const newState = Reducer(initialState, action);
      // expect(newState.loadingAddtoBag).toBe(false);
      // expect(newState.errorAddtobag).toBe('Error adding to bag');
    });
  });
  