import InputClassic from './InputClassic';
import { ControllerProps } from 'react-hook-form';
import { ComponentProps } from 'react';
type Props = {
    name: string;
    inputProps: Pick<ComponentProps<typeof InputClassic>, 'label' | 'placeholder' | 'sx' | 'helperText' | 'maxLength' | 'hasCounter' | 'multiline'>;
    rules?: ControllerProps['rules'];
};
declare const FormInputClassic: ({ name, inputProps, rules }: Props) => import("react/jsx-runtime").JSX.Element;
export default FormInputClassic;
