import React from 'react';
export type SnackbarProps = {
    variant: 'success' | 'error' | 'warning' | 'info';
    title?: string;
    description?: string;
    hasClose?: boolean;
    cancelAction?: {
        text: string;
        onClick: () => void;
    };
    onClose?: () => void;
};
declare const useMySnackbar: () => {
    myEnqueueSnackbar: (props: SnackbarProps) => void;
};
declare const MySnackbarProvider: React.FC<{
    children: React.ReactNode;
}>;
export { useMySnackbar, MySnackbarProvider };
