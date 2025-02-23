import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
};

const initialState: initialStateType = {
  email: "",
  username: "",
  firstName: "",
  lastName: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setUserUserName: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setUserUserFirstname: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setUserUserLastname: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
  },
});

export const { setUserEmail, setUserUserName, setUserUserFirstname, setUserUserLastname } =
  userSlice.actions;

export default userSlice.reducer;
