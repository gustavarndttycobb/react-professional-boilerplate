import { Button, type ButtonProps, styled } from "@mui/material";

export const StyledButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'variant',
})<ButtonProps>(({ theme, variant }) => {
    const base = {
        width: '100%',
        fontWeight: 500,
        transition: 'all 200ms ease-in-out',
        transform: 'scale(1)',
        borderRadius: "10px",
        '&:active': {
            transform: 'scale(0.98)',
        },
    };

    const variants = {
        contained: {
            background: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            '&:hover': {
                opacity: 0.9,
                transform: 'scale(1.02)',
            },
        },
        outlined: {
            background: 'transparent',
            color: theme.palette.primary.main,
            border: `1px solid ${theme.palette.primary.main}`,
            '&:hover': {
                transform: 'scale(1.02)',
            },
        },
        text: {
            background: 'transparent',
            color: theme.palette.primary.main,
            '&:hover': {
                transform: 'scale(1.02)',
            },
        },
    };

    return {
        ...base,
        ...(variants[variant ?? 'contained']),
    };
});