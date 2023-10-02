import { ReactNode } from 'react';
import { StepperProps } from '@mui/material';
export type CustomStepperProps = {
    steps: {
        label: string;
        content?: ReactNode;
    }[];
    stepperProps?: StepperProps;
    onStepClick?: Function;
};
declare const CustomStepper: ({ steps, stepperProps, onStepClick }: CustomStepperProps) => import("react/jsx-runtime").JSX.Element;
export default CustomStepper;
