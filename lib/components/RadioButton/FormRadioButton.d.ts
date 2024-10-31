import { ControllerProps } from 'react-hook-form';
import { RadioProps, SxProps, TypographyProps } from '@mui/material';
type Props = {
    name: string;
    radioButtonProps: Omit<RadioProps, 'name'> & {
        label: string;
        extraData?: string;
        description?: string;
        stackSx?: SxProps;
        labelProps?: TypographyProps;
        isOnlyOption?: boolean;
    };
    isOnlyOption?: boolean;
    rules?: ControllerProps['rules'];
};
declare const FormRadioButton: ({ name, radioButtonProps, rules, isOnlyOption, }: Props) => import("react/jsx-runtime").JSX.Element;
export default FormRadioButton;
