import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { Dialog } from '@mui/material';
function useModal(ModalContentComponent, dialogProps, extraProps) {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const [modalContentProps, setModalContentProps] = useState();
    return {
        modal: (_jsx(Dialog, Object.assign({ open: open, onClose: (dialogProps === null || dialogProps === void 0 ? void 0 : dialogProps.disableEscapeKeyDown) ? null : closeModal }, dialogProps, { children: _jsx(ModalContentComponent, Object.assign({ onClose: closeModal }, modalContentProps, extraProps)) }))),
        closeModal,
        showModal: (props = null) => {
            setModalContentProps(props);
            setOpen(true);
        }
    };
}
export default useModal;
