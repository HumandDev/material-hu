import { ReactNode } from 'react';
import { FormControlProps } from '@mui/material';
import { CustomInputProps } from './CustomInput';
export type InputProps = Pick<FormControlProps, 'sx' | 'fullWidth' | 'disabled'> & {
    label?: string;
    helperText?: string;
    errorText?: string;
    error?: boolean;
    hasCounter?: boolean;
    startAdornment?: ReactNode;
} & CustomInputProps;
declare const InputClassic: ({ sx, label, value, helperText, errorText, onChange, placeholder, inputRef, error, success, maxLength, hasCounter, fullWidth, multiline, startAdornment, disabled, }: InputProps) => import("react/jsx-runtime").JSX.Element;
export default InputClassic;
