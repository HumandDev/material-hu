import { FC, ReactNode } from 'react';
import { StepperProps, StepProps, StepLabelProps } from '@mui/material';
export type StepType = {
    id: string;
    label: string;
    content: (info: {
        id: string;
        activeStep: number;
    }) => ReactNode;
    stepProps?: StepProps;
    stepLabelProps?: StepLabelProps;
};
export type HorizontalStepperProps = StepperProps & {
    steps: StepType[];
    disabled?: boolean;
    backButton?: {
        onClick?: () => void;
        getLabel?: (step: StepType) => string | null;
        disabled?: boolean;
    };
    nextButton?: {
        onClick?: () => void;
        getLabel?: (step: StepType) => string | null;
        disabled?: boolean;
    };
    finishButton?: {
        onClick?: () => void;
        label?: string;
        disabled?: boolean;
    };
    stateLabels?: {
        active?: string;
        completed?: string;
        pending?: string;
    };
};
export declare const HorizontalStepper: FC<HorizontalStepperProps>;
export default HorizontalStepper;
