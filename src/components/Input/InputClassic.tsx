import { FormControl, TextFieldProps } from '@mui/material';
import CustomLabel from './CustomLabel';
import CustomInput from './CustomInput';
import CustomHelperText from './CustomHelperText';

export type InputProps = Pick<
  TextFieldProps<'outlined'>,
  'placeholder' | 'sx' | 'inputRef' | 'fullWidth'
> & {
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
