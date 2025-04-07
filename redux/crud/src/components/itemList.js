import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../features/items/itemsSlice';
import ItemForm from './components/ItemForm.js';

function ItemList() {
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();
  const [itemToEdit, setItemToEdit] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteItem({ id }));
  };

  const handleEdit = (item) => {
    setItemToEdit(item);
  };

  const handleCancel = () => {
    setItemToEdit(null);
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          {item.name} - {item.description}
          <button onClick={() => handleEdit(item)}>Edit</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
      <ItemForm itemToEdit={itemToEdit} onCancel={handleCancel}/>
    </div>
  );
}

export default ItemList;