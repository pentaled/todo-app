import { render, screen } from '@testing-library/react';
import List from './List';
import mockData from '../../mock-data'

test('renders List without data', () => {
  render(<List data={[]} />);
  const element = screen.getByText(/No Data/i);
  expect(element).toBeInTheDocument();
});

// test when data is not empty.
// test the lenght of mockdata - data.length === 6