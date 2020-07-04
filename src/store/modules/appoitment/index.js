import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../services/api";

export const postAppoitment = createAsyncThunk(
  "appoitment/store",
  async (data) => {
    const mock = { user_id: "1" };

    const { schedule_id } = data;

    const type = schedule_id ? "put" : "post";
    const url = schedule_id ? `/schedules/${schedule_id}` : "/schedules";
    const response = await api[type](url, { ...data, ...mock });
    return response.data;
  }
);

export const appoitment = createSlice({
  name: "appoitment",
  initialState: {
    entry: null,
    lunch: null,
    lunch_end: null,
    exit: null,
    id: null,
    date: null,
  },
  extraReducers: {
    [postAppoitment.fulfilled]: (state, action) => {
      const { entry, lunch, lunch_end, exit, id, date } = action.payload;

      state.entry = entry || null;
      state.lunch = lunch || null;
      state.lunch_end = lunch_end || null;
      state.exit = exit || null;
      state.id = id || null;
      state.date = date || null;
    },
    [postAppoitment.rejected]: (state, action) => {},
  },
});

export default appoitment.reducer;
