import axios from "axios";

const USER_URL = `${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}`;

export const isUserAuthenticaed = async () => {
  //Will call the server to ensure user is valid, if 401 received, then call the refresh route if user ahs a refresh token
};
