import { AlertProps as AlertMuiProps } from '@mui/material';
type AlertProps = AlertMuiProps & {
    description: string;
    hasClose?: boolean;
    actionText?: string;
    onAction?: () => void;
};
declare const Alert: (props: AlertProps) => import("react/jsx-runtime").JSX.Element | null;
export default Alert;
