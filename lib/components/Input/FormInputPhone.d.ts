import { FC } from 'react';
import { ControllerProps, UseControllerProps } from 'react-hook-form';
import { TextFieldProps } from '@mui/material';
import { CountryCode } from 'libphonenumber-js/types';
export type FormPhoneNumberProps = TextFieldProps & Omit<UseControllerProps, 'rules'> & {
    codeName?: string;
    ariaLabel?: string;
    defaultCountry?: CountryCode;
    showErrors?: boolean;
    rules?: ControllerProps['rules'];
};
declare const FormInputPhone: FC<FormPhoneNumberProps>;
export default FormInputPhone;
