import { FC, ReactNode } from 'react';
import { StepperProps, StepProps, StepLabelProps, StepButtonProps } from '@mui/material';
export type StepType = {
    id: string;
    label: string;
    content: (info: {
        id: string;
        activeStep: number;
    }) => ReactNode;
    completed?: boolean;
    disabled?: boolean;
    stepProps?: StepProps;
    stepLabelProps?: StepLabelProps;
    stepButtonProps?: StepButtonProps;
};
export type HorizontalStepperProps = StepperProps & {
    steps: StepType[];
    disabled?: boolean;
    clickable?: boolean;
    onSelectStep?: (index: number) => void;
    onClose?: () => void;
    closeLabel?: string;
    title?: string;
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
