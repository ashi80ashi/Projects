import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        },
        remove: (state,action) => {
            return state.filter((item)=>item.id !== action.payload);
        },
        removeAll: (state) => {
           return state = [];
        },
    },
});

export const { add, remove ,removeAll } = cartSlice.actions;
export default cartSlice.reducer;