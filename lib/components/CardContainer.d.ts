import { CardProps } from '@mui/material';
export type CardContainerProps = CardProps & {
    badge?: {
        type: 'default' | 'error' | 'success' | 'warning' | 'info' | 'highlight';
        label: string;
        hasIcon?: boolean;
    };
    footer?: {
        action1: {
            onClick: () => void;
            label: string;
        };
        text: string;
    } | {
        action1: {
            onClick: () => void;
            label: string;
        };
        action2: {
            onClick: () => void;
            label: string;
        };
    };
};
declare const CardContainer: ({ badge, footer, ...props }: CardContainerProps) => import("react/jsx-runtime").JSX.Element;
export default CardContainer;
