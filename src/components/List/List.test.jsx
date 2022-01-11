import { render, screen, fireEvent } from '@testing-library/react';
import List from './List';
import mockData from '../../mock-data'

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
  const element = screen.getAllByTestId(/list-item/i);
  expect(element).toHaveLength(6);
});
// test the length of mockData - data.length === 6

test('update open button to close button and show form', () => {
  render(<List data={mockData}></List>);
  fireEvent.click(screen.getByTestId("button-open"));

  const closebutton = screen.getByTestId('button-close');
  expect(closebutton).toBeTruthy()

  const updateform = screen.getByPlaceholderText('Add todo item')
  expect(updateform).toBeTruthy()
});

test('update close button to open button and hide form', () => {
  render(<List data={mockData}></List>);
  fireEvent.click(screen.getByTestId("button-open"));
  fireEvent.click(screen.getByTestId("button-close"));
  const openbutton = screen.getByTestId('button-open');
  expect(openbutton).toBeTruthy()
});