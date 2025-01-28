import { FC } from 'react';
import {
  Controller,
  UseControllerProps,
  useFormContext,
} from 'react-hook-form';
import { useTranslation } from './i18n';
import { isPossiblePhoneNumber } from 'libphonenumber-js';
import InputPhone, { InputPhoneProps } from './InputPhone';

export type FormPhoneNumberProps = UseControllerProps & {
  inputProps: InputPhoneProps & { showErrors?: boolean };
};

const FormInputPhone: FC<FormPhoneNumberProps> = props => {
  const {
    name,
    inputProps: { showErrors = false, ...inputPhoneProps },
    rules = {},
    defaultValue,
    disabled,
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
          {...inputPhoneProps}
          onChange={newValue => onChange(newValue)}
          error={!!error}
          disabled={disabled}
          helperText={
            inputPhoneProps.helperText || showErrors
              ? error?.message
              : undefined
          }
          value={inputPhoneProps.value || value}
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
