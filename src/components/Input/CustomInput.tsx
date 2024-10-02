import { FC } from 'react';
import { InputProps } from './InputClassic';
import {
  InputAdornment,
  OutlinedInput,
  useFormControl,
  useTheme,
} from '@mui/material';
import { IconAlertCircle, IconCheck, IconX } from '@tabler/icons-react';

const CustomInput: FC<
  Pick<
    InputProps,
    'value' | 'placeholder' | 'onChange' | 'inputRef' | 'maxLength' | 'success'
  >
> = ({ value, onChange, placeholder, inputRef, maxLength, success }) => {
  const { focused, error } = useFormControl() || {};
  const hastEndAdornment = success || error || (focused && value.length > 0);
  const theme = useTheme();

  const getBorderColor = () => {
    if (focused) {
      return theme.palette.base?.blueBrand[400];
    }
    if (error) {
      return theme.palette.graphics?.errorText;
    }
    if (success) {
      return theme.palette.graphics?.successText;
    }
    return theme.palette.border?.neutralBorder;
  };

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
          borderColor: getBorderColor(),
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
