// Styleswiper.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Styleswiper from '../../Components/Innerproduct/Styleitwith';

// Mocking useState directly from React
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}));

describe('Styleswiper', () => {
    const mockSetState = jest.fn();

    beforeEach(() => {
        jest.spyOn(React, 'useState').mockImplementation(init => [init, mockSetState]);
    });

    afterEach(() => {
        jest.restoreAllMocks(); // Clean up mocks after each test
    });

    test('renders Styleswiper component with "Women" status', () => {
        render(<Styleswiper status="Women" />);

        // Check if component title is rendered
        expect(screen.getByText('Style It With')).toBeInTheDocument();

        // Check if categories are rendered
        expect(screen.getByText('RecommendedCombos')).toBeInTheDocument();
        expect(screen.getByText('BottomWear')).toBeInTheDocument();
        expect(screen.getByText('OuterWear')).toBeInTheDocument();
        expect(screen.getByText('Footwear')).toBeInTheDocument();
        expect(screen.getByText('BagsWallets')).toBeInTheDocument();
    });

    test('changes activeTab on category click', () => {
        render(<Styleswiper status="Women" />);
    
        const bottomWearCategory = screen.getByText('BottomWear');
        
        // Click on BottomWear category
        fireEvent.click(bottomWearCategory);
    
        // Check if activeTab state has been updated
        expect(mockSetState).toHaveBeenCalledWith('BottomWear');
    });
    
    // Add more tests as needed
});
