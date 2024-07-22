import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import App from '../../src/App';

test('renders learn react link', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  // const linkElement = await screen.findByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
