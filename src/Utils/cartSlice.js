import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    //Mutating the stste over here modifying state
    addItem: (state, action) => {
      state.item.push(action.payload);
    },
    removeItem: (state, action) => {
      const updateItem = state.item.filter((item) => item !== action.payload);
      return { ...state, item: updateItem };
    },
    clearCart: (state) => {
      state.item.length = 0;
    },
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
