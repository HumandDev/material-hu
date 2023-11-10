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
    onNext?: () => void;
    disabledNext?: boolean;
    onBack?: () => void;
    disabledBack?: boolean;
    onFinish?: () => void;
    disabledFinish?: boolean;
    getStepStateLabel?: (step: number) => string | null;
    getBackLabel?: (step: StepType) => string | null;
    getNextLabel?: (step: StepType) => string | null;
    finishLabel?: string;
};
export declare const HorizontalStepper: FC<HorizontalStepperProps>;
export default HorizontalStepper;
