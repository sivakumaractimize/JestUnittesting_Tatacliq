import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '../../Components/Footer';

describe('Footer Component', () => {
  test('renders Footer component without Back to Top button', () => {
    render(<Footer />);

    // The button should not be in the document
    expect(screen.queryByRole('button', { name: 'Back to Top' })).not.toBeInTheDocument();
    
    // Additional checks to ensure other parts of the Footer are rendered correctly
    // Example: Check if certain text or elements are present
    expect(screen.getByText('Tata MarketPlace')).toBeInTheDocument();
    expect(screen.getByText('Customer Service')).toBeInTheDocument();
    expect(screen.getByText('My Tata CliQ')).toBeInTheDocument();
    expect(screen.getByText('Download App')).toBeInTheDocument();
  });
});
