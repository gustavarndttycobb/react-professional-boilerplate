import { useTranslation } from "react-i18next";
import { ThemeToggleButton } from "../ThemeToggleButton/ThemeToggleButton";
import { LanguageSelectorButton } from "../LanguageSelectorButton/LanguageSelectorButton";
import { StyledHeaderBox } from "./styles";
import { useThemeContext } from "../../hooks/useThemeContext";

function Header() {
  const { toggleColorMode } = useThemeContext();
  const { i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <StyledHeaderBox>
      <LanguageSelectorButton currentLanguage={i18n.language} languages={[{ code: 'en', label: 'English' }, { code: 'pt', label: 'Português' }]}
        onChangeLanguage={handleLanguageChange}
      />
      <ThemeToggleButton onClickToggleTheme={toggleColorMode} />
    </StyledHeaderBox>
  );
}

export default Header;
