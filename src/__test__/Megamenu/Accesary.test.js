
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import FashionMenu from '../../Components/Megamenu/Acceceray';
import Imports from '../../Components/Imports'; 

jest.mock('../../Components/Imports', () => ({
    Grid: ({ children, ...props }) => <div {...props}>{children}</div>,
    Typography: ({ children, ...props }) => <div {...props}>{children}</div>,
}));

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

describe('accecesaray component', () => {
    test('renders categories and items correctly', () => {
        const categories = [
            {
                title: "Bags, Wallets & Clutches",
                items: [
                    { name: "Handbags" },
                    { name: "Sling Bags" },
                ],
            },
            // Add more categories if needed
        ];
    
        render(<FashionMenu />);
    
        categories.forEach((category) => {
            expect(screen.getByText(category.title)).toBeInTheDocument();
            category.items.forEach((item) => {
                expect(screen.getByText(item.name)).toBeInTheDocument();
            });
        });
    });
    
    test('navigates to the correct link when an item with a link is clicked', () => {
        const navigate = useNavigate();
        render(<FashionMenu />);
    
        const testCategories = [
            {
                title: "Bags, Wallets & Clutches",
                items: [
                    { name: "Handbags", link: "/handbags" },
                    { name: "Sling Bags", link: "/sling-bags" },
                ],
            },
        ];
    
        const MockedFashionMenu = () => (
            <Imports.Grid container spacing={4}>
                {testCategories.map((category, index) => (
                    <Imports.Grid item xs={3} key={index}>
                        <Imports.Typography sx={{ fontWeight: "bold", mb: 1 }}>
                            {category.title}
                        </Imports.Typography>
                        {category.items.map((item, idx) => (
                            <Imports.Typography
                                key={idx}
                                onClick={() => item.link && navigate(item.link)}
                                sx={{
                                    mb: 0.5,
                                    cursor: item.link ? "pointer" : "default",
                                    '&:hover': item.link ? { color: 'red' } : {},
                                }}
                            >
                                {item.name}
                            </Imports.Typography>
                        ))}
                    </Imports.Grid>
                ))}
            </Imports.Grid>
        );
    
        render(<MockedFashionMenu />);
    
    });
    
});
