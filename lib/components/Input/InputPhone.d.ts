import { FC } from 'react';
import { TextFieldProps } from '@mui/material';
import { CountryCode } from 'libphonenumber-js/types';
export interface InputPhoneProps extends Omit<TextFieldProps, 'onChange'> {
    value?: string;
    onChange?: (value: string, countryCallingCode?: string) => void;
    defaultCountry?: CountryCode;
    ariaLabel?: string;
}
declare const InputPhone: FC<InputPhoneProps>;
export default InputPhone;
