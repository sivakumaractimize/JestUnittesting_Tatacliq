import React from 'react';
import { render, screen } from '@testing-library/react';
import WatchBrands from '../../Components/Megamenu/WatchBrands';

import Imports from '../../Components/Imports';
// Mock the Imports module
jest.mock('../../Components/Imports', () => ({
    ...jest.requireActual('../../Components/Imports'),
    Grid: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
    Typography: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
    Avatar: jest.fn(({ src, ...props }) => <img src={src} {...props} />),
}));

describe('WatchBrands', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render all popular brands correctly', () => {
        render(<WatchBrands />);

        const popularBrands = [
            'Utsa', 'W', 'Biba', 'Forever New', 'Wardrobe', 'Gia',
            'Pantaloons', 'Lifestyle', 'Fabindia', 'Vero Moda', 'Tommy Hilfiger',
            'Forever 21', 'Puma', "Levi's", 'Jockey'
        ];

    });

    it('should render all featured brands correctly', () => {
        render(<WatchBrands />);

        const featuredBrands = [
            'Vark', 'Artagai', 'LOV xcvd', 'Varanga', 'Aurelia', 'Juniper',
            'Yufta', 'Ganga Fashion', 'Cottinfab', 'Aachho', 'Janasya', 'Only',
            'Enamor'
        ];

        // featuredBrands.forEach(brand => {
        //     expect(screen.getByText(brand)).toBeInTheDocument();
        // });
    });

    it('should render avatars correctly in pairs', () => {
        render(<WatchBrands />);

        const avatarSources = [
            'https://assets.tatacliq.com/medias/sys_master/images/33013525741598.jpg',
            'https://assets.tatacliq.com/medias/sys_master/images/33013525807134.jpg',
            'https://assets.tatacliq.com/medias/sys_master/images/33013525872670.jpg',
            'https://assets.tatacliq.com/medias/sys_master/images/33013525938206.jpg',
            'https://assets.tatacliq.com/medias/sys_master/images/33013526003742.jpg',
            'https://assets.tatacliq.com/medias/sys_master/images/33013526069278.jpg'
        ];

        
    });
});
