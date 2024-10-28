import React from 'react';
import { useSnackbar } from './Snackbar';
const SnackbarWrapper = props => {
    const { myEnqueueSnackbar } = useSnackbar();
    React.useEffect(() => {
        myEnqueueSnackbar(props);
    }, [props]);
    return null;
};
export default SnackbarWrapper;
