import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import MenuGrid from "../../Components/MenuGrid";

// Mocking the useNavigate hook directly
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

describe('MenuGrid Component', () => {
    const mockNavigate = jest.fn();

    beforeEach(() => {
        require('react-router-dom').useNavigate.mockImplementation(() => mockNavigate);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should render menu items with correct text', () => {
        render(
            <Router>
                <MenuGrid />
            </Router>
        );

        expect(screen.getByText('My WishList')).toBeInTheDocument();
        expect(screen.getByText('Order History')).toBeInTheDocument();
        expect(screen.getByText('Address Book')).toBeInTheDocument();
        expect(screen.getByText('Brands')).toBeInTheDocument();
        expect(screen.getByText('Saved Payments')).toBeInTheDocument();
        expect(screen.getByText('Alerts & Coupons')).toBeInTheDocument();
        expect(screen.getByText('Gift card')).toBeInTheDocument();
        expect(screen.getByText('CLIQ Cash')).toBeInTheDocument();
        expect(screen.getByText('Manage Notifications')).toBeInTheDocument();
    });

    test('should navigate to correct paths on menu item clicks', () => {
        render(
            <Router>
                <MenuGrid />
            </Router>
        );

        fireEvent.click(screen.getByText('Order History'));
        expect(mockNavigate).toHaveBeenCalledWith('/myaccount');

        fireEvent.click(screen.getByText('Address Book'));
        expect(mockNavigate).toHaveBeenCalledWith('/myaccount/address');

        fireEvent.click(screen.getByText('Gift card'));
        expect(mockNavigate).toHaveBeenCalledWith('/myaccount/giftcard');

        fireEvent.click(screen.getByText('Manage Notifications'));
        expect(mockNavigate).toHaveBeenCalledWith('/myaccount/manage-Notification');
    });
});
