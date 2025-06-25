import { StrictMode } from "react";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import App from "./example/app/App";
import ReactDOM from "react-dom/client";
import env from "./example/utils/env";
import { EnvironmentProvider } from "./example/shared/providers/EnvironmentProvider";

async function deferRender() {
  if (env.MOCKS_ENABLED) {
    const { worker } = await import("./example/mocks/browser");
    return worker.start();
  }
}

deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <EnvironmentProvider>
        <App />
      </EnvironmentProvider>
    </StrictMode>
  );
});
