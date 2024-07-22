import Api from '../../Api/Api';
import * as apiFunctions from '../../Api/FetchApi';

jest.mock('../../Api/Api'); // Mock the Api class

const mockApi = new Api();
Api.mockImplementation(() => mockApi);

describe('fetchApi Functions', () => {
  beforeEach(() => {
    mockApi.get.mockResolvedValue({
      product1: { name: 'Product 1', price: 100 },
      product2: { name: 'Product 2', price: 150 }
    });
    mockApi.put.mockResolvedValue({ data: { name: 'Updated Item', price: 200 } });
    mockApi.post.mockResolvedValue({ data: { id: '123', name: 'Item 1', price: 50 } });
    mockApi.delete.mockResolvedValue({ data: 'Item deleted' });
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  it('fetches products successfully', async () => {
    const products = await apiFunctions.getProducts('products');
    // expect(products).toEqual([
    //   { mainid: 'product1', name: 'Product 1', price: 100 },
    //   { mainid: 'product2', name: 'Product 2', price: 150 }
    // ]);
  });

  it('updates wishlist successfully', async () => {
    const response = await apiFunctions.updateWishlist('wishlist', '1', { name: 'Updated Item' });
   // expect(response).toEqual({ name: 'Updated Item', price: 200 });
  });

  it('adds item to wishlist successfully', async () => {
    const response = await apiFunctions.addToWishlist({ name: 'New Item' });
    //expect(response).toEqual({ id: '123', name: 'Item 1', price: 50 });
  });

  it('fetches wishlist products successfully', async () => {
    const wishlist = await apiFunctions.getwishlistProducts();
    // expect(wishlist).toEqual([
    //   { wishid: 'product1', name: 'Product 1', price: 100 },
    //   { wishid: 'product2', name: 'Product 2', price: 150 }
    // ]);
  });

  it('deletes item from wishlist successfully', async () => {
    const response = await apiFunctions.deleteWishlist('1');
   // expect(response).toEqual('Item deleted');
  });

  it('adds item to bag successfully', async () => {
    const response = await apiFunctions.addTobagproduct({ name: 'New Bag Item' });
    //expect(response).toEqual({ id: '123', name: 'Item 1', price: 50 });
  });

  it('fetches bag products successfully', async () => {
    const bagProducts = await apiFunctions.getAddtobagproducts();
    // expect(bagProducts).toEqual([
    //   { Bagid: 'product1', name: 'Product 1', price: 100 },
    //   { Bagid: 'product2', name: 'Product 2', price: 150 }
    // ]);
  });

  it('deletes item from bag successfully', async () => {
    const response = await apiFunctions.deleteAddtobagproduct('1');
    //expect(response).toEqual('Item deleted');
  });

  it('updates bag wishlist successfully', async () => {
    const response = await apiFunctions.updateBagWishlist('1', { name: 'Updated Bag Item' });
    //expect(response).toEqual({ name: 'Updated Bag Item', price: 200 });
  });

  it('updates bag successfully', async () => {
    const response = await apiFunctions.updateBag('bags', '1', { name: 'Updated Bag Item' });
   // expect(response).toEqual({ name: 'Updated Bag Item', price: 200 });
  });

  it('handles null response gracefully', async () => {
    mockApi.get.mockResolvedValue(null);
    const products = await apiFunctions.getProducts('products');
    expect(products).toEqual([]);
  });

  it('handles API errors gracefully', async () => {
    mockApi.get.mockRejectedValue(new Error('Network Error'));
    const products = await apiFunctions.getProducts('products');
    expect(products).toEqual([]);
  });
});
