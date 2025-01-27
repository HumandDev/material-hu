import { FC } from 'react';
import { TextFieldProps } from '@mui/material';
import { CountryCode } from 'libphonenumber-js/types';
export type InputPhoneProps = Omit<TextFieldProps, 'onChange'> & {
    value?: string;
    onChange?: (value: string, countryCallingCode?: string) => void;
    defaultCountry?: CountryCode;
    ariaLabel?: string;
    preferredCountries?: CountryCode[];
    valid?: boolean;
};
declare const InputPhone: FC<InputPhoneProps>;
export default InputPhone;
