/// <reference types="react" />
import { SnackbarProps } from './SnackbarWrapper';
type SnackbarContextType = {
    showSnackbar: (props: SnackbarProps) => void;
};
export declare const useSnackbar: () => SnackbarContextType;
export declare const SnackbarProvider: React.FC<{
    children: React.ReactNode;
}>;
export {};
