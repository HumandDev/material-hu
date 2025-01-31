import { FormControlProps, Typography } from '@mui/material';
import InputClassic from '../InputClassic';
import { CustomInputProps } from '../CustomInput';

export type InputProps = Pick<
  FormControlProps,
  'sx' | 'fullWidth' | 'disabled'
> & {
  label?: string;
  helperText?: string;
  errorText?: string;
  error?: boolean;
  hasCounter?: boolean;
  // TODO: Ideally it should be: Intl.NumberFormatOptions['currency'];
  currency?: string;
  transform?: {
    input?: (value: string) => string;
    output?: (value: string) => string;
  };
} & CustomInputProps;

const InputMoney = ({
  sx = {},
  label,
  value,
  helperText,
  errorText,
  onChange,
  placeholder,
  inputRef,
  error,
  success,
  maxLength = 100,
  hasCounter = false,
  fullWidth = true,
  disabled = false,
  currency = '$',
  transform,
}: InputProps) => {
  return (
    <InputClassic
      disabled={disabled}
      error={error}
      errorText={errorText}
      fullWidth={fullWidth}
      hasCounter={hasCounter}
      helperText={helperText}
      inputRef={inputRef}
      label={label}
      maxLength={maxLength}
      onChange={inputValue => {
        onChange?.(transform?.input ? transform.input(inputValue) : inputValue);
      }}
      placeholder={placeholder}
      success={success}
      sx={sx}
      value={transform?.output ? transform.output(value) : value}
      startAdornment={
        // TODO: Replace with currency selector.
        <Typography
          fontWeight="fontWeightSemiBold"
          sx={{
            mr: 1,
          }}
        >
          {currency}
        </Typography>
      }
    />
  );
};

export default InputMoney;
