import { FC } from 'react';
import {
  Controller,
  UseControllerProps,
  useFormContext,
} from 'react-hook-form';
import { useTranslation } from './i18n';
import { isPossiblePhoneNumber } from 'libphonenumber-js';
import InputPhone, { InputPhoneProps } from './InputPhone';

export type FormPhoneNumberProps = Pick<
  UseControllerProps,
  'name' | 'rules' | 'disabled'
> & {
  inputProps: Omit<InputPhoneProps, 'value' | 'onChange'> & {
    showErrors?: boolean;
  };
};

const FormInputPhone: FC<FormPhoneNumberProps> = props => {
  const {
    name,
    disabled,
    inputProps: { showErrors = false, ...inputPhoneProps },
    rules = {},
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
          value={value}
          onChange={newValue => onChange(newValue)}
          error={!!error}
          disabled={disabled}
          helperText={
            inputPhoneProps.helperText || showErrors
              ? error?.message
              : undefined
          }
          success={isSubmitted ? !error : undefined}
        />
      )}
      name={name}
      control={control}
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
