import { ReactNode } from 'react';
import { DrawerProps as MuiDrawerProps } from '@mui/material';
type DrawerProps = MuiDrawerProps & {
    title?: string;
    size?: 'medium' | 'large';
    onClose: () => void;
    primaryActionText?: string;
    secondaryActionText?: string;
    primaryAction?: () => void;
    secondaryAction?: () => void;
    extraFooterContent?: ReactNode;
    withDoubleLayout?: boolean;
    primaryLayoutContent?: ReactNode;
    secondaryLayoutContent?: ReactNode;
};
declare const Drawer: (props: DrawerProps) => import("react/jsx-runtime").JSX.Element;
export default Drawer;
