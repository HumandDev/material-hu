/// <reference types="react" />
import { RadioProps, SxProps, TypographyProps } from '@mui/material';
type RadioButtonProps = {
    error?: boolean;
    isActive?: boolean;
    label: string;
    extraData?: string;
    description?: string;
    onClick: (param: boolean) => void;
    stackSx?: SxProps;
    labelProps?: TypographyProps;
} & Omit<RadioProps, 'label' | 'onClick'>;
declare const RadioButton: React.FC<RadioButtonProps>;
export default RadioButton;
