import React from 'react';
import { SnackbarProps, useSnackbar } from './Snackbar2';

const SnackbarWrapper: React.FC<SnackbarProps> = props => {
  const { myEnqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    myEnqueueSnackbar(props);
  }, [props]);

  return null;
};

export default SnackbarWrapper;
