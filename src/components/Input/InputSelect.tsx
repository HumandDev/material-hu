import { FormControl, FormControlProps } from '@mui/material';
import CustomLabel from './CustomLabel';
import CustomHelperText from './CustomHelperText';
import CustomSelect, { CustomSelectProps } from './CustomSelect';

export type Props = Pick<FormControlProps, 'sx' | 'fullWidth' | 'disabled'> &
  CustomSelectProps & {
    label?: string;
    helperText?: string;
    errorText?: string;
    error?: boolean;
  };

const InputSelect = ({
  sx = {},
  label,
  value,
  helperText,
  errorText,
  onChange,
  placeholder,
  inputRef,
  error,
  fullWidth = true,
  options,
  disabled,
}: Props) => {
  return (
    <FormControl
      sx={sx}
      error={error}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      <CustomLabel label={label} />
      <CustomSelect
        value={value}
        onChange={onChange}
        inputRef={inputRef}
        placeholder={placeholder}
        options={options}
      />
      <CustomHelperText
        helperText={error ? errorText : helperText}
        value={value}
      />
    </FormControl>
  );
};

export default InputSelect;
