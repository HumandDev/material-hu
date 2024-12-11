/// <reference types="react" />
import { FilterOptionsState, AutocompleteProps as MUIAutocompleteProps } from '@mui/material';
type BaseProps<TValue> = MUIAutocompleteProps<TValue, boolean, boolean, boolean>;
type BaseOption = Record<string, unknown> & {
    isCreatable?: boolean;
};
type AutocompleteProps<TValue = unknown> = BaseProps<TValue> & {
    noOptionsPrimary: string;
    noOptionsSecondary: string;
    error?: boolean;
    helperText?: string;
    canCreate?: boolean;
    renderCreatableOption?: BaseProps<TValue>['renderOption'];
    onCreate?: BaseProps<TValue>['onChange'];
    renderLoadElementTrigger?: BaseProps<TValue>['renderOption'];
    getCreatableOption?: (options: TValue[], state: FilterOptionsState<TValue>) => TValue;
    placeholder?: string;
    label?: string;
};
declare const _default: import("react").ForwardRefExoticComponent<Omit<AutocompleteProps<BaseOption>, "ref"> & import("react").RefAttributes<unknown>>;
export default _default;
