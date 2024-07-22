import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import ProfileDialog from '../../Components/Profiledilogbox';
import dayjs from 'dayjs';

jest.mock('../../Components/Imports', () => ({
    Grid: ({ children }) => <div>{children}</div>,
    Dialog: ({ children, open }) => (open ? <div>{children}</div> : null),
    DialogTitle: ({ children }) => <div>{children}</div>,
    DialogContent: ({ children }) => <div>{children}</div>,
    TextField: ({ fullWidth, margin, ...props }) => <input {...props} />,
    Button: (props) => <button {...props}>{props.children}</button>,
    useState: jest.requireActual('react').useState,
    useEffect: jest.requireActual('react').useEffect
}));

describe('ProfileDialog', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('renders correctly', () => {
    render(<ProfileDialog open={true} onClose={jest.fn()} />);
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument();
    expect(screen.getByLabelText(/Select Date of Birth/i)).toBeInTheDocument();
  });

  test('updates first name and last name in localStorage', () => {
    render(<ProfileDialog open={true} onClose={jest.fn()} />);

    const firstNameInput = screen.getByPlaceholderText('First Name');
    const lastNameInput = screen.getByPlaceholderText('Last Name');

    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });

    expect(localStorage.getItem('firstName')).toBe('John');
    expect(localStorage.getItem('lastName')).toBe('Doe');
  });

  test('updates date of birth in localStorage', () => {
    render(<ProfileDialog open={true} onClose={jest.fn()} />);

    const dateInput = screen.getByLabelText(/Select Date of Birth/i);
    const date = dayjs('2000-01-01');

    fireEvent.change(dateInput, { target: { value: date.format('MM/DD/YYYY') } });

    expect(localStorage.getItem('date')).toBe(date.format('D/M/YYYY'));
  });

  test('calls onClose when Done button is clicked', () => {
    const onClose = jest.fn();
    render(<ProfileDialog open={true} onClose={onClose} />);

    const doneButton = screen.getByText(/Done/i);
    userEvent.click(doneButton);

    expect(onClose).toHaveBeenCalled();
  });
});
