import { render, screen, fireEvent } from '@testing-library/react';
import List from './List';
import mockData from '../../mock-data'

test('remove completed item when check button is clicked', () => {
  render(<List data={mockData}></List>);
  fireEvent.click(screen.getByTestId("button-checked-4101"));
  const item = screen.getAllByTestId('list-item');
  expect(item).toHaveLength(5);
});

test('remove deleted item when delete button is clicked', () => {
  render(<List data={mockData}></List>);
  fireEvent.click(screen.getByTestId("button-delete-4101"));
  const item = screen.getAllByTestId('list-item');
  expect(item).toHaveLength(5);
});

test('show update form when edit button is clicked', () => {
  render(<List data={mockData}></List>);
  fireEvent.click(screen.getByTestId("button-edit-4101"));

  const updateform = screen.getByTestId('todo-form-4101');
  expect(updateform).toBeTruthy()
});

test('update item when update form is submitted', () => {
  render(<List data={mockData}></List>);
  fireEvent.click(screen.getByTestId("button-edit-4101"));
  const updateform = screen.getByTestId('todo-form-4101');

  const inputField = screen.getByTestId('input-description-4101');
  expect(inputField).toHaveValue('Buy Milk')

  fireEvent.change(inputField, {target: { value: 'Buy Chicken' }})
  expect(inputField).toHaveValue('Buy Chicken')

  //fireEvent.submit(updateform)
  //const element = screen.getByText(/Buy Milk/i)
  //expect(element).toBeInTheDocument();
});