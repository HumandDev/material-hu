import { ComponentProps } from 'react';
import { Controller, ControllerProps } from 'react-hook-form';
import Checkbox from './Checkbox';

type Props = {
  name: string;
  checkBoxProps: ComponentProps<typeof Checkbox>;
  rules?: ControllerProps['rules'];
};

const FormCheckbox = ({ name, checkBoxProps, rules }: Props) => {
  return (
    <Controller
      render={({ field: { value, ref, ...field }, fieldState: { error } }) => (
        <Checkbox
          checked={Boolean(value)}
          {...field}
          {...checkBoxProps}
          inputRef={ref}
          error={!!error}
        />
      )}
      name={name}
      rules={rules}
    />
  );
};

export default FormCheckbox;
