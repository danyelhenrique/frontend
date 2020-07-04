import { configureStore, combineReducers } from "@reduxjs/toolkit";
import schedule_history from "./modules/scheduleHistory";
import appoitment from "./modules/appoitment";
import user from "./modules/user";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const reducers = combineReducers({
  schedule_history,
  appoitment,
  user,
});
const persistConfig = {
  key: "appoitmes",
  storage,
  whitelist: ["appoitment", "user"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
export const persistor = persistStore(store);
