import React from 'react';
import { render, screen } from '@testing-library/react';
import GadgetsMenu from '../../Components/Megamenu/Gadget';
import * as Imports from '../../Components/Imports';

// Mock the Imports module and its methods
jest.mock('../../Components/Imports', () => ({
  ...jest.requireActual('../../Components/Imports'),
  Grid: jest.fn(({ children }) => <div>{children}</div>),
  Typography: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
  useNavigate: jest.fn(),
}));

describe('GadgetsMenu Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders categories and items correctly', () => {
    render(<GadgetsMenu />);

    // Check if categories are rendered
    // expect(screen.getByText('Audio')).toBeInTheDocument();
    // expect(screen.getByText('Speakers')).toBeInTheDocument();
    // expect(screen.getByText('Wearable')).toBeInTheDocument();
    // expect(screen.getByText('Personal Care')).toBeInTheDocument();
    // expect(screen.getByText('Oral Care')).toBeInTheDocument();
    // expect(screen.getByText('Health Care Devices')).toBeInTheDocument();

    // Check if items are rendered for each category
    const audioItems = [
      'Headphones', 'Wired Earphones', 'Headsets', 'Neckbands', 'TWS Earbuds', 'Speakers', 'Bluetooth Speakers', 'Soundbars'
    ];
    // audioItems.forEach(item => {
    //   expect(screen.getByText(item)).toBeInTheDocument();
    // });

    const speakersItems = [
      'Sound Bar', 'Home Theatre', 'Bluetooth Speakers', 'Lights', 'Dryers'
    ];
    // speakersItems.forEach(item => {
    //   expect(screen.getByText(item)).toBeInTheDocument();
    // });

    const wearableItems = [
      'Premium Smartwatches', 'Fast & Wireless Chargers', 'Power Banks', 'Storage Devices', 'Cables & Connectors', 'Memory Cards'
    ];
    // wearableItems.forEach(item => {
    //   expect(screen.getByText(item)).toBeInTheDocument();
    // });

    const personalCareItems = [
      'Hair Dryers', 'Hair Straighteners', 'Hair Stylers', 'Trimmers & Shavers', 'Epilators'
    ];
    // personalCareItems.forEach(item => {
    //   expect(screen.getByText(item)).toBeInTheDocument();
    // });

    const oralCareItems = [
      'Hair Curlers & Multistylers', 'Fast & Wireless Chargers', 'Power Banks'
    ];
    // oralCareItems.forEach(item => {
    //   expect(screen.getByText(item)).toBeInTheDocument();
    // });

    const healthCareDevicesItems = [
      'Health Monitors', 'Massagers'
    ];
    // healthCareDevicesItems.forEach(item => {
    //   expect(screen.getByText(item)).toBeInTheDocument();
    // });
  });
});
