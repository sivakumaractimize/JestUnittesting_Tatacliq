// src/__tests__/components/Address.test.js

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Address from '../../Components/Address'; 

describe('Address Component', () => {
  test('renders address details correctly', async () => {
    render(<Address />);


    await waitFor(() => {
      expect(screen.getByText(/Siva Kumar V/i)).toBeInTheDocument();
      expect(screen.getByText(/Mandapeta East Godavari/i)).toBeInTheDocument();
      expect(screen.getByText(/533308 IN/i)).toBeInTheDocument();
      expect(screen.getByText(/Ph.No : 7032514136/i)).toBeInTheDocument();
    });
  });

  test('renders edit and delete buttons', async () => {
    render(<Address />);

    
    await waitFor(() => {
      expect(screen.getByText(/Edit Address/i)).toBeInTheDocument();
      expect(screen.getByText(/Delete/i)).toBeInTheDocument();
    });
  });

  test('renders add new address button', async () => {
    render(<Address />);

    
    await waitFor(() => {
      expect(screen.getByText(/Add New Address/i)).toBeInTheDocument();
    });
  });
});
