import { render, screen, fireEvent } from '@testing-library/react';
import List from './List';
import mockData from '../../mock-data'

test('remove completed item when check button is clicked', () => {
  render(<List data={mockData}></List>);
  fireEvent.click(screen.getByTestId("button-checked-4101"));
  const item = screen.getAllByTestId('list-item');
  expect(item).toHaveLength(5);
});