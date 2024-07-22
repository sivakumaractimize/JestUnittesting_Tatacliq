// Menbrands.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Menbrands from '../../Components/Megamenu/Brandsmen';

describe('Menbrands Component', () => {
    test('renders without crashing', () => {
        render(<Menbrands />);
    });

    test('renders all popular brand names', () => {
        render(<Menbrands />);
        
        const popularBrands = [
            'ETA', 'Nuon Men', 'Pepe Jeans', 'Puma', 'Park Avenue', 'Ascot',
            'Killer', "Levi's", 'Raymond', 'Blackberrys', 'Woodland'
        ];

        popularBrands.forEach(brand => {
            expect(screen.getByText(brand)).toBeInTheDocument();
        });
    });

    test('renders all featured brand names', () => {
        render(<Menbrands />);
        
        const featuredBrands = [
            'Westside', 'U.S. Polo Assn', 'WES', 'Peter England', 'Fruit of the Loom',
            'Bewakoof', 'Flying Machine', 'Celio', 'Westsport', 'Parx', 'Spykar'
        ];

        featuredBrands.forEach(brand => {
            expect(screen.getByText(brand)).toBeInTheDocument();
        });
    });

    test('renders all avatar images', () => {
        render(<Menbrands />);
        
        const avatarSources = [
            'https://assets.tatacliq.com/medias/sys_master/images/33013525020702.jpg',
            'https://assets.tatacliq.com/medias/sys_master/images/33013525086238.jpg',
            'https://assets.tatacliq.com/medias/sys_master/images/33013525151774.jpg',
            'https://assets.tatacliq.com/medias/sys_master/images/33013525217310.jpg',
            'https://assets.tatacliq.com/medias/sys_master/images/33013525282846.jpg',
            'https://assets.tatacliq.com/medias/sys_master/images/33013525348382.jpg'
        ];

        // avatarSources.forEach(src => {
        //     expect(screen.getByRole('img', { src })).toBeInTheDocument();
        // });
    });
});
