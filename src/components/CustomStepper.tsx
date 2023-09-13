import { ReactNode } from 'react';
import { Box, Step, StepConnector, StepContent, StepIconProps, StepLabel, Stepper, StepperProps } from '@mui/material';

type Props = {
  steps: {
    label: string
    content?: ReactNode
  }[]
  stepperProps?: StepperProps
};

const CUSTOM_STEP_ICON_SIZE = 24;
const CustomStepIcon = ({ active }:StepIconProps) => (
  <Box sx={{
    borderRadius: 3,
    width: CUSTOM_STEP_ICON_SIZE,
    height: CUSTOM_STEP_ICON_SIZE,
    border: '2px solid',
    borderColor: active ? 'primary.main' : 'text.disabled',
    mr: 3
  }}
  />
);

const CustomStepConnector = () => (
  <StepConnector sx={{ '.MuiStepConnector-line': { borderColor: 'transparent' } }} />
);

const CustomStepper = ({ steps, stepperProps }:Props) => (
  <Stepper
    connector={<CustomStepConnector />}
    {...stepperProps}
  >
    {steps.map((step) => (
      <Step key={step.label}>
        <StepLabel StepIconComponent={CustomStepIcon}>{step.label}</StepLabel>
        {step.content && <StepContent>{step.content}</StepContent>}
      </Step>
    ))}
  </Stepper>
);

export default CustomStepper;
