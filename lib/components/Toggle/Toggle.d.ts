import { SwitchProps as MuiSwitchProps } from '@mui/material';
export type ToggleProps = Pick<MuiSwitchProps, 'disabled' | 'checked'> & {
    onChange: (value: boolean) => void;
};
declare const Toggle: ({ disabled, checked, onChange }: ToggleProps) => import("react/jsx-runtime").JSX.Element;
export default Toggle;
