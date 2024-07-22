import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Giftcard from '../../Components/Giftcard';

// Function to filter out unwanted props before passing them to the DOM
const filterProps = (props) => {
    const { item, container, justifyContent, alignItems, ...rest } = props;
    return rest;
};

// Mock the Imports components used within Giftcard
jest.mock('../../Components/Imports', () => ({
    Grid: ({ children, ...props }) => (
        <div {...filterProps(props)} role={props.container ? 'grid' : undefined}>
            {children}
        </div>
    ),
    Paper: ({ children, ...props }) => <div {...filterProps(props)}>{children}</div>,
    Typography: ({ children, ...props }) => <span {...filterProps(props)}>{children}</span>,
    Button: ({ children, ...props }) => <button {...filterProps(props)}>{children}</button>,
}));

describe('Giftcard Component', () => {
    it('renders gift card information correctly', () => {
        render(<Giftcard />);

        // Check if the main heading "CLIQ Gift Card" is rendered
        expect(screen.getByText('CLIQ Gift Card')).toBeInTheDocument();
    });
});
