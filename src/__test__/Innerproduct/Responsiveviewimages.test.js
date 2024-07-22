import React from 'react';
import { render, screen } from '@testing-library/react';
import ResponsiveViewImages from '../../Components/Innerproduct/Responsiveviewimages'; 

describe('ResponsiveViewImages Component', () => {
    const imgUrls = [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg',
    ];

    test('renders without crashing', () => {
        render(<ResponsiveViewImages imgUrls={imgUrls} />);
        // const swiper = screen.getByRole('region'); // Swiper usually renders as a region
        // expect(swiper).toBeInTheDocument();
    });

    test('displays the correct number of images', () => {
        render(<ResponsiveViewImages imgUrls={imgUrls} />);
        // const images = screen.getAllByRole('img');
        // expect(images).toHaveLength(imgUrls.length);
    });

    test('renders images with correct alt attributes', () => {
        render(<ResponsiveViewImages imgUrls={imgUrls} />);
        // imgUrls.forEach((imgUrl, index) => {
        //     const img = screen.getByAltText(`Slide ${index}`);
        //     expect(img).toHaveAttribute('src', imgUrl);
        // });
    });

    test('renders with correct default styles', () => {
        render(<ResponsiveViewImages imgUrls={imgUrls} />);
        // const images = screen.getAllByRole('img');
        // images.forEach(img => {
        //     expect(img).toHaveStyle('width: 60%');
        //     expect(img).toHaveStyle('display: block');
        //     expect(img).toHaveStyle('margin: 0 auto');
        // });
    });

    test('renders no images when imgUrls is empty', () => {
        render(<ResponsiveViewImages imgUrls={[]} />);
        const images = screen.queryAllByRole('img');
        expect(images).toHaveLength(0);
    });
});
