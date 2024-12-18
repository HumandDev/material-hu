import { CardProps } from '@mui/material';
export type CardContainerProps = CardProps & {
    badge?: {
        label: string;
        type?: 'error' | 'success' | 'warning' | 'info' | 'highlight';
        hasIcon?: boolean;
    };
    footer?: {
        action1: {
            onClick: () => void;
            title: string;
        };
        text: string;
    } | {
        action1: {
            onClick: () => void;
            title: string;
        };
        action2: {
            onClick: () => void;
            title: string;
        };
    };
    hasShadow?: boolean;
    fullWidth?: boolean;
    onClick?: () => void;
    padding?: 16 | 24;
};
declare const CardContainer: ({ badge, footer, hasShadow, fullWidth, children, sx, onClick, padding, ...props }: CardContainerProps) => import("react/jsx-runtime").JSX.Element;
export default CardContainer;
