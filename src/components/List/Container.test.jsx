import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page content', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is App/i);
  expect(linkElement).toBeInTheDocument();
});
