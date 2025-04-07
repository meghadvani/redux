import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, updateItem } from '../features/items/itemsSlice';

function ItemForm({ itemToEdit, onCancel }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (itemToEdit) {
      setName(itemToEdit.name);
      setDescription(itemToEdit.description);
    } else {
      setName('');
      setDescription('');
    }
  }, [itemToEdit]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemToEdit) {
      dispatch(updateItem({ id: itemToEdit.id, name, description }));
    } else {
      dispatch(addItem(name, description));
    }
    if (onCancel){
      onCancel();
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">{itemToEdit ? 'Update' : 'Add'}</button>
      {onCancel && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
}





export default ItemForm;