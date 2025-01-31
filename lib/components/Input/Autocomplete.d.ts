import { ReactNode } from 'react';
import { AutocompleteProps as MUIAutocompleteProps } from '@mui/material';
export declare const isEqualText: (textA: string, textB: string) => boolean;
type ExtraProps<TValue> = {
    noOptionsTitle?: string;
    noOptionsDescription?: string;
    hasError?: boolean;
    helperText?: string;
    placeholder?: string;
    label?: string;
    fieldRef?: any;
    onCreate?: (inputValue: string) => void;
    getCreatableOption?: (input: string) => TValue;
    loadMoreElem?: ReactNode;
};
export type AutocompleteProps<TValue extends Record<string, unknown>, TMultiple extends boolean | undefined = false> = Omit<MUIAutocompleteProps<TValue, TMultiple, boolean, false>, 'ref' | 'renderInput' | 'onChange' | 'value' | 'getOptionLabel' | 'getOptionKey' | 'filterOptions'> & Required<Pick<MUIAutocompleteProps<TValue, TMultiple, boolean, false>, 'onChange' | 'value' | 'getOptionLabel' | 'getOptionKey'>> & ExtraProps<TValue>;
declare const Autocomplete: <TValue extends Record<string, unknown>, TMultiple extends boolean | undefined = false>(props: AutocompleteProps<TValue, TMultiple>) => import("react/jsx-runtime").JSX.Element;
export default Autocomplete;
