import { useContext } from "react";
import { EnvironmentContext } from "../contexts/EnvironmentContext";

export const useEnvironmentContext = () => {
    const context = useContext(EnvironmentContext);
    if (!context) {
        throw new Error("useEnvironmentContext deve ser usado dentro de EnvironmentProvider");
    }
    return context;
};