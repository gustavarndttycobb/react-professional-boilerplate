import type { ILoginResponse } from "../models/loginResponse.model";
import type { ISignupBody } from "../models/signupBody.model";
import type { ISignupResponse } from "../models/signupResponse.model";
import type { LoginFormType } from "../types/loginFormType";

export interface AuthServiceContract {
    login: (data: LoginFormType) => Promise<ILoginResponse>;
    signup: (data: ISignupBody) => Promise<ISignupResponse>;
}
