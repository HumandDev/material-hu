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
    autoHideDuration?: number;
};
export declare const useSnackbar: () => {
    enqueueSnackbar: (props: SnackbarProps) => void;
};
export default useSnackbar;
