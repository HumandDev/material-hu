import { ControllerProps } from 'react-hook-form';
import { AutocompleteProps } from './Autocomplete';
type FormAutocompleteProps<TValue extends Record<string, unknown>, TMultiple extends boolean | undefined = false> = {
    name: string;
    rules?: ControllerProps['rules'];
    autocompleteProps: Omit<AutocompleteProps<TValue, TMultiple>, 'value' | 'onChange'>;
};
declare const FormAutocomplete: <TValue extends Record<string, unknown>>({ name, rules, autocompleteProps: { renderOption, ...other }, }: FormAutocompleteProps<TValue, false>) => import("react/jsx-runtime").JSX.Element;
export default FormAutocomplete;
