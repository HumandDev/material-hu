import { type LoadingButtonProps as ButtonProps } from '@mui/lab/LoadingButton';
import { ReactNode } from 'react';
type Props = {
    title: ReactNode;
    body?: ReactNode;
    primaryButtonProps?: ButtonProps;
    secondaryButtonProps?: ButtonProps;
    Icon?: JSX.Element;
    onClose?: () => void;
    titleIcon?: JSX.Element;
};
declare const NewModal: ({ title, body, titleIcon, primaryButtonProps, secondaryButtonProps, onClose }: Props) => import("react/jsx-runtime").JSX.Element;
export default NewModal;
