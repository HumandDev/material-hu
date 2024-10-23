import { FormControl, FormControlProps } from '@mui/material';
import CustomLabel from './CustomLabel';
import CustomDatePicker, { CustomDatePickerProps } from './CustomDatePicker';

export type DatePickerProps = Pick<FormControlProps, 'sx' | 'fullWidth'> & {
  label?: string;
  helperText?: string;
  errorText?: string;
  error?: boolean;
} & CustomDatePickerProps;

const DatePicker = ({
  sx = {},
  label,
  value,
  helperText,
  errorText,
  onChange,
  inputRef,
  error,
  fullWidth = true,
  ...props
}: DatePickerProps) => {
  return (
    <FormControl
      sx={sx}
      error={error}
      fullWidth={fullWidth}
    >
      <CustomLabel label={label} />
      <CustomDatePicker
        value={value}
        onChange={onChange}
        inputRef={inputRef}
        helperText={error ? errorText : helperText}
        {...props}
      />
    </FormControl>
  );
};

export default DatePicker;
