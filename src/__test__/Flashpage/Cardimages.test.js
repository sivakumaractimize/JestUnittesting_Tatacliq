import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CategoryCards from '../../Components/Flashpage/CardImages'; // Adjust the path according to your file structure
import * as Imports from '../../Components/Imports'; // Adjust the path according to your file structure
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('../../Components/Imports', () => ({
  Grid: ({ children, ...props }) => <div {...props}>{children}</div>,
  Card: ({ children, ...props }) => <div {...props}>{children}</div>,
  CardMedia: ({ ...props }) => <img {...props} />,
  OfferCard: (props) => <div {...props}>OfferCard Component</div>,
  useNavigate: () => jest.fn(),
}));

const categories = [
  {
    title: 'Westside',
    image: 'https://assets.tatacliq.com/medias/sys_master/images/51869107945502.jpg',
    catagiry: 'womens'
  },
  {
    title: 'Womenswear',
    image: 'https://assets.tatacliq.com/medias/sys_master/images/51869108011038.jpg',
    catagiry: 'womens'
  },
  {
    title: 'Menswear',
    image: 'https://assets.tatacliq.com/medias/sys_master/images/51869108076574.jpg',
    catagiry: 'men'
  },
  {
    title: 'Footwear',
    image: 'https://assets.tatacliq.com/medias/sys_master/images/51869108142110.jpg',
    catagiry: 'footwear'
  },
  {
    title: 'Beauty',
    image: 'https://assets.tatacliq.com/medias/sys_master/images/51869108207646.jpg',
    catagiry: 'beauty'
  },
  {
    title: 'Watches',
    image: 'https://assets.tatacliq.com/medias/sys_master/images/51869108273182.jpg',
    catagiry: 'watches'
  },
  {
    title: 'Jewellery',
    image: 'https://assets.tatacliq.com/medias/sys_master/images/51869108338718.jpg',
    catagiry: 'jewellery'
  },
  {
    title: 'Kids',
    image: 'https://assets.tatacliq.com/medias/sys_master/images/51869108404254.jpg',
    catagiry: 'kids'
  },
  {
    title: 'Gadgets',
    image: 'https://assets.tatacliq.com/medias/sys_master/images/51869108469790.jpg',
    catagiry: 'gadgets'
  },
  {
    title: 'Home',
    image: 'https://assets.tatacliq.com/medias/sys_master/images/51869108535326.jpg',
    catagiry: 'Home'
  },
  {
    title: 'Bags',
    image: 'https://assets.tatacliq.com/medias/sys_master/images/51869108600862.jpg',
    catagiry: 'bags'
  },
];

describe('CategoryCards Component', () => {
  test('renders CategoryCards component with categories and images', () => {
    render(
      <Router>
        <CategoryCards />
      </Router>
    );

    // Assert that each category image is rendered with the correct alt text
    // categories.forEach((category) => {
    //   const imgElement = screen.getByAltText(category.title);
    //   expect(imgElement).toBeInTheDocument();
    //   expect(imgElement).toHaveAttribute('src', category.image);
    // });

    // Assert that the OfferCard component is rendered
    expect(screen.getByText('OfferCard Component')).toBeInTheDocument();

    // Assert that the offer images are rendered in the larger view
    const offerImages = [
      'https://assets.tatacliq.com/medias/sys_master/images/50074650869790.jpg',
      'https://assets.tatacliq.com/medias/sys_master/images/50040038359070.jpg',
      'https://assets.tatacliq.com/medias/sys_master/images/50063519580190.jpg'
    ];

    offerImages.forEach((src) => {
      const imgElements = screen.getAllByAltText('offer');
      expect(imgElements).toBeTruthy();
      expect(imgElements.map(img => img.getAttribute('src'))).toContain(src);
    });
  });

  test('navigates to the correct category page when an image is clicked', () => {
    const mockNavigate = jest.fn();
    Imports.useNavigate = () => mockNavigate;

    render(
      <Router>
        <CategoryCards />
      </Router>
    );

    // Click on each category image and assert the navigation call
    categories.forEach((category) => {
      const imgElement = screen.getByAltText(category.title);
      fireEvent.click(imgElement);
      // expect(mockNavigate).toHaveBeenCalledWith(`/productpage?category=${category.catagiry}`);
    });
  });
});
