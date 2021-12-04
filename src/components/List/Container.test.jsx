import { render, screen } from '@testing-library/react';
import Container from './Container';

test('renders container page title and without children', () => {
  render(<Container title="Test Title"/>);
  const element = screen.getByText(/Test Title/i);
  expect(element).toBeInTheDocument();
});

test('renders container page title and children', () => {
  render(<Container title="Test Title">Container Children</Container>);
  const elementTitle  = screen.getByText(/Test Title/i);
  expect(elementTitle).toBeInTheDocument();

  const elementChildren  = screen.getByText(/Container Children/i);
  expect(elementChildren).toBeInTheDocument();
});

