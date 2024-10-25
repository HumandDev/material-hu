import { ComponentProps } from 'react';
import { ControllerProps } from 'react-hook-form';
import Checkbox from './Checkbox';
type Props = {
    name: string;
    checkBoxProps: ComponentProps<typeof Checkbox>;
    rules?: ControllerProps['rules'];
};
declare const FormCheckbox: ({ name, checkBoxProps, rules }: Props) => import("react/jsx-runtime").JSX.Element;
export default FormCheckbox;
