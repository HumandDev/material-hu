import { FC } from 'react';
import { UseControllerProps } from 'react-hook-form';
import { InputPhoneProps } from './InputPhone';
export type FormPhoneNumberProps = Pick<UseControllerProps, 'name' | 'rules' | 'disabled'> & {
    inputProps: Omit<InputPhoneProps, 'value' | 'onChange'> & {
        showErrors?: boolean;
    };
};
declare const FormInputPhone: FC<FormPhoneNumberProps>;
export default FormInputPhone;
