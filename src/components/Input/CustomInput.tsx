import { FC, ReactNode } from 'react';
import {
  InputAdornment,
  OutlinedInput,
  OutlinedInputProps,
  SxProps,
  useFormControl,
  useTheme,
} from '@mui/material';
import { IconAlertCircle, IconCheck, IconX } from '@tabler/icons-react';
import { getBorderColor } from './utils';

export type CustomInputProps = Pick<
  OutlinedInputProps,
  'placeholder' | 'inputRef' | 'multiline'
> & {
  value: string;
  success?: boolean;
  maxLength?: number;
  onChange: (value: string) => void;
  startAdornment?: ReactNode;
  sxInput?: SxProps;
};

const CustomInput: FC<CustomInputProps> = ({
  value,
  onChange,
  placeholder,
  inputRef,
  maxLength,
  success,
  multiline = false,
  startAdornment,
  sxInput,
}) => {
  const { focused, error } = useFormControl() || {};
  const hastEndAdornment = true;
  const theme = useTheme();

  return (
    <OutlinedInput
      inputRef={inputRef}
      inputProps={{ maxLength }}
      multiline={multiline}
      minRows={5}
      startAdornment={startAdornment}
      endAdornment={
        hastEndAdornment && (
          <InputAdornment
            sx={{
              alignSelf: multiline ? 'flex-start' : 'center',
            }}
            position="end"
          >
            <IconX
              size={20}
              onMouseDown={e => {
                onChange?.('');
                e.preventDefault();
              }}
              style={{ cursor: 'pointer' }}
            />

            {error && (
              <IconAlertCircle
                size={20}
                color={theme.palette.textColors?.errorText}
              />
            )}
            {success && (
              <IconCheck
                size={20}
                color={theme.palette.textColors?.successText}
              />
            )}
          </InputAdornment>
        )
      }
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
      sx={{
        ...sxInput,
        '& fieldset': {
          borderColor: getBorderColor(theme, focused, error, success),
          borderWidth: '1px !important',
        },
        input: {
          '&::placeholder': {
            color: theme.palette.textColors?.neutralTextLighter,
            opacity: 1,
          },
          color: theme.palette.textColors?.neutralText,
        },
      }}
    />
  );
};

export default CustomInput;
