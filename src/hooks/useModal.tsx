import { useState, FC } from 'react';
import { Dialog, DialogProps } from '@mui/material';

function useModal<T>(ModalContentComponent: FC<T>, dialogProps?: Partial<DialogProps>, extraProps?: Partial<T>) {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const [modalContentProps, setModalContentProps] = useState<Partial<T>>();

  return {
    modal: (
      <Dialog
        open={open}
        onClose={dialogProps?.disableEscapeKeyDown ? undefined : closeModal}
        {...dialogProps}
      >
        <ModalContentComponent
          onClose={closeModal}
          {...modalContentProps as T}
          {...extraProps}
        />
      </Dialog>
    ),
    closeModal,
    showModal: (props: Partial<T> = {}) => {
      setModalContentProps(props);
      setOpen(true);
    },
  };
}

export { useModal };
