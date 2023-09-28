import { ReactNode } from 'react';
import { Box, Stack, Step, StepConnector, StepContent, StepIconProps, StepLabel, Stepper, StepperProps } from '@mui/material';
import { Check as CheckIcon } from '@mui/icons-material';

export type CustomStepperProps = {
  steps: {
    label: string
    content?: ReactNode
  }[]
  stepperProps?: StepperProps
  onClick?: ()=>void
};

const CUSTOM_STEP_ICON_SIZE = 24;
const CustomStepIcon = ({ active, completed }:StepIconProps) => (
  <Box sx={{
    borderRadius: 3,
    width: CUSTOM_STEP_ICON_SIZE,
    height: CUSTOM_STEP_ICON_SIZE,
    border: '2px solid',
    borderColor: active ? 'primary.main' : 'text.disabled',
    backgroundColor: completed ? 'primary.main' : 'none',
    mr: 3
  }}
  >
    {completed && (
      <CheckIcon
        sx={{ color: 'primary.contrastText' }}
        fontSize="small"
      />
    )}
  </Box>
);

const CustomStepConnector = () => (
  <StepConnector sx={{ '.MuiStepConnector-line': { borderColor: 'transparent' } }} />
);

const CustomStepper = ({ steps, stepperProps, onClick }:CustomStepperProps) => (
  <Stepper
    connector={<CustomStepConnector />}
    orientation='vertical'
    {...stepperProps}
  >
    {steps.map((step) => (
      <Stack onClick={onClick}>
        <Step key={step.label}>
          <StepLabel StepIconComponent={CustomStepIcon}>{step.label}</StepLabel>
          {step.content && <StepContent>{step.content}</StepContent>}
        </Step>
      </Stack>
    ))}
  </Stepper>
);

export default CustomStepper;
