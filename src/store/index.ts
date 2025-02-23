import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { authSlice } from "./authSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
