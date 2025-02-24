import axios from "axios";
import { getRefreshToken, setResetToken } from "../local_storage";
import { RefreshResponse } from "../types/api";

const ROOT = `${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}`;

const api = axios.create({
  baseURL: ROOT,
  headers: { Accept: "application/json" },
  withCredentials: true,
});

//Assign our logout handler to null at first, redux will assign this
let logoutHandler: (() => void) | null = null;

//Export a new function that allows redux to assign the above placeholder
export const setLogoutHandler = (handler: () => void) => {
  logoutHandler = handler;
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (!error.response) {
      console.error("No response received, possible network error.");
      return Promise.reject({ message: "Network error or server unavailable" });
    }

    const { status } = error.response;
    if (status === 401) {
      try {
        const refresh = await axios.post<RefreshResponse>(
          `${ROOT}/auth/refresh`,
          { refresh_token: getRefreshToken() },
          { withCredentials: true }
        );

        //as any code other than 2** will throw an error, we can safely assume we have a new refresh token
        setResetToken(refresh.data.refresh_token);
        return api(error.config); // Retry original request
      } catch (refreshError) {
        logoutHandler && logoutHandler();
        return Promise.reject({ message: "Authentication Failed" });
      }
    }

    return Promise.reject(error);
  }
);

export default api;
