import { FC, ReactNode } from 'react';
import { OutlinedInputProps, SxProps } from '@mui/material';
export type CustomInputProps = Pick<OutlinedInputProps, 'placeholder' | 'inputRef' | 'multiline' | 'disabled' | 'minRows'> & {
    value: string;
    success?: boolean;
    maxLength?: number;
    onChange: (value: string) => void;
    startAdornment?: ReactNode;
    sxInput?: SxProps;
};
declare const CustomInput: FC<CustomInputProps>;
export default CustomInput;
