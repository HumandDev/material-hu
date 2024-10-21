import { ComponentProps } from 'react';
import DatePicker from './DatePicker';
import { Controller, ControllerProps } from 'react-hook-form';

type Props = {
  name: string;
  range?: boolean;
  inputProps: Pick<
    ComponentProps<typeof DatePicker>,
    'label' | 'placeholder' | 'sx' | 'helperText'
  >;
  rules?: ControllerProps['rules'];
};

const FormDatePicker = ({ name, inputProps, rules, range = false }: Props) => {
  return (
    <Controller
      render={({ field: { ref, onBlur, ...field }, fieldState: { error } }) => (
        <DatePicker
          {...field}
          {...inputProps}
          inputRef={ref}
          error={!!error}
          errorText={error?.message}
          range={range}
        />
      )}
      name={name}
      rules={rules}
    />
  );
};

export default FormDatePicker;
