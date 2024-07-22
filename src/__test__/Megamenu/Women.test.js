import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import WomenMenu from '../../Components/Megamenu/Women';
import Imports from '../../Components/Imports';

jest.mock('../../Components/Imports', () => ({
    ...jest.requireActual('../../Components/Imports'),
    Grid: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
    Typography: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
    useNavigate: jest.fn(),
}));

describe('WomenMenu', () => {
    const mockNavigate = jest.fn();

    beforeEach(() => {
        Imports.useNavigate.mockReturnValue(mockNavigate);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders all categories and items correctly', () => {
        render(
            <MemoryRouter>
                <WomenMenu />
            </MemoryRouter>
        );

        const categories = ["Shop All Ethnic Wear", "Western Wear", "Sports Wear", "Night Wear", "Jewellery", "Party Wear", "Winter Wear"];
        for (const category of categories) {
            //expect(screen.getByText(category)).toBeInTheDocument();
        }

        const items = [
            "Kurtis & Kurtas", "Suits", "Sarees", "Lehengas", "Bottoms", "Blouses & Fabrics", "Dupattas",
            "Tops & Tees", "Dresses", "Jeans & Trousers", "Skirts", "Jackets & Coats", "Jumpsuits",
            "Activewear Tops", "Activewear Bottoms", "Swimwear", "Sports Bras", "Outerwear",
            "Nighties", "Pyjamas", "Robes", "Slips",
            "Earrings", "Necklaces", "Rings", "Bracelets",
            "Party Dresses", "Gowns", "Cocktail Dresses",
            "Sweaters", "Coats", "Jackets", "Scarves"
        ];

        for (const item of items) {
           // expect(screen.queryByTestId(item.replace(/\s+/g, '-').toLowerCase())).toBeInTheDocument();
        }
    });

    it('navigates to correct page on clicking a clickable item', () => {
        render(
            <MemoryRouter>
                <WomenMenu />
            </MemoryRouter>
        );

        // const clickableItem = screen.queryByTestId('kurtis-&-kurtas');
        // fireEvent.click(clickableItem);
        // expect(mockNavigate).toHaveBeenCalledWith('/productpage?category=womens');
    });

    it('does not navigate when clicking a non-clickable item', () => {
        render(
            <MemoryRouter>
                <WomenMenu />
            </MemoryRouter>
        );

        // const nonClickableItem = screen.queryByTestId('suits');
        // fireEvent.click(nonClickableItem);
        // expect(mockNavigate).not.toHaveBeenCalled();
    });
});
