import { ReactNode } from 'react';
import { StepperProps } from '@mui/material';
type Props = {
    steps: {
        label: string;
        content?: ReactNode;
    }[];
    stepperProps?: StepperProps;
};
declare const CustomStepper: ({ steps, stepperProps }: Props) => import("react/jsx-runtime").JSX.Element;
export default CustomStepper;
