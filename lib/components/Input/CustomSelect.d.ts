import { FC } from 'react';
import { SelectProps } from '@mui/material';
export type CustomSelectProps = Pick<SelectProps, 'placeholder' | 'inputRef' | 'disabled'> & {
    value: string;
    success?: boolean;
    onChange: (value: string) => void;
    options: {
        label: string;
        value: string | number;
    }[];
    allowClear?: boolean;
};
declare const CustomSelect: FC<CustomSelectProps>;
export default CustomSelect;
