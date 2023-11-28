import { FC, ReactNode } from 'react';
import { RadioGroupProps, RadioProps, FormControlLabelProps, FormHelperTextProps, StackProps } from '@mui/material';
export type Option = {
    value: any;
    label: ReactNode;
    helperText?: string;
};
export type FormRadioCustomGroupProps = Omit<RadioGroupProps, 'name'> & {
    name: string;
    options: Option[];
    radioProps?: RadioProps;
    labelProps?: Omit<FormControlLabelProps, 'control' | 'label'>;
    helperTextProps?: FormHelperTextProps;
    optionContainerProps?: StackProps;
    column?: boolean;
    fullWidth?: boolean;
};
export declare const FormRadioCustomGroup: FC<FormRadioCustomGroupProps>;
export default FormRadioCustomGroup;
