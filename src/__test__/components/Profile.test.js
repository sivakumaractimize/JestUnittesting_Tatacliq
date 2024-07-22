import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Profile from '../../Components/Profile'; // Adjust the path as per your project structure

test('Profile Component renders correctly with localStorage data', async () => {
    render(<Profile />);
    
    await waitFor(() => {
      expect(screen.getByText(/General Information/i)).toBeInTheDocument();
      expect(screen.getByText(/Basic Details/i)).toBeInTheDocument();
  
      const editButtons = screen.queryAllByText(/Edit/i);
      expect(editButtons).toHaveLength(2); // Assuming there are exactly two "Edit" buttons
  
      // Additional assertions for other elements as needed
    });
  });
  

  test('Profile Component opens ProfileDialog when Edit is clicked', async () => {
    render(<Profile />);
  
    await waitFor(() => {
      expect(screen.getByText(/General Information/i)).toBeInTheDocument();
      expect(screen.getByText(/Basic Details/i)).toBeInTheDocument();
  
      const editButtons = screen.queryAllByText(/Edit/i);
      expect(editButtons).toHaveLength(2); // Assuming there are exactly two "Edit" buttons
  
      fireEvent.click(editButtons[0]); // Clicking the first "Edit" button
  
      // Assert dialog opens or perform further actions
    });
  });
  

// Add more tests as per your component behavior
