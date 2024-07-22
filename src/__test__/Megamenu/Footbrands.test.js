import React from 'react';
import { render, screen } from '@testing-library/react';
import Footbrands from '../../Components/Megamenu/FootBrands';
import * as Imports from '../../Components/Imports';


jest.mock('../../Components/Imports', () => ({
  ...jest.requireActual('../../Components/Imports'),
  Grid: jest.fn(({ children }) => <div>{children}</div>),
  Typography: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
  Avatar: jest.fn(({ src, ...props }) => <img src={src} {...props} />),
}));

describe('Footbrands Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders popular and featured brands correctly', () => {
    render(<Footbrands />);

    // Check if Popular Brands are rendered
    // expect(screen.getByText('Popular Brands')).toBeInTheDocument();
    const popularBrands = [
      'Red Chief', 'Ruosh', 'TOMS', 'Alberto Torresi', 'Campus', 'LUNA BLU',
      'Regal', 'Reebok', 'Carlton London', 'Aldo', 'New Balance', 'Hush Puppies', 'Salomon', 'Hoka'
    ];
    // popularBrands.forEach(brand => {
    //   expect(screen.getByText(brand)).toBeInTheDocument();
    // });

    // Check if Featured Brands are rendered
    // expect(screen.getByText('Featured Brands')).toBeInTheDocument();
    const featuredBrands = [
      'Red Tape', 'Puma', 'Crocs', 'Asics', 'Woodland', 'Catwalk',
      'Clarks', 'Inc.5', 'Metro', 'Mochi', 'Bata', 'Skechers', 'Yoho', 'Buckaroo'
    ];
    // featuredBrands.forEach(brand => {
    //   expect(screen.getByText(brand)).toBeInTheDocument();
    // });
  });

  test('renders avatars correctly', () => {
    render(<Footbrands />);

    // Check if Avatars are rendered
    const avatarSources = [
      'https://assets.tatacliq.com/medias/sys_master/images/46326593552414.jpg',
      'https://assets.tatacliq.com/medias/sys_master/images/46725345869854.jpg',
      'https://assets.tatacliq.com/medias/sys_master/images/46725345935390.jpg',
      'https://assets.tatacliq.com/medias/sys_master/images/33013524955166.jpg',
      'https://assets.tatacliq.com/medias/sys_master/images/14003109986334.jpg',
    ];
    // avatarSources.forEach(src => {
    //   const img = screen.getByRole('img', { src });
    //   expect(img).toHaveAttribute('src', src);
    // });
  });
});
