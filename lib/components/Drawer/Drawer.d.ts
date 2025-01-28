import { ReactNode } from 'react';
import { DrawerProps as MuiDrawerProps } from '@mui/material';
import { LoadingButtonProps } from '@mui/lab';
export type DrawerProps = MuiDrawerProps & {
    title?: string;
    subtitle?: string;
    size?: 'medium' | 'large';
    onClose: () => void;
    hasBackButton?: boolean;
    disableEscapeKeyDown?: boolean;
    primaryButtonProps?: LoadingButtonProps;
    secondaryButtonProps?: LoadingButtonProps;
    footer?: ReactNode;
    primaryContent?: ReactNode;
    secondaryContent?: ReactNode;
};
declare const Drawer: (props: DrawerProps) => import("react/jsx-runtime").JSX.Element;
export default Drawer;
