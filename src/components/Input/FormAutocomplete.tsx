import { Controller, ControllerProps } from 'react-hook-form';
import Autocomplete, { AutocompleteProps } from './Autocomplete';

type FormAutocompleteProps<
  TValue extends Record<string, unknown>,
  TMultiple extends boolean | undefined = false,
> = {
  name: string;
  rules?: ControllerProps['rules'];
  autocompleteProps: Omit<
    AutocompleteProps<TValue, TMultiple>,
    'value' | 'onChange'
  >;
};

const FormAutocomplete = <TValue extends Record<string, unknown>>({
  name,
  rules,
  autocompleteProps: { renderOption, ...other },
}: FormAutocompleteProps<TValue>) => {
  return (
    <Controller
      render={({ field, fieldState: { error, invalid } }) => (
        <Autocomplete
          {...field}
          {...other}
          hasError={invalid}
          helperText={error?.message}
        />
      )}
      name={name}
      rules={rules}
      disabled={other?.disabled}
    />
  );
};

export default FormAutocomplete;
