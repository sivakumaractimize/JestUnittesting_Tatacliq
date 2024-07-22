import React from 'react';
import { render, screen } from '@testing-library/react';
import MoreBrandSwiper from '../../Components/Innerproduct/MoreBrandSwiper';
import Imports from '../../Components/Imports';

// Mocking Imports module
jest.mock('../../Components/Imports', () => ({
  ...jest.requireActual('../../Components/Imports'),
  Card: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
  CardMedia: jest.fn(({ ...props }) => <img {...props} />),
  CardContent: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
  Typography: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
}));

describe('MoreBrandSwiper Component', () => {
  const data = [
    { img: "https://img.tatacliq.com/images/i17//437Wx649H/MP000000021716478_437Wx649H_202403282108271.jpeg" },
    { img: "https://img.tatacliq.com/images/i16//437Wx649H/MP000000021569171_437Wx649H_202403152152001.jpeg" },
    { img: "https://img.tatacliq.com/images/i8/437Wx649H/MP000000013943082_437Wx649H_202207272256501.jpeg" },
    { img: "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009435915_437Wx649H_202104242059031.jpeg" },
    { img: "https://img.tatacliq.com/images/i18//437Wx649H/MP000000022450738_437Wx649H_202405311856021.jpeg" },
    { img: "https://img.tatacliq.com/images/i18//437Wx649H/MP000000022539730_437Wx649H_202406080816011.jpeg" }
  ];

  it('should render the MoreBrandSwiper component correctly', () => {
    render(<MoreBrandSwiper />);

   
  });
});
