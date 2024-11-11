import { SwitchProps as MuiSwitchProps } from '@mui/material';
export type ChipProps = Pick<MuiSwitchProps, 'disabled' | 'defaultChecked'>;
declare const Toggle: ({ disabled, defaultChecked }: ChipProps) => import("react/jsx-runtime").JSX.Element;
export default Toggle;
