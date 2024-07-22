import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BlockbusterDeals from '../../Components/Flashpage/BlockbusterDeals'; // Adjust the path according to your file structure
import * as Imports from '../../Components/Imports'; // Adjust the path according to your file structure

jest.mock('../../Components/Imports', () => ({
  Grid: ({ children, ...props }) => <div {...props}>{children}</div>,
  Typography: ({ children, ...props }) => <div {...props}>{children}</div>,
  Divider: (props) => <div {...props} />,
  Card: ({ children, ...props }) => <div {...props}>{children}</div>,
  CardMedia: ({ ...props }) => <img {...props} />,
}));

describe('BlockbusterDeals Component', () => {
  test('renders BlockbusterDeals component with cards and images', () => {
    render(<BlockbusterDeals />);

    // Assert that the Blockbuster Deals heading is in the document
    expect(screen.getByText('Blockbuster Deals')).toBeInTheDocument();

    // Assert that the correct number of card images are rendered
    const cardImages = screen.getAllByRole('img');
    expect(cardImages.length).toBe(13); // 12 cards + 1 deals image

    // Assert that each card image has the correct alt text
    cardImages.forEach((img, index) => {
      if (index < 12) {
        expect(img).toHaveAttribute('alt', `img${index + 1}`);
      } else {
        expect(img).toHaveAttribute('alt', 'deals');
      }
    });
  });
});
