/// <reference types="react" />
import { RadioProps, StackProps, TypographyProps } from '@mui/material';
type RadioButtonProps = {
    error?: boolean;
    isActive?: boolean;
    label: string;
    extraData?: string;
    description?: string;
    stackProps?: StackProps;
    labelProps?: TypographyProps;
} & Omit<RadioProps, 'label'>;
declare const RadioButton: React.FC<RadioButtonProps>;
export default RadioButton;
