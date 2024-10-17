import { FC } from 'react';
import { CheckboxProps } from '@mui/material';
type CustomProps = {
    label: string;
    description: string;
    extraInfo?: string;
    error?: boolean;
};
declare const Checkbox: FC<CustomProps & CheckboxProps>;
export default Checkbox;
