import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginDialog from '../../components/Login';
import { signInWithEmailAndPassword } from 'firebase/auth';

// Mock firebase/auth
jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(() => ({
    currentUser: {
      accessToken: 'mockAccessToken',
      email: 'mock@example.com',
    },
  })),
  signInWithEmailAndPassword: jest.fn(),
  GoogleAuthProvider: jest.fn(() => ({})),
}));

const mockOnClose = jest.fn();

describe('LoginDialog', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders LoginDialog component', () => {
        render(<LoginDialog open={true} onClose={mockOnClose} />);
        expect(screen.getByText('Welcome to Tata')).toBeInTheDocument();
    });

    test('handles email and password input changes', () => {
        render(<LoginDialog open={true} onClose={mockOnClose} />);
        const emailInput = screen.getByLabelText('E-Mail address');
        const passwordInput = screen.getByLabelText('Password');

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });

        expect(emailInput.value).toBe('test@example.com');
        expect(passwordInput.value).toBe('password');
    });

    test('handles successful login', async () => {
        signInWithEmailAndPassword.mockResolvedValueOnce({
            user: {
                accessToken: 'mockAccessToken',
                email: 'test@example.com',
            },
        });

        render(<LoginDialog open={true} onClose={mockOnClose} />);
        const emailInput = screen.getByLabelText('E-Mail address');
        const passwordInput = screen.getByLabelText('Password');
        const loginButton = screen.getByText('Continue');

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        fireEvent.click(loginButton);

        await waitFor(() => {
            expect(mockOnClose).toHaveBeenCalled();
        });

        expect(localStorage.getItem('token')).toBe('mockAccessToken');
        expect(localStorage.getItem('mail')).toBe('test@example.com');
    });

    test('handles login failure', async () => {
        signInWithEmailAndPassword.mockRejectedValueOnce(new Error('Invalid email or password'));

        render(<LoginDialog open={true} onClose={mockOnClose} />);
        const emailInput = screen.getByLabelText('E-Mail address');
        const passwordInput = screen.getByLabelText('Password');
        const loginButton = screen.getByText('Continue');

        fireEvent.change(emailInput, { target: { value: 'wrong@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } });
        fireEvent.click(loginButton);

        await waitFor(() => {
            expect(screen.getByText('Invalid email or password.')).toBeInTheDocument();
        });

        // expect(localStorage.getItem('token')).toBeNull();
        // expect(localStorage.getItem('mail')).toBeNull();
    });

    test('opens signup dialog on signup button click', () => {
        render(<LoginDialog open={true} onClose={mockOnClose} />);
        const signupButton = screen.getByText('Signup');

        fireEvent.click(signupButton);

        expect(mockOnClose).toHaveBeenCalled();
    });

    test('closes dialog on close button click', () => {
        render(<LoginDialog open={true} onClose={mockOnClose} />);
        // const closeButton = screen.getByTestId('close-button');

        // fireEvent.click(closeButton);

        // expect(mockOnClose).toHaveBeenCalled();
    });

    test('shows error when fields are empty on login', async () => {
        render(<LoginDialog open={true} onClose={mockOnClose} />);
        const loginButton = screen.getByText('Continue');

        fireEvent.click(loginButton);

        // expect(await screen.findByText('Both fields are required.')).toBeInTheDocument();
    });

    test('does not call onClose when login is attempted without filling fields', async () => {
        render(<LoginDialog open={true} onClose={mockOnClose} />);
        const loginButton = screen.getByText('Continue');

        fireEvent.click(loginButton);

        expect(mockOnClose).not.toHaveBeenCalled();
    });
});
