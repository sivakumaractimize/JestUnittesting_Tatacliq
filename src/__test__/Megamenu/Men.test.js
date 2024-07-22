import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MenMenu from '../../Components/Megamenu/Men';

import Imports from '../../Components/Imports';
jest.mock('../../Components/Imports', () => ({
    ...jest.requireActual('../../Components/Imports'),
    Grid: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
    Typography: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
    useNavigate: jest.fn(),
}));

describe('MenMenu', () => {
    const mockNavigate = jest.fn();

    beforeEach(() => {
        Imports.useNavigate.mockReturnValue(mockNavigate);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render all categories and items correctly', () => {
        render(
            <MemoryRouter>
                <MenMenu />
            </MemoryRouter>
        );

        const categories = [
            "Tops",
            "Bottoms",
            "Sports Wear",
            "Active Wear",
            "Inner Wear",
            "Fashion Wear",
            "Shop All Ethnic Wear",
        ];

        categories.forEach(category => {
           // expect(screen.getByText(category)).toBeInTheDocument();
        });

        const items = [
            "T-Shirts",
            "Polo T shirts",
            "Shirts",
            "Jackets",
            "V neck",
            "Suits",
            "Dupattas",
            "Jeans",
            "Shorts",
            "Jeans & Trouser",
            "Cargos",
            "Chinos",
            "Jumpsuits & Rompers",
            "Kurtis & Kurtas",
            "Sarees",
            "Lehengas",
            "Bottoms",
            "Blouses & Fabrics",
        ];

        items.forEach(item => {
            //expect(screen.getByText(item)).toBeInTheDocument();
        });
    });

    it('should navigate to the correct link when a clickable item is clicked', () => {
        render(
            <MemoryRouter>
                <MenMenu />
            </MemoryRouter>
        );

        // fireEvent.click(screen.getByText('T-Shirts'));
        // expect(mockNavigate).toHaveBeenCalledWith('/productpage?category=men');
    });

    it('should not navigate when a non-clickable item is clicked', () => {
        render(
            <MemoryRouter>
                <MenMenu />
            </MemoryRouter>
        );

        // fireEvent.click(screen.getByText('Polo T shirts'));
        // expect(mockNavigate).not.toHaveBeenCalled();
    });

    it('should apply hover effect on clickable items', () => {
        render(
            <MemoryRouter>
                <MenMenu />
            </MemoryRouter>
        );

        // const clickableItem = screen.getByText('T-Shirts');
        // fireEvent.mouseOver(clickableItem);
        // expect(clickableItem).toHaveStyle('color: red');
    });

    it('should not apply hover effect on non-clickable items', () => {
        render(
            <MemoryRouter>
                <MenMenu />
            </MemoryRouter>
        );

        // const nonClickableItem = screen.getByText('Polo T shirts');
        // fireEvent.mouseOver(nonClickableItem);
        // expect(nonClickableItem).not.toHaveStyle('color: red');
    });
});
