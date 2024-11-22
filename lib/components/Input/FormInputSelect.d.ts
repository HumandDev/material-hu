import InputSelect from './InputSelect';
import { ControllerProps } from 'react-hook-form';
import { ComponentProps } from 'react';
type Props = {
    name: string;
    inputProps: Pick<ComponentProps<typeof InputSelect>, 'label' | 'placeholder' | 'sx' | 'helperText' | 'options' | 'disabled' | 'allowClear'>;
    rules?: ControllerProps['rules'];
};
declare const FormInputSelect: ({ name, inputProps, rules }: Props) => import("react/jsx-runtime").JSX.Element;
export default FormInputSelect;
