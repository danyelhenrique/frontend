import { createSlice } from "@reduxjs/toolkit";

export const schedule_history = createSlice({
  name: "schedule_history",
  initialState: [],
  reducers: {
    load_schedule_history: (state, action) => {
      state.push(...action.payload);
    },
  },
});

export const { load_schedule_history } = schedule_history.actions;

export default schedule_history.reducer;
