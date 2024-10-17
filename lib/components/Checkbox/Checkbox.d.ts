import { FC } from 'react';
import { CheckboxProps } from '@mui/material';
type CustomProps = {
    label: string;
    description: string;
    extraInfo?: string;
    error?: boolean;
};
type OriginalProps = Pick<CheckboxProps, 'aria-describedby' | 'aria-label' | 'checked' | 'defaultChecked' | 'disabled' | 'indeterminate' | 'onChange' | 'onClick' | 'readOnly' | 'sx'>;
declare const Checkbox: FC<CustomProps & OriginalProps>;
export default Checkbox;
