import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Main from './Main';

test('renders the main content', () => {
  render(<Main />);
  const mainContent = screen.getByText(/Main content goes here/i);
  expect(mainContent).toBeInTheDocument();
});
