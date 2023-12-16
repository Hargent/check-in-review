type LoginData = {
  username?: string;
  email?: string;
  password: string;
};
type RegisterData = {
  username: string;
  email: string;
  password1: string;
  password2: string;
};
export type { LoginData, RegisterData };
