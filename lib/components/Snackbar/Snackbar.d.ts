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
export declare const useSnackbar: () => {
    myEnqueueSnackbar: (props: SnackbarProps) => void;
};
export default useSnackbar;
