import { ComponentProps } from 'react';
import DatePicker from './DatePicker';
import { Controller, ControllerProps } from 'react-hook-form';

type Props = {
  name: string;
  inputProps: Pick<ComponentProps<typeof DatePicker>, 'label' | 'helperText'>;
  rules?: ControllerProps['rules'];
};

const FormDatePicker = ({ name, inputProps, rules }: Props) => {
  return (
    <Controller
      render={({ field: { ref, onBlur, ...field }, fieldState: { error } }) => (
        <DatePicker
          {...field}
          {...inputProps}
          inputRef={ref}
          error={!!error}
          errorText={error?.message}
        />
      )}
      name={name}
      rules={rules}
    />
  );
};

export default FormDatePicker;
