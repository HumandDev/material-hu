import { ControllerProps } from 'react-hook-form';
import { RadioProps } from '@mui/material';
type Props = {
    name: string;
    radioButtonProps: Omit<RadioProps, 'name'> & {
        label: string;
        extraData?: string;
        description?: string;
    };
    rules?: ControllerProps['rules'];
};
declare const FormRadioButton: ({ name, radioButtonProps, rules }: Props) => import("react/jsx-runtime").JSX.Element;
export default FormRadioButton;
