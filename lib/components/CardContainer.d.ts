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
};
declare const CardContainer: ({ badge, footer, children, sx, ...props }: CardContainerProps) => import("react/jsx-runtime").JSX.Element;
export default CardContainer;
