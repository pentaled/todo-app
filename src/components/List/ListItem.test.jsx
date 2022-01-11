import { render, fireEvent, getByText, screen } from '@testing-library/react';
import List from './List';
import mockData from '../../mock-data'

test('remove completed item when check button is clicked', () => {
    render(<List data={mockData} />);
    fireEvent.click(screen.getByTestId('btn-checked-4101'))
    const items = screen.getAllByTestId('list-item');
    expect(items).toHaveLength(5);
});

test('remove deleted item when delete button is clicked', () => {
    render(<List data={mockData} />);
    fireEvent.click(screen.getByTestId('btn-deleted-4101'))
    const items = screen.getAllByTestId('list-item');
    expect(items).toHaveLength(5);
})

test('show update form when edit button is clicked', () => {
    render(<List data={mockData} />);
    fireEvent.click(screen.getByTestId('btn-edit-4101'))

    const updateForm = screen.getByTestId('todo-form-4101')
    expect(updateForm).toBeTruthy()
})


test('update item when update form is submitted ', () => {
    render(<List data={mockData} />);
    fireEvent.click(screen.getByTestId('btn-edit-4101'))
    const updateForm = screen.getByTestId('todo-form-4101')

    const inputField = screen.getByTestId('input-description-4101')
    expect(inputField).toHaveValue('Buy Milk')

    fireEvent.change(inputField, { target: { value: 'Buy Chicken' } })
    expect(inputField).toHaveValue('Buy Chicken')

    // fireEvent.submit(updateForm)
    // const element = screen.getByText(/Buy Milk/i);
    // expect(element).toBeInTheDocument();
})