import { ReactNode } from 'react';
import { StepperProps } from '@mui/material';
export type CustomStepperProps = {
    steps: {
        label: string;
        content?: ReactNode;
    }[];
    stepperProps?: StepperProps;
    onClick?: () => void;
};
declare const CustomStepper: ({ steps, stepperProps, onClick }: CustomStepperProps) => import("react/jsx-runtime").JSX.Element;
export default CustomStepper;
