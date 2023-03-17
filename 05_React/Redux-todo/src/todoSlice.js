import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialdata: [{ id: 123, txt: "sample test" }],
};
export const todofeature = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const obj = {
        id: Math.random(),
        txt: action.payload,
      };
      state.initialdata.push(obj);
    },
    removeTodo: (state, action) => {
      state.initialdata = state.initialdata.filter(
        (data) => data.id !== action.payload
      );
    },
  },
});

export const { addTodo,removeTodo } = todofeature.actions;
export default todofeature.reducer;
