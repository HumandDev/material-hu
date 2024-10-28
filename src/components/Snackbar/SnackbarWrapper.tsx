import React from 'react';
import { SnackbarProps, useSnackbar } from './Snackbar';

const SnackbarWrapper: React.FC<SnackbarProps> = props => {
  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    enqueueSnackbar(props);
  }, [props]);

  return null;
};

export default SnackbarWrapper;
