import React from 'react';
import { StyledButton } from './styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import type { ButtonProps } from '@mui/material';

type IToggleTheme = ButtonProps & {
    onClickToggleTheme: () => void;
};



export function ThemeToggleButton({ onClickToggleTheme, ...props }: IToggleTheme) {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        onClickToggleTheme();
    };

    return (
        <StyledButton variant="outlined" onClick={toggleTheme} {...props}>
            {mode === 'light' && <LightModeIcon className="light-icon" fontSize="small" />}
            {mode === 'dark' && <DarkModeIcon className="dark-icon" fontSize="small" />}
        </StyledButton>
    );
}
