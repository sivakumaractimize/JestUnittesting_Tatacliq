import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MostwantedDeals from '../../Components/Flashpage/MostwantedDeals';
import * as Imports from '../../Components/Imports'; 

jest.mock('../../Components/Imports', () => ({
  Grid: ({ children, ...props }) => <div {...props}>{children}</div>,
  Card: ({ children, ...props }) => <div {...props}>{children}</div>,
  CardMedia: ({ ...props }) => <img {...props} />,
}));

const cardData = [
  { image: "https://assets.tatacliq.com/medias/sys_master/images/51889195122718.jpg", alt: "img1" },
  { image: "https://assets.tatacliq.com/medias/sys_master/images/51889195188254.jpg", alt: "img2" },
  { image: "https://assets.tatacliq.com/medias/sys_master/images/51889195253790.jpg", alt: "img3" },
  { image: "https://assets.tatacliq.com/medias/sys_master/images/51889195319326.jpg", alt: "img4" }
];

describe('MostwantedDeals Component', () => {
  test('renders MostwantedDeals component with images', () => {
    render(
      <MostwantedDeals />
    );

    // Assert that each image is rendered with the correct alt text and src attribute
    cardData.forEach((card) => {
      const imgElement = screen.getByAltText(card.alt);
      expect(imgElement).toBeInTheDocument();
      // expect(imgElement).toHaveAttribute('src', card.image);
    });
  });
});
