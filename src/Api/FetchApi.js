import Api from './Api';

const api = new Api();

export const getProducts = async (endpoint) => {
  try {
    const jsonData = await api.get(`${endpoint}.json`);
    return Object.keys(jsonData).map((key) => ({ mainid: key, ...jsonData[key] }));
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export const updateWishlist = async (endpoint, mainid, updateData) => {
  try {
    const response = await api.put(`${endpoint}/${mainid}.json`, updateData);
    return response.data;
  } catch (error) {
    console.error('Error updating wishlist:', error);
    return null;
  }
};

export const addToWishlist = async (itemData) => {
  try {
    const response = await api.post(`wishlist.json`, itemData);
    return response.data;
  } catch (error) {
    console.error('Error adding item to wishlist:', error);
    return null;
  }
};

export const getwishlistProducts = async () => {
  try {
    const jsonData = await api.get(`wishlist.json`);
    if (jsonData === null) {
      return [];
    } else {
      return Object.keys(jsonData).map((key) => ({ ...jsonData[key], wishid: key }));
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export const deleteWishlist = async (wishid) => {
  try {
    const response = await api.delete(`wishlist/${wishid}.json`);
    return response.data;
  } catch (error) {
    console.error('Error deleting item from wishlist:', error);
    return null;
  }
};

export const addTobagproduct = async (itemData) => {
  try {
    const response = await api.post(`addtobag.json`, itemData);
    return response.data;
  } catch (error) {
    console.error('Error adding item to bag:', error);
    return null;
  }
};

export const getAddtobagproducts = async () => {
  try {
    const jsonData = await api.get(`addtobag.json`);
  
      return Object.keys(jsonData).map((key) => ({ ...jsonData[key], Bagid: key }));
   
  }
   catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export const deleteAddtobagproduct = async (Bagid) => {
  try {
    const response = await api.delete(`addtobag/${Bagid}.json`);
    return response.data;
  } catch (error) {
    console.error('Error deleting item from bag:', error);
    return null;
  }
};

export const updateBagWishlist = async (Bagid, updateData) => {
  try {
    const response = await api.put(`addtobag/${Bagid}.json`, updateData);
    return response.data;
  } catch (error) {
    console.error('Error updating wishlist:', error);
    return null;
  }
};

export const updateBag = async (endpoint, mainid, updateData) => {
  try {
    const response = await api.put(`${endpoint}/${mainid}.json`, updateData);
    return response.data;
  } catch (error) {
    console.error('Error updating wishlist:', error);
    return null;
  }
};
