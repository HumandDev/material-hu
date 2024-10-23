import { ComponentProps } from 'react';
import DatePicker from './DatePicker';
import { ControllerProps } from 'react-hook-form';
type Props = {
    name: string;
    inputProps: Pick<ComponentProps<typeof DatePicker>, 'label' | 'helperText'>;
    rules?: ControllerProps['rules'];
};
declare const FormDatePicker: ({ name, inputProps, rules }: Props) => import("react/jsx-runtime").JSX.Element;
export default FormDatePicker;
