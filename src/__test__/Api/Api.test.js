import axios from 'axios';
import Api from '../../Api/Api';
import { toast } from 'react-toastify';
import { BASE_URL, STATUS_CODE } from '../../Api/Constants';

jest.mock('axios');
jest.mock('react-toastify');

describe('Api Class', () => {
  let api;

  beforeEach(() => {
    api = new Api();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create an instance of Api with baseURL', () => {
    expect(api.baseURL).toBe(BASE_URL);
  });

  describe('get method', () => {
    it('should make a GET request and return data', async () => {
      const responseData = { data: 'test data' };
      axios.mockResolvedValue({ status: 200, data: responseData });

      const data = await api.get('test-endpoint');
      expect(axios).toHaveBeenCalledWith({
        method: 'get',
        url: `${BASE_URL}/test-endpoint`,
        headers: {
          'accept-language': 'en',
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      });
      expect(data).toBe(responseData);
    });

    it('should handle errors', async () => {
      axios.mockRejectedValue(new Error('Network Error'));

      await expect(api.get('test-endpoint')).rejects.toThrow('Network Error');
    });
  });

  describe('post method', () => {
    it('should make a POST request and return data', async () => {
      const responseData = { data: 'test data' };
      axios.mockResolvedValue({ status: 200, data: responseData });

      const data = await api.post('test-endpoint', { test: 'data' });
      expect(axios).toHaveBeenCalledWith({
        method: 'post',
        url: `${BASE_URL}/test-endpoint`,
        headers: {
          'accept-language': 'en',
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: localStorage.getItem('token'),
        },
        data: { test: 'data' },
      });
      expect(data).toBe(responseData);
    });

    it('should handle errors', async () => {
      axios.mockRejectedValue(new Error('Network Error'));

      await expect(api.post('test-endpoint', { test: 'data' })).rejects.toThrow('Network Error');
    });
  });

  describe('put method', () => {
    it('should make a PUT request and return data', async () => {
      const responseData = { data: 'test data' };
      axios.mockResolvedValue({ status: 200, data: responseData });

      const data = await api.put('test-endpoint', { test: 'data' });
      expect(axios).toHaveBeenCalledWith({
        method: 'put',
        url: `${BASE_URL}/test-endpoint`,
        headers: {
          'accept-language': 'en',
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: localStorage.getItem('token'),
        },
        data: { test: 'data' },
      });
      expect(data).toBe(responseData);
    });

    it('should handle errors', async () => {
      axios.mockRejectedValue(new Error('Network Error'));

      await expect(api.put('test-endpoint', { test: 'data' })).rejects.toThrow('Network Error');
    });
  });

  describe('delete method', () => {
    it('should make a DELETE request and return data', async () => {
      const responseData = { data: 'test data' };
      axios.mockResolvedValue({ status: 200, data: responseData });

      const data = await api.delete('test-endpoint');
      expect(axios).toHaveBeenCalledWith({
        method: 'delete',
        url: `${BASE_URL}/test-endpoint`,
        headers: {
          'accept-language': 'en',
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      });
      expect(data).toBe(responseData);
    });

    it('should handle errors', async () => {
      axios.mockRejectedValue(new Error('Network Error'));

      await expect(api.delete('test-endpoint')).rejects.toThrow('Network Error');
    });
  });

  describe('api method', () => {
    it('should call axios with correct configuration', async () => {
      const responseData = { data: 'test data' };
      axios.mockResolvedValue({ status: 200, data: responseData });

      await api.api('get', 'test-endpoint');
      expect(axios).toHaveBeenCalledWith({
        method: 'get',
        url: `${BASE_URL}/test-endpoint`,
        headers: {
          'accept-language': 'en',
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      });
    });

    it('should handle internal server error', async () => {
      const errorResponse = { status: STATUS_CODE.INTERNAL_SERVER_ERROR };
      axios.mockResolvedValue(errorResponse);

      await api.api('get', 'test-endpoint');
      expect(toast.error).toHaveBeenCalledWith('Something went wrong!!');
    });

    it('should handle API errors', async () => {
      axios.mockRejectedValue(new Error('Network Error'));

      await expect(api.api('get', 'test-endpoint')).rejects.toThrow('Network Error');
    });
  });

  describe('setHeaders method', () => {
    it('should set headers correctly', () => {
      const headers = api.setHeaders({ isMultipart: true, headers: { 'Custom-Header': 'value' } });
      expect(headers).toEqual({
        'accept-language': 'en',
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
        Authorization: localStorage.getItem('token'),
        'Custom-Header': 'value',
      });
    });
  });
});
