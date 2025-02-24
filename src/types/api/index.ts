export type ApiResponse<T> = {
  status: "success" | "error";
  message?: string;
  data?: T;
};

export type AuthResponse = ApiResponse<{ user: { email: string; username: string } }>;

export type IsUserAuthenticaed = () => Promise<void | AuthResponse | "invalid">;

export type RefreshResponse = { status: string; message: string; refresh_token: string };
