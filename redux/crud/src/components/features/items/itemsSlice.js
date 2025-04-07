import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: (name, description) => {
        return {
          payload: {
            id: nanoid(),
            name,
            description,
          },
        };
      },
    },

    
    updateItem: (state, action) => {
      const { id, name, description } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.name = name;
        existingItem.description = description;
      }
    },
    deleteItem: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});



export const { addItem, updateItem, deleteItem } = itemsSlice.actions;
export default itemsSlice.reducer;