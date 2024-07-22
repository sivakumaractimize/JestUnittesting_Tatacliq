import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import JewelryBrands from '../../Components/Megamenu/JewelBrands';
import Imports from '../../Components/Imports';

jest.mock('../../Components/Imports', () => ({
    Grid: ({ children, ...props }) => <div {...props}>{children}</div>,
    Typography: ({ children, ...props }) => <div {...props}>{children}</div>,
    Avatar: ({ ...props }) => <img {...props} />,
}));

describe('JewelryBrands Component', () => {
    test('renders without crashing', () => {
        render(<JewelryBrands />);
    });

    test('renders all popular brand names', () => {
        render(<JewelryBrands />);

        const popularBrands = [
            'Mia by Tanishq', 'Melorra', 'Malabar', 'Joyalukkas', 'Chandra Jewellers', 'Sri Jagdamba Pearls',
            'Waman Hari Pethe', 'P.N Gadgil Jewellers', 'PC Jeweller', 'Candere by Kalyan', 'Bangalore Refinery',
            'C.krishniah chetty'
        ];

        popularBrands.forEach(brand => {
            expect(screen.getByText((content, element) => element.textContent === brand)).toBeInTheDocument();
        });
    });

    test('renders all featured brand names', () => {
        render(<JewelryBrands />);

        const featuredBrands = [
            'GIVA', 'Shaya', 'Clara', 'Zavya', 'March by Fablestreet', 'Priyaasi',
            'Accessorize London', 'Oomph', 'Zaveri Pearls', 'FIDA', 'Jazz & Sizzle', 'Jewels Galaxy'
        ];

        featuredBrands.forEach(brand => {
            expect(screen.getByText((content, element) => element.textContent === brand)).toBeInTheDocument();
        });
    });

    test('renders all avatar images', () => {
        render(<JewelryBrands />);

        const avatarSources = [
            'https://assets.tatacliq.com/medias/sys_master/images/26759829979166.jpg',
            'https://assets.tatacliq.com/medias/sys_master/images/13957515968542.jpg',
            'https://assets.tatacliq.com/medias/sys_master/images/13957516165150.jpg',
            'https://assets.tatacliq.com/medias/sys_master/images/13957516099614.jpg'
        ];

        const avatars = screen.getAllByRole('img');
        expect(avatars).toHaveLength(avatarSources.length);

        avatarSources.forEach((src, index) => {
            expect(avatars[index]).toHaveAttribute('src', src);
        });
    });
});
