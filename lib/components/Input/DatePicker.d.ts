import { FormControlProps } from '@mui/material';
import { CustomDatePickerProps } from './CustomDatePicker';
export type DatePickerProps = Pick<FormControlProps, 'sx' | 'fullWidth'> & {
    label?: string;
    helperText?: string;
    errorText?: string;
    error?: boolean;
} & CustomDatePickerProps;
declare const DatePicker: ({ sx, label, value, helperText, errorText, onChange, inputRef, error, fullWidth, disabled, ...props }: DatePickerProps) => import("react/jsx-runtime").JSX.Element;
export default DatePicker;
