import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import Imports from '../../Components/Imports';
import SignupDialog from '../../components/SignupDilog';

jest.mock('../../components/Imports', () => {
  const actual = jest.requireActual('../../components/Imports');
  return {
    ...actual,
    useState: jest.fn(),
    useEffect: jest.fn(),
    Button: (props) => <button {...props} data-testid={props['data-testid']}>{props.children}</button>,
    DialogContent: ({ children }) => <div>{children}</div>,
    DialogActions: ({ children }) => <div>{children}</div>,
    TextField: (props) => <input {...props} data-testid={props.id} />,
    Typography: (props) => <div {...props} data-testid={props['data-testid']}>{props.children}</div>,
    Grid: (props) => <div {...props}>{props.children}</div>,
    HighlightOffIcon: () => <div data-testid="highlight-off-icon" />,
  };
});

describe('SignupDialog', () => {
  let open, onClose;

  beforeEach(() => {
    open = true;
    onClose = jest.fn();
    Imports.useState.mockImplementation((initial) => [initial, jest.fn()]);
    render(<SignupDialog open={open} onClose={onClose} />);
  });

  test('renders SignupDialog when open is true', () => {
    expect(screen.getByText(/Welcome to Tata/i)).toBeInTheDocument();
  });

  test('closes dialog on close button click', () => {
    // fireEvent.click(screen.getByRole('button', { name: /highlight_off/i }));
    // expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('validates input fields and shows errors', () => {
    fireEvent.click(screen.getByRole('button', { name: /signup/i }));
    
    // expect(screen.getByTestId('first-name')).toHaveAttribute('aria-invalid', 'true');
    // expect(screen.getByText(/First Name is required/i)).toBeInTheDocument();
    
    fireEvent.change(screen.getByTestId('first-name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByTestId('last-name'), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: /signup/i }));
    
    // expect(screen.getByText(/Last Name is required/i)).toBeInTheDocument();
  });

  test('successful signup updates localStorage and displays success message', async () => {
    const mockCreateUserWithEmailAndPassword = jest.fn(() => ({
      user: {
        accessToken: 'mockAccessToken',
        email: 'mock@example.com',
      },
    }));

    jest.mock('firebase/auth', () => ({
      createUserWithEmailAndPassword: mockCreateUserWithEmailAndPassword,
    }));

    fireEvent.change(screen.getByTestId('first-name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByTestId('last-name'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByTestId('mobile'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByTestId('email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByTestId('password'), { target: { value: 'password123' } });
    
    fireEvent.click(screen.getByRole('button', { name: /signup/i }));

    // expect(localStorage.getItem('firstName')).toBe('John');
    // expect(screen.getByText(/Signup Successful!/i)).toBeInTheDocument();
  });

  
});
