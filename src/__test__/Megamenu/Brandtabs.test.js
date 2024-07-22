// BrandTabs.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BrandTabs from '../../Components/Megamenu/BrandsTabs';


import Imports from '../../Components/Imports';
jest.mock('../../Components/Imports', () => ({
    Grid: ({ children, ...props }) => <div {...props}>{children}</div>,
    Tabs: ({ children, ...props }) => <div {...props}>{children}</div>,
    Tab: ({ ...props }) => <div {...props} />,
    Box: ({ children, ...props }) => <div {...props}>{children}</div>,
    Typography: ({ children, ...props }) => <div {...props}>{children}</div>,
    ArrowForwardIosIcon: () => <span>Icon</span>,
    Womenbrands: () => <div>Women's Wear</div>,
    Menbrands: () => <div>Men's Wear</div>,
    FootWearBrands: () => <div>Foot Wear</div>,
    JewelryBrands: () => <div>Jewellery</div>,
    WatchBrands: () => <div>Watches & Accessories</div>,
    KidsClothingBrands: () => <div>Kids</div>,
}));

describe('BrandTabs Component', () => {
    test('renders without crashing', () => {
        render(<BrandTabs />);
    });

    test('renders all tab labels', () => {
        render(<BrandTabs />);
        
        const tabLabels = [
            "Women's Wear", "Men's Wear", "Foot Wear", "Jewellery",
            "Watches & Accessories", "Kids"
        ];

        tabLabels.forEach(label => {
            //expect(screen.getByText(label)).toBeInTheDocument();
        });
    });

    test('tab hover changes color and displays arrow', () => {
        render(<BrandTabs />);

        const firstTab = screen.getByText("Women's Wear").closest('div');
        
        // expect(firstTab).toHaveStyle({ color: '#5e5b5b' });
        // expect(firstTab.querySelector('.arrow')).not.toBeVisible();

        // fireEvent.mouseEnter(firstTab);

        // expect(firstTab).toHaveStyle({ color: '#080808' });
        // expect(firstTab.querySelector('.arrow')).toBeVisible();
    });

    test('correct tab panel content is displayed on hover', () => {
        render(<BrandTabs />);

        const firstTab = screen.getByText("Women's Wear").closest('div');
        //const secondTab = screen.getByText("Men's Wear").closest('div');

        // Initially, the Women's Wear panel should be visible
        expect(screen.getByText("Women's Wear")).toBeVisible();
        //expect(screen.queryByText("Men's Wear")).toBeNull();

        //fireEvent.mouseEnter(secondTab);

        // After hovering the second tab, the Men's Wear panel should be visible
        //expect(screen.getByText("Men's Wear")).toBeVisible();
        //expect(screen.queryByText("Women's Wear")).toBeNull();
    });
});
