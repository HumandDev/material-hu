import { FC } from 'react';
import {
  IconAlertCircle,
  IconX,
  IconChevronDown,
  IconCheck,
} from '@tabler/icons-react';
import { Stack, TextFieldProps, Typography } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import { CountryCode } from 'libphonenumber-js/types';
import { colorPalette } from '../../theme/hugo/colors';

export type InputPhoneProps = Omit<TextFieldProps, 'onChange'> & {
  value?: string;
  onChange?: (value: string, countryCallingCode?: string) => void;
  defaultCountry?: CountryCode;
  ariaLabel?: string;
  preferredCountries?: CountryCode[];
  valid?: boolean;
};

const InputPhone: FC<InputPhoneProps> = ({
  defaultCountry = 'AR',
  value,
  onChange,
  disabled,
  fullWidth = true,
  maxRows,
  minRows,
  placeholder,
  size,
  label,
  autoFocus,
  ariaLabel,
  variant = 'outlined',
  onKeyDown,
  onPaste,
  inputProps,
  sx,
  margin,
  onClick,
  helperText,
  error,
  preferredCountries = ['AR', 'MX'],
  valid = false,
}) => {
  const handleChange = (newValue: string, country: any) => {
    onChange?.(newValue, country?.countryCallingCode);
  };

  const reset = () => handleChange('', {});

  const valuesStrategies = {
    error: {
      phoneInputIcon: {
        color: colorPalette.textColors?.errorText,
        clickable: false,
        icon: <IconAlertCircle size={20} />,
      },
      border: colorPalette.graphics?.errorText,
      focusedBorder: colorPalette.graphics?.errorText,
      label: {
        color: colorPalette.textColors?.errorText,
      },
    },
    valid: {
      phoneInputIcon: {
        color: colorPalette.textColors?.successText,
        clickable: false,
        icon: <IconCheck size={20} />,
      },
      border: colorPalette.graphics?.successText,
      focusedBorder: colorPalette.graphics?.successText,
      label: {
        color: colorPalette.textColors?.successText,
      },
    },
    default: {
      phoneInputIcon: {
        color: colorPalette.textColors?.neutralText,
        clickable: true,
        icon: (
          <IconX
            onClick={reset}
            size={20}
          />
        ),
      },
      border: colorPalette.border?.neutralBorder,
      focusedBorder: colorPalette.base?.blueBrand[400],
      label: {
        color: colorPalette.textColors?.neutralText,
      },
    },
  };

  const values =
    (error && valuesStrategies.error) ||
    (valid && valuesStrategies.valid) ||
    valuesStrategies.default;

  const countryCodeIcon = (
    <Stack
      sx={{
        position: 'absolute',
        top: 8,
        left: 32,
      }}
    >
      <IconChevronDown />
    </Stack>
  );

  const phoneInputIcon = (
    <Stack
      sx={{
        position: 'absolute',
        top: 8,
        right: 8,
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        color: values.phoneInputIcon.color,
        cursor: values.phoneInputIcon.clickable ? 'pointer' : 'inherit',
      }}
    >
      {values.phoneInputIcon.icon}
    </Stack>
  );

  return (
    <Stack>
      {label && (
        <Typography
          sx={{
            mb: 0.5,
            color: values.label.color,
            fontWeight: 'fontWeightSemiBold',
          }}
        >
          {label}
        </Typography>
      )}
      <Stack sx={{ position: 'relative' }}>
        {countryCodeIcon}
        {phoneInputIcon}
        <MuiTelInput
          value={value}
          onChange={handleChange}
          disableFormatting
          defaultCountry={defaultCountry}
          preferredCountries={preferredCountries}
          error={error}
          size={size}
          disabled={disabled}
          fullWidth={fullWidth}
          maxRows={maxRows}
          minRows={minRows}
          placeholder={placeholder}
          autoFocus={autoFocus}
          aria-label={ariaLabel}
          forceCallingCode
          variant={variant}
          onKeyDown={onKeyDown}
          onPaste={onPaste}
          margin={margin}
          onClick={onClick}
          inputProps={inputProps}
          sx={{
            ...sx,

            '&.MuiFormControl-root > div': {
              p: 0,
              '& fieldset': {
                '&,&:focus-visible,&:hover': {
                  border: 'none',
                  outline: 'none',
                },
              },
              // country code input
              '.MuiTelInput-IconButton': {
                p: 1.5,
                pr: '32px', // make space for IconChevronDown
              },

              // phone input
              '& input': {
                p: 1,
              },

              // country + phone inputs
              '.MuiInputAdornment-root .MuiTelInput-IconButton, & input': {
                '&.Mui-disabled': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
                '&:focus-visible,&[aria-expanded="true"]': {
                  borderColor: values.focusedBorder,
                  boxShadow: 'none',
                },
                border: '1px solid',
                borderColor: values.border,
                borderRadius: 1,
              },
            },

            '& .MuiFormHelperText-root': {
              marginLeft: 0,
            },
          }}
          helperText={helperText}
        />
      </Stack>
    </Stack>
  );
};

export default InputPhone;
