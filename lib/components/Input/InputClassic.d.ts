import { ReactNode } from 'react';
import { FormControlProps, SxProps } from '@mui/material';
import { CustomInputProps } from './CustomInput';
export type InputProps = Pick<FormControlProps, 'sx' | 'fullWidth'> & {
    label?: string;
    helperText?: string;
    errorText?: string;
    error?: boolean;
    hasCounter?: boolean;
    startAdornment?: ReactNode;
    sxInput?: SxProps;
} & CustomInputProps;
declare const InputClassic: ({ sx, label, value, helperText, errorText, onChange, placeholder, inputRef, error, success, maxLength, hasCounter, fullWidth, multiline, startAdornment, sxInput, }: InputProps) => import("react/jsx-runtime").JSX.Element;
export default InputClassic;
