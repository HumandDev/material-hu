import InputClassic from './InputClassic';
import { Controller, ControllerProps } from 'react-hook-form';
import { ComponentProps } from 'react';

type Props = {
  name: string;
  inputProps: Pick<
    ComponentProps<typeof InputClassic>,
    | 'label'
    | 'placeholder'
    | 'sx'
    | 'helperText'
    | 'maxLength'
    | 'hasCounter'
    | 'multiline'
    | 'minRows'
    | 'startAdornment'
    | 'disabled'
  >;
  rules?: ControllerProps['rules'];
};

const FormInputClassic = ({ name, inputProps, rules }: Props) => {
  return (
    <Controller
      render={({ field: { ref, onBlur, ...field }, fieldState: { error } }) => (
        <InputClassic
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

export default FormInputClassic;
