import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VerticalTabs from '../../Components/BasicTabs';

// Mock the Imports components
jest.mock('../../Components/Imports', () => ({
    Box: ({ children, ...props }) => <div {...props}>{children}</div>,
    Grid: ({ children, container, item, ...props }) => (
        <div {...props} role={container ? 'grid' : item ? 'griditem' : undefined}>
            {children}
        </div>
    ),
    Tabs: ({ children, ...props }) => <div {...props}>{children}</div>,
    Tab: ({ label, ...props }) => <div {...props}>{label}</div>,
    Typography: ({ children, ...props }) => <div {...props}>{children}</div>,
    ArrowForwardIosIcon: (props) => <span {...props}>→</span>,
    WomenMenu: () => <div>Women's Fashion Content</div>,
    MenMenu: () => <div>Men's Fashion Content</div>,
    KidsFashionMenu: () => <div>Kid's Fashion Content</div>,
    HomeKitchenMenu: () => <div>Home & Kitchen Content</div>,
    BeautyMenu: () => <div>Beauty Content</div>,
    GadgetsMenu: () => <div>Gadgets Content</div>,
    JwelMenu: () => <div>Jewellery Content</div>,
    FashionMenu: () => <div>Accessories Content</div>,
}));

describe('VerticalTabs Component', () => {
    it('renders all tabs correctly', () => {
        render(<VerticalTabs />);

        const tabs = [
            "Women's Fashion",
            "Men's Fashion",
            "Kid's Fashion",
            "Home & Kitchen",
            "Beauty",
            "Gadgets",
            "Jewellery",
            "Accessories"
        ];

        tabs.forEach((tab) => {
            expect(screen.getByText(tab)).toBeInTheDocument();
        });
    });

    it('displays the correct tab panel content on hover', () => {
        render(<VerticalTabs />);

        const tab = screen.getByText("Kid's Fashion");
        fireEvent.mouseEnter(tab);

        expect(screen.getByText("Kid's Fashion Content")).toBeInTheDocument();
    });

    // it('highlights the correct tab on hover', () => {
    //     render(<VerticalTabs />);

    //     const tab = screen.getByText("Men's Fashion");
    //     fireEvent.mouseEnter(tab);

    //     expect(tab).toHaveStyle({ color: '#080808' });
    //     const arrow = screen.getByText('→');
    //     expect(arrow).toBeInTheDocument();
    // });

    // it('resets highlight on mouse leave', () => {
    //     render(<VerticalTabs />);

    //     const tab = screen.getByText("Men's Fashion");
    //     fireEvent.mouseEnter(tab);
    //     expect(tab).toHaveStyle({ color: '#080808' });

    //     fireEvent.mouseLeave(tab);
    //     expect(tab).toHaveStyle({ color: '#5e5b5b' });
    // });
});
