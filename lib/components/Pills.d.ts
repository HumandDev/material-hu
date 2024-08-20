import { ChipProps } from '@mui/material';
export type PillsProps = ChipProps & {
    type: 'default' | 'error' | 'success' | 'warning' | 'info' | 'highlight' | 'neutral' | 'disabled';
    size: 'small' | 'medium';
    label: string;
    hasIcon?: boolean;
};
declare const Pills: ({ label, type, size, hasIcon, sx, }: PillsProps) => import("react/jsx-runtime").JSX.Element;
export default Pills;
