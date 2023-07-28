import { ButtonProps } from '@mui/material';
import { ReactNode } from 'react';
type Props = {
    title: ReactNode;
    body?: ReactNode;
    primaryButtonProps?: ButtonProps;
    secondaryButtonProps?: ButtonProps;
    avatarColor?: string;
    Icon?: JSX.Element;
};
declare const NewModal: ({ title, body, primaryButtonProps, secondaryButtonProps, avatarColor }: Props) => import("react/jsx-runtime").JSX.Element;
export default NewModal;
