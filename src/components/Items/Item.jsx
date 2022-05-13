import { useState } from 'react';
import { useList } from '../../context/ListProvider';

export default function Item({ item }) {
  const { handleUpdateItem, handleDeleteItem } = useList();
  const [isEditing, setIsEditing] = useState(false);

  let content;

  if (isEditing) {
    content = (
        <form
        onSubmit={(event) => {
            event.preventDefault();
            setIsEditing(false);
        }}
        >
            <input
            value={item.text}
            placeholder='Edit content'
            onChange={(e) => {
                handleUpdateItem({
                    ...item,
                    text: e.target.value,
                });
            }}
            />

            <button 
            aria-label={`${item.text}-save`}
            type='submit'>
                Save
            </button>
        </form>
    );
  } else {
      content = (
        <>
        <p style={{ textDecoration: item.purchased ? 'line-through' : null}}>
            {item.text}
        </p>
        <button
        type="button"
        aria-label={`${item.text}-edit`}
        onClick={() => setIsEditing(true)}
        >
            Edit
        </button>
        </>
      );
  }


  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
        <input
        type="checkbox"
        checked={item.purchased}
        onChange={(e) => {
            handleUpdateItem({
                ...item,
                // adding checked at the end of e.target allows the value to become boolean therefor, you can toggle between checked and unchecked
                purchased: e.target.checked,
            });
        }}
        />
        {content}
        <button
        aria-label={`${item.text}-delete`}
        type="button"
        onClick={() => handleDeleteItem(item.id)}
        >
            Delete
        </button>
    </div>
  )
}
