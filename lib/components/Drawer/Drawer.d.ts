import { ReactNode } from 'react';
import { DrawerProps as MuiDrawerProps, ButtonProps } from '@mui/material';
export type DrawerProps = MuiDrawerProps & {
    title?: string;
    size?: 'medium' | 'large';
    onClose: () => void;
    primaryButtonProps?: ButtonProps;
    secondaryButtonProps?: ButtonProps;
    footer?: ReactNode;
    primaryContent?: ReactNode;
    secondaryContent?: ReactNode;
};
declare const Drawer: (props: DrawerProps) => import("react/jsx-runtime").JSX.Element;
export default Drawer;
