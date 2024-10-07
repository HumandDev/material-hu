import { FC } from 'react';
import { InputProps } from './InputClassic';
import {
  InputAdornment,
  OutlinedInput,
  useFormControl,
  useTheme,
} from '@mui/material';
import { IconAlertCircle, IconCheck, IconX } from '@tabler/icons-react';
import { getBorderColor } from './utils';

const CustomInput: FC<
  Pick<
    InputProps,
    'value' | 'placeholder' | 'onChange' | 'inputRef' | 'maxLength' | 'success'
  >
> = ({ value, onChange, placeholder, inputRef, maxLength, success }) => {
  const { focused, error } = useFormControl() || {};
  const hastEndAdornment = success || error || (focused && value.length > 0);
  const theme = useTheme();

  return (
    <OutlinedInput
      inputRef={inputRef}
      inputProps={{ maxLength: maxLength }}
      endAdornment={
        hastEndAdornment && (
          <InputAdornment position="end">
            {focused && (
              <IconX
                size={20}
                onMouseDown={e => {
                  onChange?.('');
                  e.preventDefault();
                }}
                style={{ cursor: 'pointer' }}
              />
            )}
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
