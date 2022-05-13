import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { ListProvider } from './context/ListProvider';


describe('App', () => {
    it('should display shopping list items with input to add more, delete, update and check items', () => {
        render(
            <ListProvider>
                <App />
            </ListProvider>
        )
        
        const newItemInput = screen.getByPlaceholderText(/enter new item/i);
        userEvent.type(newItemInput, 'carrots');

        const addItemButton = screen.getByRole('button', { name: /add item/i});
        userEvent.click(addItemButton);

        screen.getByText(/carrots/i);

        const editItemButton = screen.getByRole('button', { name: /carrots-edit/i});
        userEvent.click(editItemButton);
        
        const listItem = screen.getByPlaceholderText(/edit content/i);
        userEvent.clear(listItem);
        userEvent.type(listItem, 'bread');

        const saveItem = screen.getByRole('button', { name: /bread-save/i});
        userEvent.click(saveItem);

        screen.getByText(/bread/i);
        screen.getByText(/bone broth/i);

        const deleteItemButton = screen.getByRole('button', { name: /bread-delete/i});
        userEvent.click(deleteItemButton);

    })
})