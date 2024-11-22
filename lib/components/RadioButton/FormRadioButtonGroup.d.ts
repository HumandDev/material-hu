import { FC } from 'react';
import { ControllerProps } from 'react-hook-form';
import { RadioGroupProps, RadioProps } from '@mui/material';
type Option = {
    value: any;
    label: string;
    helperText?: string;
};
type Props = Omit<RadioGroupProps, 'name'> & {
    name: string;
    options: Option[];
    radioProps?: RadioProps;
    rules?: ControllerProps['rules'];
};
declare const FormRadioButtonGroup: FC<Props>;
export default FormRadioButtonGroup;
