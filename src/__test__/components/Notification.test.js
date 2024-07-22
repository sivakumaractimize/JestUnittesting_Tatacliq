import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Notification from '../../Components/Notifications';

test('renders Notification component', () => {
  render(<Notification />);
//   const alertText = screen.getByText((content, element) => {
//     return content.includes("To Ensure you do not miss order related updates, we will send you sms alerts until your package is delivered");
//   });
//   expect(alertText).toBeInTheDocument();
});

test('renders SMS text and switch', () => {
  render(<Notification />);
  const smsTexts = screen.getAllByText(/SMS/i);
  expect(smsTexts.length).toBeGreaterThan(0);
  const switchElement = screen.getByRole('checkbox', { name: /controlled/i });
  expect(switchElement).toBeInTheDocument();
  expect(switchElement).toBeChecked();
});

test('switch changes state when clicked', () => {
  render(<Notification />);
  const switchElement = screen.getByRole('checkbox', { name: /controlled/i });
  expect(switchElement).toBeChecked();
  fireEvent.click(switchElement);
  expect(switchElement).not.toBeChecked();
  fireEvent.click(switchElement);
  expect(switchElement).toBeChecked();
});
