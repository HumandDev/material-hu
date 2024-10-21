import { FormControl, FormControlProps } from '@mui/material';
import CustomLabel from './CustomLabel';
import CustomHelperText from './CustomHelperText';
import CustomDatePicker, { CustomDatePickerProps } from './CustomDatePicker';

export type DatePickerProps = Pick<FormControlProps, 'sx' | 'fullWidth'> & {
  label?: string;
  range?: boolean;
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
  range = false,
  placeholder,
  inputRef,
  error,
  success,
  fullWidth = true,
}: DatePickerProps) => {
  return (
    <FormControl
      sx={sx}
      error={error}
      fullWidth={fullWidth}
    >
      <CustomLabel
        label={label}
        success={success}
      />
      <CustomDatePicker
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        inputRef={inputRef}
        success={success}
        range={range}
      />
      <CustomHelperText
        helperText={error ? errorText : helperText}
        value={value}
        success={success}
      />
    </FormControl>
  );
};

export default DatePicker;
