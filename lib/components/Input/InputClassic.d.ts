import { TextFieldProps } from '@mui/material';
export type InputProps = Pick<TextFieldProps<'outlined'>, 'placeholder' | 'sx' | 'inputRef' | 'fullWidth'> & {
    label?: string;
    helperText?: string;
    errorText?: string;
    value: string;
    onChange: (v: string) => void;
    error?: boolean;
    success?: boolean;
    maxLength?: number;
    hasCounter?: boolean;
};
declare const InputClassic: ({ sx, label, value, helperText, errorText, onChange, placeholder, inputRef, error, success, maxLength, hasCounter, fullWidth, }: InputProps) => import("react/jsx-runtime").JSX.Element;
export default InputClassic;
