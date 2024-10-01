import { TextFieldProps } from '@mui/material';
type Props = Pick<TextFieldProps<'outlined'>, 'placeholder' | 'sx' | 'inputRef'> & {
    label?: string;
    helperText?: string;
    errorText?: string;
    value: string;
    onChange: (v: string) => void;
    error?: boolean;
    maxLength?: number;
    hasCounter?: boolean;
};
declare const InputClassic: ({ sx, label, value, helperText, errorText, onChange, placeholder, inputRef, error, maxLength, hasCounter, }: Props) => import("react/jsx-runtime").JSX.Element;
export default InputClassic;
