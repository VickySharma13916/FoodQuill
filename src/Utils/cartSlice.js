import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    //Older Version of Redux has not mutate the state directly and return is mandatory.
    //New Version of Redux has Mutating the state over here modifying state and return is not mandatory.
    //Redux is uses the immer library for mutate the state
    addItem: (state, action) => {
      state.item.push(action.payload);
    },
    removeItem: (state, action) => {
      const updateItem = state.item.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, item: updateItem };
    },
    clearCart: (state) => {
      console.log(current(state));
      // state = ['vicky'] It is basically change or add the reference the of state but not mutating the state.
      //RTK = Either Mutate the existing state or return a new state
      state.item.length = 0; // State = []
    },
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
