import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type initialStateType = {
  isAuthenticated: boolean;
  loading: "idle" | "pending" | "succeeded" | "failed";
};

const initialState: initialStateType = {
  isAuthenticated: false,
  loading: "idle",
};

export const authVerify = createAsyncThunk("auth/isAuthenticated", async () => {
  const response = await axios.get<{ isauth: boolean }>("process");
  return response.data.isauth;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authVerify.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(authVerify.fulfilled, (state) => {
        state.loading = "succeeded";
        state.isAuthenticated = true;
      })
      .addCase(authVerify.rejected, (state) => {
        state.loading = "failed";
        state.isAuthenticated = false;
      });
  },
});

export const { setAuthenticated } = authSlice.actions;

export default authSlice.reducer;
