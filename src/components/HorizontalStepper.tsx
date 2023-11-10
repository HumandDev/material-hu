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
  content: (info: { id: string, activeStep: number }) => ReactNode;
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

export const HorizontalStepper: FC<HorizontalStepperProps> = (props) => {
  const {
    steps,
    activeStep = 0,
    disabled = false,
    onNext = () => null,
    disabledNext = false,
    onBack = () => null,
    disabledBack = false,
    onFinish = () => null,
    disabledFinish = false,
    getStepStateLabel = () => null,
    getBackLabel = () => null,
    getNextLabel = () => null,
    finishLabel = null,
    ...stepperProps
  } = props;

  const theme = useTheme();

  const validStep = (step: number) => (step >= 0 && step < steps.length);

  const getStepState = (step: number) => {
    if (!validStep(step)) return null;
    return getStepStateLabel(step);
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
          const {
            id,
            label,
            stepProps = {},
            stepLabelProps = {},
          } = step;

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
      {!!currentStep && (
        currentStep.content({ activeStep, id: currentStep.id })
      )}
      <Stack
        component={Container}
        maxWidth="md"
        flexDirection="row"
        py={2}
        sx={{ backgroundColod: 'background.default' }}
      >
        {!!prevStep && (
          <Button
            id="horizontal-stepper-back-button"
            onClick={onBack}
            disabled={disabled || disabledBack}
          >
            {getBackLabel(prevStep)}
          </Button>
        )}
        {!!nextStep && (
          <Button
            id="horizontal-stepper-next-button"
            variant="contained"
            onClick={onNext}
            disabled={disabled || disabledNext}
            sx={{ ml: 'auto' }}
          >
            {getNextLabel(nextStep)}
          </Button>
        )}
        {!nextStep && (
          <Button
            id="horizontal-stepper-finish-button"
            variant="contained"
            onClick={onFinish}
            disabled={disabled || disabledFinish}
            sx={{ ml: 'auto' }}
          >
            {finishLabel}
          </Button>
        )}
      </Stack>
    </>
  );
};

export default HorizontalStepper;
