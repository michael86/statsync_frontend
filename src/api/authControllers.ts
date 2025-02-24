import { AuthResponse, IsUserAuthenticaed } from "../types/api";
import api from "./api";

export const isUserAuthenticaed = async () => {
  try {
    const res = await api.get<AuthResponse>("/auth/me", { withCredentials: true });
    console.log(res);

    return { ...res.data.data };
  } catch (error) {
    //User failed authentication so return void and logout
    return;
  }
};
