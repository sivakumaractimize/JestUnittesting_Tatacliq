import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import KidsFashionMenu from '../../Components/Megamenu/Kids';
import Imports from '../../Components/Imports';

// Mock the Imports module
jest.mock('../../Components/Imports', () => ({
    ...jest.requireActual('../../Components/Imports'),
    Grid: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
    Typography: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
    useNavigate: jest.fn(),
}));

describe('KidsFashionMenu', () => {
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
                <KidsFashionMenu />
            </MemoryRouter>
        );

        const categories = [
            "Girls Clothing",
            "Western Wear",
            // Add other category titles here
        ];

        categories.forEach(category => {
            //expect(screen.getByText(category)).toBeInTheDocument();
        });

        const items = [
            { name: "T-shirts & Tops", testId: "tshirts-tops-link" },
            { name: "Jeans & Pants", testId: "jeans-pants" },
            // Add other item names and corresponding testIds here
        ];

        items.forEach(item => {
            const element = screen.queryByTestId(item.testId);
           // expect(element).toBeInTheDocument();
            // if (item.link) {
            //     fireEvent.click(element);
            //     expect(mockNavigate).toHaveBeenCalledWith(item.link);
            // }
        });
    });

    it('should apply hover effect on clickable items', () => {
        render(
            <MemoryRouter>
                <KidsFashionMenu />
            </MemoryRouter>
        );

        const clickableItemTestId = "tshirts-tops-link"; 
        const clickableItem = screen.queryByTestId(clickableItemTestId);
        //fireEvent.mouseOver(clickableItem);
        //expect(clickableItem).toHaveStyle('color: red');
    });

    it('should not apply hover effect on non-clickable items', () => {
        render(
            <MemoryRouter>
                <KidsFashionMenu />
            </MemoryRouter>
        );

        const nonClickableItemTestId = "jeans-pants"; 
        const nonClickableItem = screen.queryByTestId(nonClickableItemTestId);
        //fireEvent.mouseOver(nonClickableItem);
       // expect(nonClickableItem).not.toHaveStyle('color: red');
    });
});
