import { FC } from 'react';
import {
  alpha,
  InputAdornment,
  OutlinedInput,
  OutlinedInputProps,
  useFormControl,
  useTheme,
} from '@mui/material';
import { IconAlertCircle, IconCheck, IconX } from '@tabler/icons-react';
import { getBorderColor } from './utils';
import { colorPalette } from '../../theme/hugo/colors';

export type CustomInputProps = Pick<
  OutlinedInputProps,
  'placeholder' | 'inputRef' | 'multiline' | 'disabled'
> & {
  value: string;
  success?: boolean;
  maxLength?: number;
  onChange: (value: string) => void;
};

const CustomInput: FC<CustomInputProps> = ({
  value,
  onChange,
  placeholder,
  inputRef,
  maxLength,
  success,
  multiline = false,
  disabled,
}) => {
  const { focused, error } = useFormControl() || {};
  const hastEndAdornment = success || error || (focused && value.length > 0);
  const theme = useTheme();

  return (
    <OutlinedInput
      inputRef={inputRef}
      inputProps={{ maxLength }}
      multiline={multiline}
      minRows={5}
      endAdornment={
        hastEndAdornment && (
          <InputAdornment
            sx={{ alignSelf: multiline ? 'flex-start' : 'center' }}
            position="end"
          >
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
      disabled={disabled}
      value={value}
      onChange={e => onChange(e.target.value)}
      sx={{
        '& fieldset': {
          borderColor: getBorderColor(theme, focused, error, success),
          borderWidth: '1px !important',
          backgroundColor: disabled
            ? alpha(colorPalette.border.neutralBorder, 0.5)
            : colorPalette.hugoBackground.neutralBgTerciary,
          zIndex: 0,
        },
        'input, textarea': {
          '&::placeholder': {
            color: theme.palette.textColors?.neutralTextLighter,
            opacity: 1,
          },
          color: theme.palette.textColors?.neutralText,
          zIndex: 1,
        },
      }}
    />
  );
};

export default CustomInput;
