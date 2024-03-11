import { useSnackbar } from 'notistack';
import { IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

export const useSnackbarUtils = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const showSnackbar = (message: string) => {
    enqueueSnackbar(message, {
      variant: 'default',
      anchorOrigin: { horizontal: 'center', vertical: 'bottom' },
      action: (
        <IconButton onClick={() => closeSnackbar()}>
          <CloseIcon sx={{ color: '#FFFFFF', fontSize: 'small' }} />
        </IconButton>
      ),
    });
  };

  return { showSnackbar };
};

export default useSnackbarUtils;