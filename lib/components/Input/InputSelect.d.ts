import { SelectProps } from '@mui/material';
export type Props = Pick<SelectProps<'outlined'>, 'placeholder' | 'sx' | 'inputRef' | 'fullWidth'> & {
    label?: string;
    helperText?: string;
    errorText?: string;
    value: string;
    onChange: (v: string) => void;
    error?: boolean;
    options: {
        label: string;
        value: string | number;
    }[];
};
declare const InputSelect: ({ sx, label, value, helperText, errorText, onChange, placeholder, inputRef, error, fullWidth, options, }: Props) => import("react/jsx-runtime").JSX.Element;
export default InputSelect;
