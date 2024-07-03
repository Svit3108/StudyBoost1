import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Für zusätzliche Matcher
import Header from './Header';


test('renders the header with the correct text', () => {
  render(<Header />);
  const headerElement = screen.getByText(/Welcome to My App/i);
  expect(headerElement).toBeInTheDocument();
});
