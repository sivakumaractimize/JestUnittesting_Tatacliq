// ImageSelectorDialog.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ImageSelectorDialog from '../../Components/Innerproduct/DilogBox';
import Imports from '../../Components/Imports';

// Mocking the Imports
jest.mock('../../Components/Imports', () => {
    const React = require('react');
    return {
        useEffect: React.useEffect,
        Grid: ({ children, ...props }) => <div {...props}>{children}</div>,
        List: ({ children, ...props }) => <ul {...props}>{children}</ul>,
        ListItem: ({ children, ...props }) => <li {...props}>{children}</li>,
        ListItemButton: ({ children, ...props }) => <button {...props}>{children}</button>,
        IconButton: ({ children, ...props }) => <button {...props}>{children}</button>,
        CloseIcon: (props) => <span {...props}>X</span>,
        NavigateBeforeIcon: (props) => <span {...props}>{'<'}</span>,
        NavigateNextIcon: (props) => <span {...props}>{'>'}</span>,
    };
});

describe('ImageSelectorDialog', () => {
    const imgUrls = [
        'https://via.placeholder.com/150/0000FF/808080',
        'https://via.placeholder.com/150/FF0000/FFFFFF',
        'https://via.placeholder.com/150/FFFF00/000000'
    ];
    const fallbackUrl = 'https://via.placeholder.com/150';
    const onClose = jest.fn();

    const renderComponent = (props) => render(<ImageSelectorDialog {...props} />);

    test('renders ImageSelectorDialog component', () => {
        renderComponent({ imgUrls, open: true, onClose, fallbackUrl });

        // Check if the Dialog is open
        expect(screen.getByRole('dialog')).toBeInTheDocument();

        // Check if the first image is selected by default
        expect(screen.getByAltText('Large')).toHaveAttribute('src', imgUrls[0]);

        // Check if the list of images is rendered
        imgUrls.forEach((url, index) => {
            expect(screen.getByAltText(`img-${index}`)).toHaveAttribute('src', url);
        });

        // Check if close button is rendered
        expect(screen.getByText('X')).toBeInTheDocument();
    });

    test('handles image selection', () => {
        renderComponent({ imgUrls, open: true, onClose, fallbackUrl });

        // Click on the second image
        fireEvent.click(screen.getByAltText('img-1'));

        // Check if the selected image is updated
        expect(screen.getByAltText('Large')).toHaveAttribute('src', imgUrls[1]);
    });

    test('handles previous and next image navigation', () => {
        renderComponent({ imgUrls, open: true, onClose, fallbackUrl });

        // Click on the next image button
        fireEvent.click(screen.getByText('>'));

        // Check if the selected image is updated
        expect(screen.getByAltText('Large')).toHaveAttribute('src', imgUrls[1]);

        // Click on the previous image button
        fireEvent.click(screen.getByText('<'));

        // Check if the selected image is updated
        expect(screen.getByAltText('Large')).toHaveAttribute('src', imgUrls[0]);
    });

    test('handles dialog close', () => {
        renderComponent({ imgUrls, open: true, onClose, fallbackUrl });

        // Click on the close button
        fireEvent.click(screen.getByText('X'));

        // Check if onClose is called
        expect(onClose).toHaveBeenCalled();
    });

    test('renders fallback image if imgUrls is empty', () => {
        renderComponent({ imgUrls: [], open: true, onClose, fallbackUrl });

        // Check if the fallback image is rendered
        expect(screen.getByAltText('Large')).toHaveAttribute('src', fallbackUrl);
    });
});
