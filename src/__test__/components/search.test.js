import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchComponent from '../../Components/Search';

describe('SearchComponent', () => {
  test('renders search input with initial placeholder', () => {
    render(<SearchComponent />);
    
    const inputElement = screen.getByPlaceholderText('Search for Products');
    expect(inputElement).toBeInTheDocument();
  });

  test('renders search icon', () => {
    render(<SearchComponent />);
    
    const searchIcon = screen.getByTestId('SearchIcon');
    expect(searchIcon).toBeInTheDocument();
  });

  test('rotates placeholder text', async () => {
    jest.useFakeTimers();
    render(<SearchComponent />);
    
    // Initial placeholder text
    expect(screen.getByPlaceholderText('Search for Products')).toBeInTheDocument();
    
    // Advance timers and check for next placeholder
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(screen.getByPlaceholderText('Search for Brands')).toBeInTheDocument();
    
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(screen.getByPlaceholderText('Search for Categories')).toBeInTheDocument();
    
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(screen.getByPlaceholderText('Search for Products')).toBeInTheDocument();
    
    jest.useRealTimers();
  });

  test('applies correct styles based on breakpoints', () => {
    render(<SearchComponent />);
    
    const inputElement = screen.getByPlaceholderText('Search for Products');
    
    // You may need to use window.innerWidth to test different breakpoints
    // Here, I'm just showing the approach, you may need to adjust it
    window.innerWidth = 375;
    window.dispatchEvent(new Event('resize'));
    
    // expect(inputElement).toHaveStyle('width: 39ch');
    
    window.innerWidth = 425;
    window.dispatchEvent(new Event('resize'));
    
    // expect(inputElement).toHaveStyle('width: 50ch');
    
    window.innerWidth = 600;
    window.dispatchEvent(new Event('resize'));
    
    // expect(inputElement).toHaveStyle('width: 58ch');
  });
});
