import { createContext} from "react";

type EnvironmentContextType = {
    isDevelopmentMode: boolean;
};

export const EnvironmentContext = createContext<EnvironmentContextType | undefined>(undefined);
