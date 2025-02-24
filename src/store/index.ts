import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { authSlice, setAuthenticated } from "./authSlice";
import { setLogoutHandler } from "../api/api";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    auth: authSlice.reducer,
  },
});

// Register the logoutHandler after the store is initilized,
// this allows axios inteceptor to access the logout reduser in the auth slice
setLogoutHandler(() => store.dispatch(setAuthenticated(false)));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
