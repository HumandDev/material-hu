import { useSnackbar } from 'notistack';
import { IconButton } from '@mui/material';
import { IconX as CloseIcon } from '@tabler/icons-react';

export const useSnackbarUtils = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const showSnackbar = (message: string) => {
    enqueueSnackbar(message, {
      variant: 'default',
      anchorOrigin: { horizontal: 'center', vertical: 'bottom' },
      action: (
        <IconButton onClick={() => closeSnackbar()}>
          <CloseIcon style={{ color: '#FFFFFF', fontSize: 'small' }} />
        </IconButton>
      ),
    });
  };

  return { showSnackbar };
};

export default useSnackbarUtils;
