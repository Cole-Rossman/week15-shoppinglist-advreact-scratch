import { useState } from 'react';
import { useList } from '../../context/ListProvider';
import Item from '../../components/Items/Item';

export default function ShoppingList() {
  const [newItem, setNewItem] = useState('');
  const { items, handleAddItem } = useList();

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddItem(newItem);
    setNewItem('');
  };

  return (
    <>
    <h1>Shopping Items</h1>
    <form>
      <input
      type="text"
      name="newItem"
      placeholder="Enter new item"
      value={newItem}
      onChange={(event) => setNewItem(event.target.value)}
      />
      <button onClick={handleSubmit}>
        Add item
      </button>
    </form>
    <ul>
      {items.map((item) => {
        return <li key={item.id}>
          <Item 
          item={item}
          />
        </li>
      })}
    </ul>
    </>
  )
}
