import { FC } from 'react';
import { ControllerProps } from 'react-hook-form';
import { SwitcherProps } from './Switcher';
type Props = {
    name: string;
    switcherProps: Omit<SwitcherProps, 'value' | 'onChange'>;
    rules?: ControllerProps['rules'];
};
declare const FormSwitcher: FC<Props>;
export default FormSwitcher;
