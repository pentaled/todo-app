import { render, fireEvent, getByText, screen } from '@testing-library/react';
import List from './List';
import mockData from '../../mock-data'

test('remove completed item when check button is clicked', () => {
    render(<List data={mockData} />);
    fireEvent.click(screen.getByTestId('btn-checked-4101'))
    const items = screen.getAllByTestId('list-item');
    expect(items).toHaveLength(5);
});