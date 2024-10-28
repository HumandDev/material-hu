import { FC } from 'react';
import { CheckboxProps } from '@mui/material';
type CustomProps = {
    label: string;
    description?: string;
    extraInfo?: string;
    error?: boolean;
};
type OriginalProps = Pick<CheckboxProps, 'aria-describedby' | 'aria-label' | 'checked' | 'disabled' | 'indeterminate' | 'inputRef' | 'onChange' | 'onClick' | 'sx'>;
declare const Checkbox: FC<CustomProps & OriginalProps>;
export default Checkbox;
