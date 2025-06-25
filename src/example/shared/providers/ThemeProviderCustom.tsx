import {
    useState,
    useMemo,
    type ReactNode,
  } from "react";
  import {
    ThemeProvider as MuiThemeProvider,
    type PaletteMode,
  } from "@mui/material";
  import CssBaseline from "@mui/material/CssBaseline";
  import { darkTheme, lightTheme } from "../../utils/theme";
import { ThemeContext, type ThemeContextType } from "../contexts/ThemeContext";
  
  export const ThemeProviderCustom = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<PaletteMode>("light");
  
    const toggleColorMode = () => {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };
  
    const ThemeContextValue: ThemeContextType = useMemo(
      () => ({ theme, toggleColorMode }),
      [theme]
    );
  
    return (
      <ThemeContext.Provider value={ThemeContextValue}>
        <MuiThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </ThemeContext.Provider>
    );
  };
  