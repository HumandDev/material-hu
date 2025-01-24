import { FC, ComponentProps } from 'react';
import { Controller, ControllerProps } from 'react-hook-form';
import Search from './Search';

export type FormSearchProps = {
  name: string;
  inputProps?: Pick<
    ComponentProps<typeof Search>,
    'label' | 'placeholder' | 'variant' | 'sx' | 'onChange'
  >;
  rules?: ControllerProps['rules'];
};

export const FormSearch: FC<FormSearchProps> = ({
  name,
  inputProps: { onChange: onChangeProp = () => null, ...inputProps } = {},
  rules,
}) => {
  const handleChange =
    (callback: (value: string) => void) => (value: string) => {
      callback(value);
      onChangeProp(value);
    };

  return (
    <Controller
      render={({
        field: { ref, onBlur, onChange, ...field },
        fieldState: { error },
      }) => (
        <Search
          {...field}
          {...inputProps}
          onChange={handleChange(onChange)}
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

export default FormSearch;
