import { FC, ReactNode } from 'react';
import {
  Stepper,
  StepperProps,
  Step,
  StepProps,
  StepLabel,
  StepLabelProps,
  Divider,
  Button,
  Stack,
  Box,
  Typography,
  Container,
  useTheme,
  alpha,
} from '@mui/material';
import { Check } from '@mui/icons-material';

export type StepType = {
  id: string;
  label: string;
  content: (info: { id: string; activeStep: number }) => ReactNode;
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

export const HorizontalStepper: FC<HorizontalStepperProps> = props => {
  const {
    steps,
    activeStep = 0,
    disabled = false,
    finishButton,
    backButton,
    nextButton,
    stateLabels = {
      active: '',
      completed: '',
      pending: '',
    },
    ...stepperProps
  } = props;

  const theme = useTheme();

  const validStep = (step: number) => step >= 0 && step < steps.length;

  const getStepState = (step: number) => {
    if (!validStep(step)) return null;

    if (step === activeStep) return stateLabels.active;
    if (step < activeStep) return stateLabels.completed;
    return stateLabels.pending;
  };

  const getStepIcon = (step: number) => {
    if (!validStep(step)) return null;

    if (step < activeStep) {
      return (
        <Box className="MuiStepIcon-root">
          <Check />
        </Box>
      );
    }

    return null;
  };

  const currentStep = validStep(activeStep) && steps[activeStep];
  const prevStep = validStep(activeStep - 1) && steps[activeStep - 1];
  const nextStep = validStep(activeStep + 1) && steps[activeStep + 1];

  return (
    <>
      <Stack
        component={Stepper}
        activeStep={activeStep}
        connector={null}
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={1}
        p={3}
        {...stepperProps}
      >
        {steps.map((step, index) => {
          const { id, label, stepProps = {}, stepLabelProps = {} } = step;

          return (
            <Step
              key={id}
              {...stepProps}
              sx={{
                '& .MuiStepIcon-root': {
                  width: '40px',
                  height: '40px',
                  borderRadius: '40px',
                  color: '#f3f4f6 !important',
                  '& .MuiStepIcon-text': {
                    fill: theme.palette.text.secondary,
                  },
                },
                '& .MuiStepLabel-root': {
                  color: alpha(theme.palette.text.primary, 0.38),
                },
                '& .Mui-active': {
                  '&.MuiStepLabel-label .state': {
                    color: theme.palette.primary.main,
                  },
                  '& .MuiStepIcon-root': {
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: theme.palette.primary.main,
                    color: 'transparent !important',
                    '& .MuiStepIcon-text': {
                      fill: theme.palette.primary.main,
                    },
                  },
                },
                '& .Mui-completed': {
                  '&.MuiStepLabel-label .state': {
                    color: '#087443',
                  },
                  '& .MuiStepIcon-root': {
                    backgroundColor: '#edfcf2 !important',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '& svg': {
                      fill: '#087443',
                    },
                  },
                },
              }}
            >
              <StepLabel
                icon={getStepIcon(index)}
                {...stepLabelProps}
              >
                <Stack>
                  <Typography
                    className="state"
                    variant="body2"
                    component="span"
                  >
                    {getStepState(index)}
                  </Typography>
                  <Typography
                    className="label"
                    variant="h6"
                    component="span"
                  >
                    {label}
                  </Typography>
                </Stack>
              </StepLabel>
            </Step>
          );
        })}
      </Stack>
      <Divider />
      {!!currentStep && currentStep.content({ activeStep, id: currentStep.id })}
      <Stack
        component={Container}
        maxWidth="md"
        flexDirection="row"
        py={2}
        sx={{ backgroundColor: 'background.default' }}
      >
        {!!prevStep && !!backButton && (
          <Button
            id="horizontal-stepper-back-button"
            onClick={backButton.onClick}
            disabled={disabled || backButton.disabled}
          >
            {backButton.getLabel?.(prevStep)}
          </Button>
        )}
        {!!nextStep && !!nextButton && (
          <Button
            id="horizontal-stepper-next-button"
            variant="contained"
            onClick={nextButton.onClick}
            disabled={disabled || nextButton.disabled}
            sx={{ ml: 'auto' }}
          >
            {nextButton.getLabel?.(nextStep)}
          </Button>
        )}
        {!nextStep && !!finishButton && (
          <Button
            id="horizontal-stepper-finish-button"
            variant="contained"
            onClick={finishButton.onClick}
            disabled={disabled || finishButton.disabled}
            sx={{ ml: 'auto' }}
          >
            {finishButton.label}
          </Button>
        )}
      </Stack>
    </>
  );
};

export default HorizontalStepper;
