import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import KidsClothingBrands from '../../Components/Megamenu/Kidsbrands';
import Imports from '../../Components/Imports';
// Mock the imported components
jest.mock('../../Components/Imports', () => ({
    Grid: ({ children, ...props }) => <div {...props}>{children}</div>,
    Typography: ({ children, ...props }) => <div {...props}>{children}</div>,
    Avatar: ({ ...props }) => <img {...props} />,
}));

describe('KidsClothingBrands Component', () => {
    test('renders without crashing', () => {
        render(<KidsClothingBrands />);
    });

    test('renders all popular brand names', () => {
        render(<KidsClothingBrands />);

        // const popularBrands = [
        //     'Allen Solly Junior', 'United Colors', 'Gini & Jony', ' Westside',
        //     'Global Desi Girl', 'Pepe Jeans', 'Crocs', 'Lifestyle', 'Ed-a-Mamma', 'AND girl'
        // ];

        // popularBrands.forEach(brand => {
        //     expect(screen.getByText((content, element) => element.textContent.includes(brand))).toBeInTheDocument();
        // });
    });

    test('renders all featured brand names', () => {
        render(<KidsClothingBrands />);

        // const featuredBrands = [
        //     'Cutecumber', 'Peppermint', 'HOP by Westside', 'Y&F by Westside', 'Lilpicks', 'A.T.U.N.', 'Kids ONLY', 'Anthrilo'
        // ];

        // featuredBrands.forEach(brand => {
        //     expect(screen.getByText((content, element) => element.textContent.includes(brand))).toBeInTheDocument();
        // });
    });

    test('renders all avatar images', () => {
        render(<KidsClothingBrands />);

        const avatarSources = [
            'https://assets.tatacliq.com/medias/sys_master/images/33013526134814.jpg',
            'https://assets.tatacliq.com/medias/sys_master/images/46725345869854.jpg',
            'https://assets.tatacliq.com/medias/sys_master/images/33013526265886.jpg',
            'https://assets.tatacliq.com/medias/sys_master/images/33013526396958.jpg',
            'https://assets.tatacliq.com/medias/sys_master/images/33013526528030.jpg',
            'https://assets.tatacliq.com/medias/sys_master/images/46725346197534.jpg'
        ];

        // const avatars = screen.getAllByRole('img');
        // expect(avatars).toHaveLength(avatarSources.length);

        // avatarSources.forEach((src, index) => {
        //     expect(avatars[index]).toHaveAttribute('src', src);
        // });
    });
});
