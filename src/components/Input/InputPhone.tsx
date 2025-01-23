import { FC } from 'react';
import { TextFieldProps } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import { CountryCode } from 'libphonenumber-js/types';
export interface InputPhoneProps extends Omit<TextFieldProps, 'onChange'> {
  value?: string;
  onChange?: (value: string, countryCallingCode?: string) => void;
  defaultCountry?: CountryCode;
  ariaLabel?: string;
}

const InputPhone: FC<InputPhoneProps> = ({
  defaultCountry = 'AR',
  value,
  onChange,
  disabled,
  fullWidth = true,
  maxRows,
  minRows,
  placeholder,
  size,
  label,
  autoFocus,
  ariaLabel,
  variant = 'outlined',
  onKeyDown,
  onPaste,
  inputProps,
  sx,
  margin,
  onClick,
  helperText,
  error,
}) => {
  const handleChange = (newValue: string, country: any) => {
    onChange?.(newValue, country?.countryCallingCode);
  };

  return (
    <MuiTelInput
      value={value}
      onChange={handleChange}
      disableFormatting
      defaultCountry={defaultCountry}
      preferredCountries={['AR', 'MX']}
      error={error}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      maxRows={maxRows}
      minRows={minRows}
      placeholder={placeholder}
      label={label}
      autoFocus={autoFocus}
      aria-label={ariaLabel}
      forceCallingCode
      variant={variant}
      onKeyDown={onKeyDown}
      onPaste={onPaste}
      inputProps={inputProps}
      margin={margin}
      onClick={onClick}
      sx={{
        ...sx,
        '& .MuiInputBase-root.Mui-disabled': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
        },
      }}
      helperText={helperText}
    />
  );
};

export default InputPhone;
