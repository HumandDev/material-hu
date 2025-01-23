import { FC, useState, useEffect } from 'react';
import { CountryCode } from 'libphonenumber-js/types';
import { TextFieldProps } from '@mui/material';
import {
  Controller,
  ControllerProps,
  UseControllerProps,
  useFormContext,
} from 'react-hook-form';
import InputPhone from './InputPhone';
import { isPossiblePhoneNumber } from 'libphonenumber-js';
import { useTranslation } from './i18n';

export type FormPhoneNumberProps = TextFieldProps &
  Omit<UseControllerProps, 'rules'> & {
    codeName?: string;
    ariaLabel?: string;
    defaultCountry?: CountryCode;
    showErrors?: boolean;
    rules?: ControllerProps['rules'];
  };

const FormInputPhone: FC<FormPhoneNumberProps> = props => {
  const {
    name,
    codeName = null,
    defaultCountry = 'AR',
    rules = {},
    defaultValue,
    showErrors = false,
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
    value: valueProp,
    helperText: helperTextProp,
  } = props;

  const [code, setCode] = useState<string>('54');
  const {
    control,
    trigger,
    setValue,
    formState: { isSubmitted },
    getValues,
  } = useFormContext();
  const { t } = useTranslation();

  useEffect(() => {
    if (isSubmitted) {
      trigger(name);
    }
  }, [code]);

  const validationRules: ControllerProps['rules'] = {
    ...rules,
    validate: (value: string) => {
      // Run custom validate function if provided
      if (typeof rules.validate === 'function') {
        const customValidation = rules.validate(value, getValues);
        if (customValidation !== true)
          return customValidation as string | boolean;
      }

      // Run phone number validation
      if (!value) return true;
      return isPossiblePhoneNumber(value) || t('INVALID_PHONE_NUMBER');
    },
  };

  return (
    <Controller
      render={({
        field: { ref, value, onChange, ...field },
        fieldState: { error },
      }) => (
        <InputPhone
          {...field}
          onChange={(newValue, countryCode) => {
            onChange(newValue);
            if (codeName && countryCode) {
              setValue(codeName, countryCode);
              setCode(countryCode);
            }
          }}
          defaultCountry={defaultCountry}
          error={!!error}
          size={size}
          disabled={disabled}
          fullWidth={fullWidth}
          maxRows={maxRows}
          minRows={minRows}
          placeholder={placeholder}
          label={label}
          autoFocus={autoFocus}
          aria-label={ariaLabel}
          variant={variant}
          onKeyDown={onKeyDown}
          onPaste={onPaste}
          inputProps={inputProps}
          margin={margin}
          onClick={onClick}
          sx={sx}
          helperText={helperTextProp || showErrors ? error?.message : undefined}
          value={valueProp || value}
        />
      )}
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={validationRules}
    />
  );
};

export default FormInputPhone;
