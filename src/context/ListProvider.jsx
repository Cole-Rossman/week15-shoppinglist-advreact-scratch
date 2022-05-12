import { createContext, useContext, useReducer } from 'react';

const initialItem = [{ id: Date.now(), text: 'Bone Broth', purchased: false }];

const listReducer = (items, action) => {
    switch(action.type) {
      case 'ADD ITEM':
          return [
              { id: Date.now(), text: action.payload.text, purchased: false }, 
              ...items
          ];
      case 'UPDATE ITEM':
          return items.map((item) => {
            if(item.id === action.payload.item.id) {
                const { purchased, text } = action.payload.item;

                return {
                    ...item,
                    purchased,
                    text,
                };
            }
            return item;
          });
      case 'DELETE ITEM':
          return items.filter((item) => item.id !== action.payload.id);
      default:
          return items;
    }
};

const ListContext = createContext();

export const ListProvider = ({ children }) => {
    const [items, dispatch] = useReducer(listReducer, initialItem);

    const handleAddItem = (text) => {
        dispatch({ type: 'ADD ITEM', payload: { text} });
    };

    const handleUpdateItem = (item) => {
        dispatch({ type: 'UPDATE ITEM', payload: {item} });
    };

    const handleDeleteItem = (id) => {
        dispatch({ type: 'DELETE ITEM', payload: {id} });
    };

 return (
     <ListContext.Provider
       value={{ items, handleAddItem, handleDeleteItem, handleUpdateItem }}
     >
         {children}
     </ListContext.Provider>
 );
};

export const useList = () => {
    const context = useContext(ListContext);

    if (context === undefined)
    throw new Error('useList must be called from within a ListProvider');

    return context;
};