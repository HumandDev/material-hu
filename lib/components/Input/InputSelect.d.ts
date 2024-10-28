import { FormControlProps } from '@mui/material';
import { CustomSelectProps } from './CustomSelect';
export type Props = Pick<FormControlProps, 'sx' | 'fullWidth'> & CustomSelectProps & {
    label?: string;
    helperText?: string;
    errorText?: string;
    error?: boolean;
};
declare const InputSelect: ({ sx, label, value, helperText, errorText, onChange, placeholder, inputRef, error, fullWidth, options, }: Props) => import("react/jsx-runtime").JSX.Element;
export default InputSelect;
