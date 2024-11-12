import InputSelect from './InputSelect';
import { Controller, ControllerProps } from 'react-hook-form';
import { ComponentProps } from 'react';

type Props = {
  name: string;
  inputProps: Pick<
    ComponentProps<typeof InputSelect>,
    'label' | 'placeholder' | 'sx' | 'helperText' | 'options' | 'disabled'
  >;
  rules?: ControllerProps['rules'];
};

const FormInputSelect = ({ name, inputProps, rules }: Props) => {
  return (
    <Controller
      render={({ field: { ref, ...field }, fieldState: { error } }) => (
        <InputSelect
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

export default FormInputSelect;
