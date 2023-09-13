import { ReactNode } from 'react';
import { Box, Step, StepConnector, StepContent, StepIconProps, StepLabel, Stepper, StepperProps } from '@mui/material';
import { Check } from '@mui/icons-material';

export type CustomStepperProps = {
  steps: {
    label: string
    content?: ReactNode
  }[]
  stepperProps?: StepperProps
};

const CUSTOM_STEP_ICON_SIZE = 24;
const CustomStepIcon = ({ active, completed }:StepIconProps) => (
  <Box sx={{
    borderRadius: 3,
    width: CUSTOM_STEP_ICON_SIZE,
    height: CUSTOM_STEP_ICON_SIZE,
    border: '2px solid',
    borderColor: active ? 'primary.main' : 'text.disabled',
    backgroundColor: completed ? 'primary.main' : 'transparent',
    mr: 3
  }}>
    {completed && <Check/>}
    </Box>
);

const CustomStepConnector = () => (
  <StepConnector sx={{ '.MuiStepConnector-line': { borderColor: 'transparent' } }} />
);

const CustomStepper = ({ steps, stepperProps }:CustomStepperProps) => (
  <Stepper
    connector={<CustomStepConnector />}
    orientation='vertical'
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
