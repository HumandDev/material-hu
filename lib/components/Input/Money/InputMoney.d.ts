import { FormControlProps } from '@mui/material';
import { CustomInputProps } from '../CustomInput';
export type InputProps = Pick<FormControlProps, 'sx' | 'fullWidth' | 'disabled'> & {
    label?: string;
    helperText?: string;
    errorText?: string;
    error?: boolean;
    hasCounter?: boolean;
    currency?: string;
    transform?: {
        input?: (value: string) => string;
        output?: (value: string) => string;
    };
} & CustomInputProps;
declare const InputMoney: ({ sx, label, value, helperText, errorText, onChange, placeholder, inputRef, error, success, maxLength, hasCounter, fullWidth, disabled, currency, transform, }: InputProps) => import("react/jsx-runtime").JSX.Element;
export default InputMoney;
