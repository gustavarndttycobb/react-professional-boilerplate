import { useCallback, useEffect, useMemo, useState } from "react";
import type { IGetUserDataResponse } from "../../../shared/models/getUserDataResponse.model";
import type { LoginFormType } from "../types/loginFormType";
import type { ILoginBody } from "../models/loginBody.model";
import { authService } from "../services/auth.service";
import { userService } from "../../../shared/services/user.service";
import { AuthContext } from "../contexts/AuthContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [user, setUser] = useState<IGetUserDataResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(async (data: LoginFormType) => {
    setIsLoading(true);
    try {
      setErrorMessage(null);
      const result = await authService.login(data as ILoginBody);
      setToken(result.token);
      const user = await userService.getUserData({
        token: result.token,
      });
      console.log("user", user);
      setUser(user);
      localStorage.setItem("token", result.token);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message || "Error to login");
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  }, []);

  const authContextValue = useMemo(
    () => ({
      isAuthenticated: !!token,
      token,
      user,
      errorMessage,
      isLoading,
      login,
      logout,
    }),
    [token, user, errorMessage, isLoading, login, logout]
  );

  useEffect(() => {
    const restoreSession = async () => {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        try {
          const user = await userService.getUserData({
            token: storedToken,
          });
          setUser(user);
          setToken(storedToken);
        } catch (error) {
          if (error instanceof Error) {
            setErrorMessage(error.message || "Error to logout");
          }
          logout();
        }
      }
    };

    restoreSession();
  }, []);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
