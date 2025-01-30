import { FC } from 'react';
import { TextFieldProps } from '@mui/material';
import { CountryCode } from 'libphonenumber-js/types';
import { InputProps } from './InputClassic';
export type InputPhoneProps = Pick<TextFieldProps, 'onPaste' | 'autoFocus' | 'onKeyDown' | 'margin' | 'onClick' | 'inputProps'> & Pick<InputProps, 'label' | 'success' | 'fullWidth' | 'disabled' | 'sx' | 'helperText' | 'disabled' | 'placeholder' | 'error' | 'value'> & {
    onChange: (value: string, countryCallingCode?: string) => void;
    defaultCountry?: CountryCode;
    preferredCountries?: CountryCode[];
};
declare const InputPhone: FC<InputPhoneProps>;
export default InputPhone;
