import { AlertProps as AlertMuiProps } from '@mui/material';
type AlertProps = {
    description?: string;
    hasClose?: boolean;
    action?: {
        text: string;
        onClick: () => void;
    };
    severity: 'success' | 'error' | 'warning' | 'info' | 'highlight';
    title: string;
    onClose?: () => void;
    sx?: AlertMuiProps['sx'];
};
declare const Alert: (props: AlertProps) => import("react/jsx-runtime").JSX.Element | null;
export default Alert;
