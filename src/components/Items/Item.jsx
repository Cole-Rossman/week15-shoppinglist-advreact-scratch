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
            aria-label="Edit"
            onChange={(e) => {
                handleUpdateItem({
                    ...item,
                    text: e.target.value,
                });
            }}
            />

            <button type='submit'>
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
                purchased: e.target.value,
            });
        }}
        />
        {content}
        <button
        type="button"
        onClick={() => handleDeleteItem(item.id)}
        >
            Delete
        </button>
    </div>
  )
}
