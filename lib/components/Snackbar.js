import { jsx as _jsx } from "react/jsx-runtime";
import { useSnackbar } from 'notistack';
import { IconButton } from '@mui/material';
import { IconX as CloseIcon } from '@tabler/icons-react';
export const useSnackbarUtils = () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const showSnackbar = (message) => {
        enqueueSnackbar(message, {
            variant: 'default',
            anchorOrigin: { horizontal: 'center', vertical: 'bottom' },
            action: (_jsx(IconButton, { onClick: () => closeSnackbar(), children: _jsx(CloseIcon, { style: { color: '#FFFFFF', fontSize: 'small' } }) })),
        });
    };
    return { showSnackbar };
};
export default useSnackbarUtils;
