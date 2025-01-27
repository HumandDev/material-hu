import { FC } from 'react';
import { IconAlertCircle, IconX, IconChevronDown } from '@tabler/icons-react';
import { Stack, TextFieldProps, Typography } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import { CountryCode } from 'libphonenumber-js/types';

export type InputPhoneProps = Omit<TextFieldProps, 'onChange'> & {
  value?: string;
  onChange?: (value: string, countryCallingCode?: string) => void;
  defaultCountry?: CountryCode;
  ariaLabel?: string;
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
}) => {
  const handleChange = (newValue: string, country: any) => {
    onChange?.(newValue, country?.countryCallingCode);
  };

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
        color: theme =>
          error
            ? theme.palette.textColors?.errorText
            : theme.palette.textColors?.neutralText,
      }}
    >
      {error ? (
        <IconAlertCircle size={20} />
      ) : (
        <IconX
          onClick={() => {
            alert('asdasd');
          }}
          size={20}
        />
      )}
    </Stack>
  );

  return (
    <Stack>
      {label && (
        <Typography
          sx={{
            mb: 0.5,
            color: theme =>
              error
                ? theme.palette.textColors?.errorText
                : theme.palette.textColors?.neutralTextDisabled,
            fontWeight: 'fontWeightSemiBold',
          }}
        >
          {label}
        </Typography>
      )}
      <Stack
        sx={{
          position: 'relative',
        }}
      >
        {countryCodeIcon}
        {phoneInputIcon}
        <MuiTelInput
          value={value}
          onChange={handleChange}
          disableFormatting
          defaultCountry={defaultCountry}
          preferredCountries={['AR', 'MX']}
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
                  borderColor: theme =>
                    error
                      ? theme.palette.graphics?.errorText
                      : theme.palette.primary.main,
                  boxShadow: 'none',
                },
                border: '1px solid',
                borderColor: theme =>
                  error
                    ? theme.palette.graphics?.errorText
                    : theme.palette.border?.neutralBorder,
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
