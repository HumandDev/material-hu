import { FC } from 'react';
import { DialogProps } from '@mui/material';
declare function useModal<T>(ModalContentComponent: FC<T>, dialogProps?: Partial<DialogProps>, extraProps?: Partial<T>): {
    modal: import("react/jsx-runtime").JSX.Element;
    closeModal: () => void;
    showModal: (props?: Partial<T>) => void;
};
export default useModal;
