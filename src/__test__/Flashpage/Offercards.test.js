import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OfferCard from '../../Components/Flashpage/OffercardSwiper'; // Adjust the path according to your file structure
import * as Imports from '../../Components/Imports'; // Adjust the path according to your file structure

jest.mock('../../Components/Imports', () => ({
  ...jest.requireActual('../../Components/Imports'),
  useState: jest.fn(),
  useEffect: jest.fn(),
  ImageList: ({ children, ...props }) => <div {...props}>{children}</div>,
  ImageListItem: ({ children, ...props }) => <div {...props}>{children}</div>,
  Paper: ({ children, ...props }) => <div {...props}>{children}</div>,
}));

describe('OfferCard Component', () => {
  beforeEach(() => {
    Imports.useState.mockReturnValue([0, jest.fn()]); // Mocking useState initial value and setter
  });

  test('interval updates activeIndex in useEffect', async () => {
    jest.useFakeTimers(); // Use Jest's fake timers to control time

    render(<OfferCard />);

    // Wait for the interval to update activeIndex
    await act(async () => {
      jest.advanceTimersByTime(3000); // Advance time by 3 seconds
      // Now activeIndex should be 1 (second image)
      const secondImage = screen.getByAltText('card 2');
      expect(secondImage).toBeInTheDocument();
      expect(secondImage).toHaveAttribute('src', 'https://assets.tatacliq.com/medias/sys_master/images/50040038359070.jpg');
    });

    jest.useRealTimers(); 
  });
});
