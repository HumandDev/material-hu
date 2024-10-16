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
};
declare const SnackbarWrapper: React.FC<SnackbarProps>;
export default SnackbarWrapper;
