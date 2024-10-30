import { Controller, ControllerProps } from 'react-hook-form';
import RadioButton from './RadioButton';
import { RadioProps } from '@mui/material';

type Props = {
  name: string;
  radioButtonProps: Omit<RadioProps, 'name'> & {
    label: string;
    extraData?: string;
    description?: string;
  };
  rules?: ControllerProps['rules'];
};

const FormRadioButton = ({ name, radioButtonProps, rules }: Props) => {
  return (
    <Controller
      name={name}
      rules={rules}
      render={({ field: { value, ref, ...field }, fieldState: { error } }) => (
        <RadioButton
          isActive={Boolean(value)}
          {...field}
          {...radioButtonProps}
          inputRef={ref}
          error={!!error}
        />
      )}
    />
  );
};

export default FormRadioButton;
