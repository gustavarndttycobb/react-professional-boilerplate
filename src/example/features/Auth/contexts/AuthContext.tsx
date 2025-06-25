import { createContext } from "react";
import type { LoginFormType } from "../types/loginFormType";
import type { IUserData } from "../models/userData.model";

interface IAuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  user: IUserData | null;
  errorMessage: string | null;
  isLoading: boolean;
  login: (data: LoginFormType) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContextType | undefined>(
  undefined
);
