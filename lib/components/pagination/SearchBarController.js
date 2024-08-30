import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from 'react-hook-form';
import { IconX as CloseIcon } from '@tabler/icons-react';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '../../svg-icons/Search';
const buildSearchbar = ({ control, setValue, }) => {
    const SearchBarController = props => {
        return (_jsx(Controller, { control: control, name: "query", render: ({ field }) => (_jsx(TextField, Object.assign({ fullWidth: true, InputProps: {
                    startAdornment: (_jsx(InputAdornment, { position: "start", children: _jsx(SearchIcon, { fontSize: "small" }) })),
                    endAdornment: (_jsx(InputAdornment, { position: "end", children: _jsx(CloseIcon, { fontSize: "small", style: {
                                cursor: 'pointer',
                                visibility: field.value ? 'visible' : 'hidden',
                            }, onClick: () => setValue('query', '') }) })),
                    inputProps: { maxLength: 255 },
                }, variant: "outlined" }, field, props))) }));
    };
    return SearchBarController;
};
export default buildSearchbar;
