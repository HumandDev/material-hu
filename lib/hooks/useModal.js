import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { colorPalette } from '../theme/hugo/colors';
import { Dialog } from '@mui/material';
function useModal(ModalContentComponent, dialogProps, extraProps) {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const [modalContentProps, setModalContentProps] = useState();
    return {
        modal: (_jsx(Dialog, Object.assign({ open: open, onClose: (dialogProps === null || dialogProps === void 0 ? void 0 : dialogProps.disableEscapeKeyDown) ? undefined : closeModal, PaperProps: {
                sx: {
                    border: `1px solid ${colorPalette.border.neutralBorder}`,
                    borderRadius: '16px',
                },
            } }, dialogProps, { children: _jsx(ModalContentComponent, Object.assign({ onClose: closeModal }, modalContentProps, extraProps)) }))),
        closeModal,
        showModal: (props = {}) => {
            setModalContentProps(props);
            setOpen(true);
        },
    };
}
export { useModal };
