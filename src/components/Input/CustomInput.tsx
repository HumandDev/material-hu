import { FC, ReactNode } from 'react';
import {
  alpha,
  InputAdornment,
  OutlinedInput,
  OutlinedInputProps,
  SxProps,
  useFormControl,
  useTheme,
} from '@mui/material';
import { IconAlertCircle, IconCheck, IconX } from '@tabler/icons-react';
import { getBorderColor } from './utils';
import { colorPalette } from '../../theme/hugo/colors';

export type CustomInputProps = Pick<
  OutlinedInputProps,
  'placeholder' | 'inputRef' | 'multiline' | 'disabled' | 'minRows' | 'type'
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
  minRows = 5,
  disabled,
  type,
}) => {
  const { focused, error } = useFormControl() || {};
  const hasEndAdornment = success || error || (focused && value.length > 0);
  const theme = useTheme();

  return (
    <OutlinedInput
      inputRef={inputRef}
      inputProps={{ maxLength }}
      multiline={multiline}
      minRows={minRows}
      startAdornment={startAdornment}
      type={type}
      endAdornment={
        hasEndAdornment && (
          <InputAdornment
            sx={{
              alignSelf: multiline ? 'flex-start' : 'center',
              height: '20px',
            }}
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
      onChange={(e) => {
        onChange?.(e.target.value);
      }}
      sx={{
        backgroundColor: disabled
          ? alpha(colorPalette.border.neutralBorder, 0.5)
          : colorPalette.hugoBackground.neutralBgTerciary,
        '& fieldset': {
          borderColor: getBorderColor(theme, focused, error, success),
          borderWidth: '1px !important',
          zIndex: 0,
        },
        '> svg:first-of-type': {
          mr: 1,
        },
        'input, textarea': {
          '&::placeholder': {
            color: theme.palette.textColors?.neutralTextLighter,
            opacity: 1,
          },
          color: theme.palette.textColors?.neutralText,
          zIndex: 1,
        },
        ...sxInput,
      }}
    />
  );
};

export default CustomInput;
