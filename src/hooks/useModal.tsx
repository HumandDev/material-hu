import { useState, FC } from 'react';
import { colorPalette } from '../theme/hugo/colors';
import { Dialog, DialogProps } from '@mui/material';

function useModal<T>(
  ModalContentComponent: FC<T>,
  dialogProps?: Partial<DialogProps>,
  extraProps?: Partial<T>,
) {
  const [open, setOpen] = useState(false);
  const closeModal: () => void = () => setOpen(false);
  const [modalContentProps, setModalContentProps] = useState<Partial<T>>();

  return {
    modal: (
      <Dialog
        open={open}
        onClose={dialogProps?.disableEscapeKeyDown ? undefined : closeModal}
        PaperProps={{
          sx: {
            border: `1px solid ${colorPalette.border.neutralBorder}`,
            borderRadius: '16px',
          },
        }}
        {...dialogProps}
      >
        <ModalContentComponent
          onClose={closeModal}
          {...(modalContentProps as T)}
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
