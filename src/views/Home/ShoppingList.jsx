import { useState } from 'react';
import { useList } from '../../context/ListProvider';
import Item from '../../components/Items/Item';

export default function ShoppingList() {
  const [newItem, setNewItem] = useState('');
  const { items, handleAddItem, handleDeleteItem, handleUpdateItem } = useList();

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddItem(newItem);
    setNewItem('');
  };

  return (
    <>
    <h1>Shopping Items</h1>
    <form onSubmit={handleSubmit}>
      <input
      type="text"
      name="newItem"
      placeholder="Enter new item"
      value={newItem}
      onChange={(event) => setNewItem(event.target.value)}
      />
    </form>
    </>
  )
}
