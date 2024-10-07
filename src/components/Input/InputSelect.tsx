import { FormControl, SelectProps } from '@mui/material';
import CustomLabel from './CustomLabel';
import CustomHelperText from './CustomHelperText';
import CustomSelect from './CustomSelect';

export type Props = Pick<
  SelectProps<'outlined'>,
  'placeholder' | 'sx' | 'inputRef' | 'fullWidth'
> & {
  label?: string;
  helperText?: string;
  errorText?: string;
  value: string;
  onChange: (v: string) => void;
  error?: boolean;
  options: { label: string; value: string | number }[];
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
}: Props) => {
  return (
    <FormControl
      sx={sx}
      error={error}
      fullWidth={fullWidth}
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
