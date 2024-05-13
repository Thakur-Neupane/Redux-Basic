import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};
const counterSlic = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      state.count++;
    },
    decrease: (state) => {
      state.count--;
    },
  },
});

const { reducer, actions } = counterSlic;

export default reducer;
