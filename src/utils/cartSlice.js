import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // mutating the state
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        // originalState = {items:["pizza"]}
        clearCart: (state, action) => {
            // state.items.length = 0; // items = []
            // state = []; // clearing state doesn't work like this
            return {items:[]}; // this new object will repace originalState
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;

