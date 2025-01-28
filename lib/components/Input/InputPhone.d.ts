import { FC } from 'react';
import { TextFieldProps } from '@mui/material';
import { CountryCode } from 'libphonenumber-js/types';
export type InputPhoneProps = Pick<TextFieldProps, 'sx' | 'value' | 'helperText' | 'placeholder' | 'error' | 'fullWidth' | 'disabled' | 'onClick' | 'margin' | 'inputProps' | 'onPaste' | 'onKeyDown' | 'autoFocus'> & {
    label?: string;
    value: string;
    onChange: (value: string, countryCallingCode?: string) => void;
    defaultCountry?: CountryCode;
    preferredCountries?: CountryCode[];
    success?: boolean;
};
declare const InputPhone: FC<InputPhoneProps>;
export default InputPhone;
