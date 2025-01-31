import { ComponentProps } from 'react';
import { ControllerProps } from 'react-hook-form';
import InputMoney from './InputMoney';
type Props = {
    name: string;
    inputProps: Pick<ComponentProps<typeof InputMoney>, 'label' | 'placeholder' | 'sx' | 'helperText' | 'maxLength'>;
    rules?: ControllerProps['rules'];
    transform?: {
        input?: (value: string) => string;
        output?: (value: string) => string;
    };
};
declare const FormInputMoney: ({ name, inputProps, rules, transform }: Props) => import("react/jsx-runtime").JSX.Element;
export default FormInputMoney;
