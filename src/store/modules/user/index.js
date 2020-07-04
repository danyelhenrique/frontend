import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../services/api";
import history from "../../../config/history";

export const userStore = createAsyncThunk("user/store", async (data) => {
  const response = await api.post("/users", data);
  return response.data;
});

export const userAuth = createAsyncThunk("user/auth", async (data) => {
  const response = await api.post("/sessions", data);
  return response.data;
});

export const user = createSlice({
  name: "user",
  initialState: {
    token: null,
    email: null,
    id: null,
    name: null,
    signed: false,
  },
  reducers: {
    logout: (state) => {
      state.name = null;
      state.token = null;
      state.email = null;
      state.token = null;
      state.id = null;
      state.signed = null;
    },
  },
  extraReducers: {
    [userStore.fulfilled]: (state, action) => {
      history.push("/singin");
    },
    [userStore.rejected]: (state, action) => {},

    [userAuth.fulfilled]: (state, action) => {
      const { token, email, name, id } = action.payload;

      state.name = name;
      state.token = token;
      state.email = email;
      state.token = token;
      state.id = id;
      state.signed = true;
      history.push("/");
    },
    [userAuth.rejected]: (state, action) => {},
  },
});

export const { logout } = user.actions;

export default user.reducer;
