import { render, screen } from '@testing-library/react';
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
    })
})