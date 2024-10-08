import { FC } from 'react';
import { OutlinedInputProps } from '@mui/material';
export type CustomInputProps = Pick<OutlinedInputProps, 'placeholder' | 'inputRef' | 'multiline'> & {
    value: string;
    success?: boolean;
    maxLength?: number;
    onChange: (value: string) => void;
};
declare const CustomInput: FC<CustomInputProps>;
export default CustomInput;
