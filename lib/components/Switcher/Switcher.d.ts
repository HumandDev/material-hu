import { FC } from 'react';
import { StackProps } from '@mui/material';
export type SwitcherProps = {
    title: string;
    description: string;
    disabled?: boolean;
    value: boolean;
    onChange: (value: boolean) => void;
    sx?: StackProps['sx'];
};
declare const Switcher: FC<SwitcherProps>;
export default Switcher;
