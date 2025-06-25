import { LOGIN_ENDPOINT, SIGNUP_ENDPOINT } from "../../../utils/endpoints";
import type { AuthServiceContract } from "../contracts/auth.contract";
import type { ILoginResponse } from "../models/loginResponse.model";
import type { ISignupBody } from "../models/signupBody.model";
import type { ISignupResponse } from "../models/signupResponse.model";
import type { LoginFormType } from "../types/loginFormType";

export class AuthService implements AuthServiceContract {

  async login(data: LoginFormType): Promise<ILoginResponse> {
    const response = await fetch(LOGIN_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message ?? 'Login failed')
    }

    return await response.json();
  }

  async signup(data: ISignupBody): Promise<ISignupResponse> {
    const response = await fetch(SIGNUP_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message ?? 'Signup failed')
    }

    return await response.json();
  }
}

export const authService = new AuthService();


