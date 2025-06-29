import type { Preview } from "@storybook/react-vite";
import {  CssBaseline } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

//TODO: add themes when available
// import { lightTheme, darkTheme } from "../src/utils/theme";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles: CssBaseline,
      //TODO: Wrap the story in a ThemeProvider when themes are available
      // Provider: ThemeProvider,
      themes: {
        //TODO: Provide your custom themes here
        // light: lightTheme,
        // dark: darkTheme,
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
