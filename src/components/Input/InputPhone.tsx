import { FC } from 'react';
import {
  IconAlertCircle,
  IconX,
  IconChevronDown,
  IconCheck,
} from '@tabler/icons-react';
import { alpha, Stack, TextFieldProps, Typography } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import { CountryCode } from 'libphonenumber-js/types';
import { colorPalette } from '../../theme/hugo/colors';

export type InputPhoneProps = Pick<
  TextFieldProps,
  | 'sx'
  | 'label'
  | 'value'
  | 'helperText'
  | 'placeholder'
  | 'error'
  | 'fullWidth'
  | 'disabled'
  | 'onClick'
  | 'margin'
  | 'inputProps'
  | 'onPaste'
  | 'onKeyDown'
  | 'autoFocus'
> & {
  value: string;
  onChange: (value: string, countryCallingCode?: string) => void;
  defaultCountry?: CountryCode;
  preferredCountries?: CountryCode[];
  success?: boolean;
};

const InputPhone: FC<InputPhoneProps> = props => {
  const {
    label,
    onChange,
    success,
    fullWidth = true,
    disabled = false,
    sx = {},
    defaultCountry = 'AR',
    preferredCountries = ['AR', 'MX'],
    ...telInputProps
  } = props;
  const handleChange = (newValue: string, country: any) => {
    onChange?.(newValue, country?.countryCallingCode);
  };

  const reset = () => handleChange('', {});

  const valuesStrategies = {
    error: {
      phoneInputIcon: {
        display: 'flex',
        color: colorPalette.textColors?.errorText,
        clickable: false,
        icon: <IconAlertCircle size={20} />,
      },
      border: colorPalette.graphics?.errorText,
      focusedBorder: colorPalette.graphics?.errorText,
      label: {
        color: colorPalette.textColors?.errorText,
      },
      helperText: {
        color: colorPalette.textColors?.errorText,
        icon: <IconAlertCircle size={16} />,
        marginLeft: '17px',
      },
    },
    success: {
      phoneInputIcon: {
        display: 'flex',
        color: colorPalette.textColors?.successText,
        clickable: false,
        icon: <IconCheck size={20} />,
      },
      border: colorPalette.graphics?.successText,
      focusedBorder: colorPalette.graphics?.successText,
      label: {
        color: colorPalette.textColors?.successText,
      },
      helperText: {
        color: colorPalette.textColors?.successText,
        icon: <IconCheck size={16} />,
        marginLeft: '17px',
      },
    },
    default: {
      phoneInputIcon: {
        display: telInputProps.value ? 'flex' : 'none',
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
      helperText: {
        color: colorPalette.textColors?.neutralTextLighter,
        icon: null,
        marginLeft: 0,
      },
    },
  };

  const uiValues =
    (telInputProps.error && valuesStrategies.error) ||
    (success && valuesStrategies.success) ||
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
        display: uiValues.phoneInputIcon.display,
        position: 'absolute',
        top: 8,
        right: 8,
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        color: uiValues.phoneInputIcon.color,
        cursor: uiValues.phoneInputIcon.clickable ? 'pointer' : 'inherit',
      }}
    >
      {uiValues.phoneInputIcon.icon}
    </Stack>
  );

  const helperTextIcon = uiValues.helperText.icon && (
    <Stack
      sx={{
        display: telInputProps.helperText ? 'flex' : 'none',
        position: 'absolute',
        bottom: 3,
        left: 0,
        width: 16,
        height: 16,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        color: uiValues.helperText.color,
        cursor: 'inherit',
      }}
    >
      {uiValues.helperText.icon}
    </Stack>
  );

  return (
    <Stack>
      {label && (
        <Typography
          sx={{
            mb: 0.5,
            color: uiValues.label.color,
            fontWeight: 'fontWeightSemiBold',
          }}
        >
          {label}
        </Typography>
      )}
      <Stack sx={{ position: 'relative' }}>
        {countryCodeIcon}
        {phoneInputIcon}
        {helperTextIcon}
        <MuiTelInput
          {...telInputProps}
          onChange={handleChange}
          defaultCountry={defaultCountry}
          preferredCountries={preferredCountries}
          disabled={disabled}
          fullWidth={fullWidth}
          forceCallingCode
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
                  backgroundColor: alpha(
                    colorPalette.hugoBackground.neutralBgTransparent,
                    0.5,
                  ),
                },
                '&:focus-visible,&[aria-expanded="true"]': {
                  borderColor: uiValues.focusedBorder,
                  boxShadow: 'none',
                },
                border: '1px solid',
                borderColor: uiValues.border,
                borderRadius: 1,
              },
            },

            '& .MuiFormHelperText-root': {
              marginLeft: uiValues.helperText.marginLeft,
              color: uiValues.helperText.color,
            },
          }}
        />
      </Stack>
    </Stack>
  );
};

export default InputPhone;
