import { FC } from 'react';
import {
  OutlinedInput,
  OutlinedInputProps,
  useFormControl,
  useTheme,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { DateRangePicker } from '@mui/x-date-pickers/DateRangePicker';
import { IconAlertCircle, IconCheck, IconX } from '@tabler/icons-react';
import { getBorderColor } from './utils';

export type CustomDatePickerProps = Pick<
  OutlinedInputProps,
  'placeholder' | 'inputRef' | 'multiline'
> & {
  range?: boolean;
  value: string;
  success?: boolean;
  maxLength?: number;
  onChange: (value: string) => void;
};

const CustomDatePicker: FC<CustomDatePickerProps> = ({
  value,
  onChange,
  placeholder,
  inputRef,
  range = false,
  success,
}) => {
  const { focused, error } = useFormControl() || {};
  const hastEndAdornment = success || error || (focused && value.length > 0);
  const theme = useTheme();

  if (range) {
    return <DateRangePicker value={value} />;
  }

  return <DatePicker value={value} />;
};

export default CustomDatePicker;
