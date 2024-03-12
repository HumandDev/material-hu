import { ReactNode } from 'react';
import {
  Box,
  ListItemButton,
  Step,
  StepConnector,
  StepContent,
  StepIconProps,
  StepLabel,
  Stepper,
  StepperProps,
  Typography,
} from '@mui/material';
import { Check as CheckIcon } from '@mui/icons-material';

export type CustomStepperProps = {
  steps: {
    label: string;
    content?: ReactNode;
    completed?: boolean;
    expanded?: boolean;
    substeps?: { label: string }[];
  }[];
  activeSubstep?: number;
  stepperProps?: StepperProps;
  onStepClick?: Function;
};

const CUSTOM_STEP_ICON_SIZE = 24;
const CustomStepIcon = ({ active, completed }: StepIconProps) => (
  <Box
    sx={{
      borderRadius: 3,
      width: CUSTOM_STEP_ICON_SIZE,
      height: CUSTOM_STEP_ICON_SIZE,
      border: '2px solid',
      borderColor: active || completed ? 'primary.main' : 'text.disabled',
      backgroundColor: completed ? 'primary.main' : 'none',
      mr: 3,
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
  <StepConnector
    sx={{ '.MuiStepConnector-line': { borderColor: 'transparent' } }}
  />
);

const CustomStepper = ({
  steps,
  stepperProps,
  onStepClick,
  activeSubstep,
}: CustomStepperProps) => (
  <Stepper
    connector={<CustomStepConnector />}
    orientation="vertical"
    nonLinear={!!onStepClick}
    {...stepperProps}
  >
    {steps.map((step, index) => (
      <Step
        key={step.label}
        completed={step.completed} // Setting manually completed when nonLinear
        expanded={step.expanded}
        onClick={() => (onStepClick ? onStepClick(index) : null)} // Using onClick in Step instead of StepButton by style: button implies an unwanted effect
        sx={{ cursor: onStepClick ? 'pointer' : 'default' }}
      >
        <StepLabel StepIconComponent={CustomStepIcon}>{step.label}</StepLabel>
        {step.content && <StepContent>{step.content}</StepContent>}
        {step.substeps &&
          stepperProps?.activeStep === index &&
          step.substeps.map((sub, i) => (
            <ListItemButton
              key={sub.label}
              sx={{ pl: 1 }}
            >
              <p
                style={{
                  visibility: activeSubstep === i ? 'inherit' : 'hidden',
                  fontSize: '16px',
                  marginRight: '42px',
                  color: 'primary',
                }}
              >
                •
              </p>
              <Typography
                variant="body2"
                color={activeSubstep === i ? 'text.primary' : 'text.secondary'}
              >
                {sub.label}
              </Typography>
            </ListItemButton>
          ))}
      </Step>
    ))}
  </Stepper>
);

export default CustomStepper;
