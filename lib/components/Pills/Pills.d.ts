import { ChipProps } from '@mui/material';
export type PillsProps = ChipProps & {
    label: string;
    type?: 'error' | 'success' | 'warning' | 'info' | 'highlight' | 'neutral' | 'disabled';
    size?: 'small' | 'medium';
    hasIcon?: boolean;
};
declare const Pills: ({ label, type, size, hasIcon, sx, }: PillsProps) => import("react/jsx-runtime").JSX.Element;
export default Pills;
