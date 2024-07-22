import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Spy on ReactDOM.createRoot
jest.spyOn(ReactDOM, 'createRoot');

describe('index.js entry point', () => {
  it('should call ReactDOM.createRoot with the correct element', () => {
    // Mock document.getElementById to return a div
    const mockDiv = document.createElement('div');
   // document.getElementById = jest.fn().mockReturnValue(mockDiv);

    // Import the index.js file, which contains the code to be tested
    require('../index');

    // Assert that ReactDOM.createRoot was called with the mock div
    expect(ReactDOM.createRoot).toHaveBeenCalledWith(mockDiv);
  });
});
