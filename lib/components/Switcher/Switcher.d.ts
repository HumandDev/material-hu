import { FC } from 'react';
import { ChipProps } from '../Toggle/Toggle';
type SwitcherProps = {
    title: string;
    description: string;
    disabled?: boolean;
    toggleProps?: ChipProps;
};
declare const Switcher: FC<SwitcherProps>;
export default Switcher;
