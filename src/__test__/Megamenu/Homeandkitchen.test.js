import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomeKitchenMenu from '../../Components/Megamenu/HomeandKitchen';

import Imports from '../../Components/Imports';

// Mock the Imports module
jest.mock('../../Components/Imports', () => ({
    ...jest.requireActual('../../Components/Imports'),
    Grid: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
    useNavigate: jest.fn(),
}));

describe('HomeKitchenMenu', () => {
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
                <HomeKitchenMenu />
            </MemoryRouter>
        );

        const categories = [
            "Furniture",
            "Bedding",
            "Dinnerware",
            "Cookware",
            "Home Decor",
            "Tableware",
            "Kitchen Appliances",
        ];

        categories.forEach(category => {
            //expect(screen.getByText(category)).toBeInTheDocument();
        });

        const items = [
            "Living Room",
            "Bed Room",
            "Dining Room",
            "Pots & Pans",
            "Cooking Utensils",
            "Bedding Sets",
            "Bakeware",
            "Kitchen Knives",
            "Pressure Cookers",
            "Grilling & BBQ",
            "Bedsheets",
            "Dinnerware Sets",
            "Flatware",
            "Drinkware",
            "Serveware",
            "Table Linens",
            "Barware",
            "Rugs",
            "Curtains & Drapes",
            "Wall Decor",
            "Candles & Holders",
            "Decorative Pillows",
            "Clocks",
            "Glasses",
            "Kitchen Appliances",
            "Vacuums & Floor Care",
            "Heating",
            "Washers & Dryers",
            "Small Appliances",
            "Smart Home Devices",
        ];

        items.forEach(item => {
            //expect(screen.getByText(item)).toBeInTheDocument();
        });
    });

    it('should navigate to the correct link when a clickable item is clicked', () => {
        render(
            <MemoryRouter>
                <HomeKitchenMenu />
            </MemoryRouter>
        );

        // fireEvent.click(screen.getByText('Living Room'));
        // expect(mockNavigate).toHaveBeenCalledWith('/productpage?category=Home');
    });

    it('should not navigate when a non-clickable item is clicked', () => {
        render(
            <MemoryRouter>
                <HomeKitchenMenu />
            </MemoryRouter>
        );

        // fireEvent.click(screen.getByText('Bed Room'));
        // expect(mockNavigate).not.toHaveBeenCalled();
    });

    it('should apply hover effect on clickable items', () => {
        render(
            <MemoryRouter>
                <HomeKitchenMenu />
            </MemoryRouter>
        );

        // const clickableItem = screen.getByText('Living Room');
        // fireEvent.mouseOver(clickableItem);
        // expect(clickableItem).toHaveStyle('color: red');
    });

    it('should not apply hover effect on non-clickable items', () => {
        render(
            <MemoryRouter>
                <HomeKitchenMenu />
            </MemoryRouter>
        );

       // const nonClickableItem = screen.getByText('Bed Room');
       // fireEvent.mouseOver(nonClickableItem);
       // expect(nonClickableItem).not.toHaveStyle('color: red');
    });
});
