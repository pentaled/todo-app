import { render, screen, fireEvent } from '@testing-library/react';
import List from './List';
import { CheckCircleOutlined } from '@ant-design/icons';
import mockData from '../../mock-data'

test('remove completed item when check button is clicked', () => {
  render(<List data={mockData}></List>);
  const element = screen.getAllByTestId(/list-item/i);
  expect(element).toHaveLength(6);

  render(<CheckCircleOutlined key="check" onClick={() => actionComplete(item.id)}/>);
  fireEvent.click = screen.getAllByTestId(/list-item/i);
  expect(element).toHaveLength(6);
});