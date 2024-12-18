import { ReactNode } from 'react';
import { FormControl, FormControlProps, SxProps } from '@mui/material';
import CustomLabel from './CustomLabel';
import CustomInput, { CustomInputProps } from './CustomInput';
import CustomHelperText from './CustomHelperText';

export type InputProps = Pick<FormControlProps, 'sx' | 'fullWidth'> & {
  label?: string;
  helperText?: string;
  errorText?: string;
  error?: boolean;
  hasCounter?: boolean;
  startAdornment?: ReactNode;
  sxInput?: SxProps;
} & CustomInputProps;

const InputClassic = ({
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
  hasCounter = true,
  fullWidth = true,
  multiline,
  startAdornment,
  sxInput = null,
}: InputProps) => {
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
      <CustomInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        inputRef={inputRef}
        maxLength={maxLength}
        success={success}
        multiline={multiline}
        startAdornment={startAdornment}
        sxInput={sxInput}
      />
      <CustomHelperText
        helperText={error ? errorText : helperText}
        hasCounter={hasCounter}
        maxLength={maxLength}
        value={value}
        success={success}
      />
    </FormControl>
  );
};

export default InputClassic;
