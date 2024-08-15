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
declare const CardContainer: ({ badge, footer, children, ...props }: CardContainerProps) => import("react/jsx-runtime").JSX.Element;
export default CardContainer;
