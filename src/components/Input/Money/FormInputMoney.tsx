import { ComponentProps } from 'react';
import { Controller, ControllerProps } from 'react-hook-form';

import InputMoney from './InputMoney';

type Props = {
  name: string;
  inputProps: Pick<
    ComponentProps<typeof InputMoney>,
    | 'label'
    | 'placeholder'
    | 'sx'
    | 'helperText'
    | 'maxLength'
  >;
  rules?: ControllerProps['rules'];
  transform?: {
    input?: (value: string) => string;
    output?: (value: string) => string;
  }
};

const FormInputMoney = ({ name, inputProps, rules, transform }: Props) => {
  return (
    <Controller
      render={({ field: { ref, onBlur, ...field }, fieldState: { error } }) => (
        <InputMoney
          {...field}
          {...inputProps}
          transform={transform}
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

export default FormInputMoney;
