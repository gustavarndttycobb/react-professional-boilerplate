import BaseLayout from "../shared/components/BaseLayout/BaseLayout";
import Header from "../shared/components/Header/Header";
import AppRoutes from "./routes";
import { ThemeProviderCustom } from "../shared/providers/ThemeProviderCustom";
import { AuthProvider } from "../features/Auth/provider/AuthProvider";
import '../i18n/config';

function App() {
  return (
    <AuthProvider>
      <ThemeProviderCustom>
        <Header />
        <BaseLayout>
          <AppRoutes />
        </BaseLayout>
      </ThemeProviderCustom>
    </AuthProvider>
  );
}

export default App;
