import { ReactNode } from 'react';
import { ButtonProps } from '@mui/material';
type Props = {
    title?: string;
    body?: ReactNode;
    actionInfo?: string;
    textBody?: string;
    primaryButtonProps?: ButtonProps;
    secondaryButtonProps?: ButtonProps;
    onClose: () => void;
};
declare const Dialog: ({ title, onClose, body, textBody, primaryButtonProps, secondaryButtonProps, actionInfo, }: Props) => import("react/jsx-runtime").JSX.Element;
export default Dialog;