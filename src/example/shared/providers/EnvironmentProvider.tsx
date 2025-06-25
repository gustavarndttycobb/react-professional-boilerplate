import {  useState,  useEffect, useMemo, type ReactNode } from "react";
import env from "../../utils/env";
import { EnvironmentContext } from "../contexts/EnvironmentContext";


export const EnvironmentProvider = ({ children }: { children: ReactNode }) => {
    const [isDevelopmentMode, setIsDevelopmentMode] = useState<boolean>(true);

    const environmentContextValue = useMemo(() => ({
        isDevelopmentMode
    }), [
        isDevelopmentMode
    ]);

    useEffect(() => {
        setIsDevelopmentMode(env.MOCKS_ENABLED);
    }, []);


    return (
        <EnvironmentContext.Provider value={environmentContextValue}>
            {children}
        </EnvironmentContext.Provider>
    );
};
