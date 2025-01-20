import { FC, ComponentProps } from 'react';
import { Controller, ControllerProps } from 'react-hook-form';
import Search from './Search';

export type FormSearchProps = {
  name: string;
  inputProps?: Pick<
    ComponentProps<typeof Search>,
    'label' | 'placeholder' | 'variant' | 'sx'
  >;
  rules?: ControllerProps['rules'];
};

export const FormSearch: FC<FormSearchProps> = ({
  name,
  inputProps,
  rules,
}) => {
  return (
    <Controller
      render={({ field: { ref, onBlur, ...field }, fieldState: { error } }) => (
        <Search
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

export default FormSearch;
