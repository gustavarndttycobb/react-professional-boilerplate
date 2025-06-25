import type { PaletteMode } from "@mui/material";
import { createContext } from "react";

export type ThemeContextType = {
  theme: PaletteMode;
  toggleColorMode: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
