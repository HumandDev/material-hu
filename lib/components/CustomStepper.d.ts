import { ReactNode } from 'react';
import { StepperProps } from '@mui/material';
export type CustomStepperProps = {
    steps: {
        label: string;
        content?: ReactNode;
    }[];
    stepperProps?: StepperProps;
};
declare const CustomStepper: ({ steps, stepperProps }: CustomStepperProps) => import("react/jsx-runtime").JSX.Element;
export default CustomStepper;
