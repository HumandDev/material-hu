import { ChipProps as MuiChipProps } from '@mui/material';
export type ChipProps = Pick<MuiChipProps, 'size' | 'disabled' | 'onDelete' | 'onClick'> & {
    label: string;
    isSelected?: boolean;
};
declare const Chip: ({ label, size, disabled, onDelete, isSelected, onClick, }: ChipProps) => import("react/jsx-runtime").JSX.Element;
export default Chip;
