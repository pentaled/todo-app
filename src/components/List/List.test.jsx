import { render, screen } from '@testing-library/react';
import List from './List';
import mockData from '../../mock-data'
import data from '../../mock-data';

test('renders List without data', () => {
  render(<List data={[]} />);
  const element = screen.getByText(/No Data/i);
  expect(element).toBeInTheDocument();
});

test('renders List with data', () => {
    render(<List data={mockData} />);
    const element = screen.getByText(/Data/i);
    expect(element).toBeInTheDocument();
});

test('renders List when data is six', () => {
  render(<List data={mockData}></List>);
  const element = screen.getAllByTestId(/item/i);
  expect(element).toBeInTheDocument();
});
// test the length of mockData - data.length === 6