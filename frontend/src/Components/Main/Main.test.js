import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from './Main'; // Passe den Pfad entsprechend deiner Ordnerstruktur an

// Testfall: Überprüfe, ob die Main-Komponente gerendert wird und den richtigen Inhalt enthält
test('renders main content', () => {
  render(<Main />);

  // Überprüfe, ob der Haupttitel und der Hauptinhalt in der Komponente vorhanden sind
  const mainTitle = screen.getByText(/Main Content/i);
  const mainParagraph = screen.getByText(/This is the main content/i);

  // Erwartung: Der Haupttitel und der Hauptabsatz sollten in der Komponente vorhanden sein
  expect(mainTitle).toBeInTheDocument();
  expect(mainParagraph).toBeInTheDocument();
});
