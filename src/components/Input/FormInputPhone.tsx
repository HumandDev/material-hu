import { FC } from 'react';
import {
  Controller,
  ControllerProps,
  UseControllerProps,
  useFormContext,
} from 'react-hook-form';
import { useTranslation } from './i18n';
import { TextFieldProps } from '@mui/material';
import { isPossiblePhoneNumber } from 'libphonenumber-js';
import { CountryCode } from 'libphonenumber-js/types';
import InputPhone from './InputPhone';

export type FormPhoneNumberProps = TextFieldProps &
  Omit<UseControllerProps, 'rules'> & {
    ariaLabel?: string;
    defaultCountry?: CountryCode;
    showErrors?: boolean;
    rules?: ControllerProps['rules'];
  };

const FormInputPhone: FC<FormPhoneNumberProps> = props => {
  const {
    name,
    defaultCountry = 'AR',
    rules = {},
    defaultValue,
    showErrors = false,
    disabled,
    fullWidth = true,
    placeholder,
    label,
    autoFocus,
    onKeyDown,
    onPaste,
    inputProps,
    sx,
    margin,
    onClick,
    value: valueProp,
    helperText: helperTextProp,
  } = props;

  const {
    control,
    formState: { isSubmitted },
  } = useFormContext();
  const { t } = useTranslation();

  return (
    <Controller
      render={({
        field: { ref, value, onChange, ...field },
        fieldState: { error },
      }) => (
        <InputPhone
          {...field}
          onChange={newValue => onChange(newValue)}
          defaultCountry={defaultCountry}
          error={!!error}
          disabled={disabled}
          fullWidth={fullWidth}
          placeholder={placeholder}
          label={label}
          autoFocus={autoFocus}
          onKeyDown={onKeyDown}
          onPaste={onPaste}
          inputProps={inputProps}
          margin={margin}
          onClick={onClick}
          sx={sx}
          helperText={helperTextProp || showErrors ? error?.message : undefined}
          value={valueProp || value}
          success={isSubmitted ? !error : undefined}
        />
      )}
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{
        ...rules,
        validate: {
          ...rules.validate,
          isPossiblePhoneNumber: input =>
            isPossiblePhoneNumber(input) || t('INVALID_PHONE_NUMBER'),
        },
      }}
    />
  );
};

export default FormInputPhone;
