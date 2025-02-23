export const getRefreshToken = () => localStorage.getItem("refresh_token");
export const deleteResetToken = () => localStorage.removeItem("refresh_token");
export const setResetToken = (token: string) => localStorage.setItem("refresh_token", token);
