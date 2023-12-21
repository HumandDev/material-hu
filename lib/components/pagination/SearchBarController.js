import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from 'react-hook-form';
import { Close as CloseIcon } from '@mui/icons-material';
import { Box, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '../../svg-icons/Search';
const SearchBarController = (props) => {
    const { control, placeholder = "", setValue, isSurveys, isPeopleExperience } = props;
    return (_jsx(Box, { sx: Object.assign({ m: isSurveys ? 0 : 1 }, (isPeopleExperience && { flex: 1 })), children: _jsx(Controller, { control: control, name: "query", render: ({ field }) => (_jsx(TextField, Object.assign({ fullWidth: true, InputProps: {
                    startAdornment: (_jsx(InputAdornment, { position: "start", children: _jsx(SearchIcon, { fontSize: "small" }) })),
                    endAdornment: (_jsx(InputAdornment, { position: "end", children: _jsx(CloseIcon, { fontSize: "small", sx: { cursor: 'pointer', visibility: field.value ? 'visible' : 'hidden' }, onClick: () => setValue('query', '') }) })),
                    inputProps: { maxLength: 255 }
                }, placeholder: placeholder, variant: "outlined" }, field))) }) }));
};
export default SearchBarController;
