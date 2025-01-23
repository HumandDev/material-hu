import { FC } from 'react';
import { CountryCode } from 'libphonenumber-js/types';
import { TextFieldProps } from '@mui/material';
import { ControllerProps, UseControllerProps } from 'react-hook-form';
export type FormPhoneNumberProps = TextFieldProps & Omit<UseControllerProps, 'rules'> & {
    codeName?: string;
    ariaLabel?: string;
    defaultCountry?: CountryCode;
    showErrors?: boolean;
    rules?: ControllerProps['rules'];
};
declare const FormInputPhone: FC<FormPhoneNumberProps>;
export default FormInputPhone;
