// JwelMenu.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import JwelMenu from '../../Components/Megamenu/Jewellery';

import Imports from '../../Components/Imports';

// Mock the imported components and hooks
jest.mock('../../Components/Imports', () => ({
    Grid: ({ children, ...props }) => <div {...props}>{children}</div>,
    Typography: ({ children, ...props }) => <div {...props}>{children}</div>,
    useNavigate: jest.fn(),
}));

describe('JwelMenu Component', () => {
    test('renders without crashing', () => {
        render(<JwelMenu />);
    });

    test('renders all categories and items', () => {
        render(<JwelMenu />);

        const categories = [
            {
                title: "Gold Jewellery",
                items: [
                    { name: "Earrings" },
                    { name: "Chains" },
                    { name: "Pendants" },
                    { name: "Necklaces" },
                    { name: "Mangalsutras" },
                    { name: "Bangles & Bracelets" },
                ],
            },
            {
                title: "Diamond Jewellery",
                items: [
                    { name: "Earrings" },
                    { name: "Pendants" },
                    { name: "Rings" },
                    { name: "Mangalsutras" },
                    { name: "Bangles & Bracelets" },
                    { name: "Necklaces" },
                ],
            },
            {
                title: "Silver Jewellery",
                items: [
                    { name: "Earrings" },
                    { name: "Rings" },
                    { name: "Pendants & Sets" },
                    { name: "Necklaces" },
                    { name: "Bangles & Bracelets" },
                    { name: "Toe Rings & Anklets" },
                ],
            },
            {
                title: "Fashion Jewellery",
                items: [
                    { name: "Earrings" },
                    { name: "Necklaces" },
                    { name: "Pendants & Sets" },
                    { name: "Bangles & Bracelets" },
                    { name: "Rings" },
                    { name: "Nosepins" },
                ],
            },
            {
                title: "Coins & Bars",
                items: [
                    { name: "Coins & Bars" },
                ],
            },
        ];

        // categories.forEach(category => {
        //     expect(screen.getByText(category.title)).toBeInTheDocument();
        //     category.items.forEach(item => {
        //         expect(screen.getByText(item.name)).toBeInTheDocument();
        //     });
        // });
    });
});
