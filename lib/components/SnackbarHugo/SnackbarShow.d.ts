import React from 'react';
import { SnackbarProps } from './SnackbarWrapper';
type SnackbarContextType = {
    enqueueSnackbar: (props: SnackbarProps) => void;
};
export declare const useSnackbar: () => SnackbarContextType;
export declare const SnackbarProvider: React.FC<{
    children: React.ReactNode;
}>;
export {};
