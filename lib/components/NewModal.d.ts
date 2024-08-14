import { type LoadingButtonProps as ButtonProps } from '@mui/lab/LoadingButton';
import { SvgIconComponent } from '@mui/icons-material';
import { ReactNode } from 'react';
type Props = {
    title: ReactNode;
    body?: ReactNode;
    textBody?: string;
    primaryButtonProps?: ButtonProps;
    secondaryButtonProps?: ButtonProps;
    onClose?: (e?: any) => void;
    TitleIcon?: SvgIconComponent;
};
declare const NewModal: ({ title, body, textBody, TitleIcon, primaryButtonProps, secondaryButtonProps, onClose, }: Props) => import("react/jsx-runtime").JSX.Element;
export default NewModal;
