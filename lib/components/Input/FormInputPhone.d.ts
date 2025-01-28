import { FC } from 'react';
import { UseControllerProps } from 'react-hook-form';
import { InputPhoneProps } from './InputPhone';
export type FormPhoneNumberProps = UseControllerProps & {
    inputProps: InputPhoneProps & {
        showErrors?: boolean;
    };
};
declare const FormInputPhone: FC<FormPhoneNumberProps>;
export default FormInputPhone;
