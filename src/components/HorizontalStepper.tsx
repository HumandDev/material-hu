import { FC, ReactNode } from 'react';
import {
  Stepper,
  StepperProps,
  Step,
  StepProps,
  StepLabel,
  StepLabelProps,
  StepButton,
  StepButtonProps,
  Divider,
  Button,
  Stack,
  Box,
  Typography,
  IconButton,
  Tooltip,
  Container,
  useTheme,
  alpha,
} from '@mui/material';
import { Check, Close } from '@mui/icons-material';

export type StepType = {
  id: string;
  label: string;
  content: (info: { id: string; activeStep: number }) => ReactNode;
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
  titleRightComponent?: ReactNode;
  actions?: ReactNode;
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
    clickable = false,
    nonLinear = false,
    onSelectStep = () => null,
    onClose,
    closeLabel,
    title,
    titleRightComponent,
    actions,
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

  const getStepState = (step: number, completed?: boolean) => {
    if (!validStep(step)) return null;

    if (step === activeStep) return stateLabels.active;
    if (nonLinear ? completed : step < activeStep) return stateLabels.completed;
    return stateLabels.pending;
  };

  const getStepIcon = (step: number, completed?: boolean) => {
    if (!validStep(step)) return null;

    if (step === activeStep) return null;

    if (nonLinear ? completed : step < activeStep) {
      return (
        <Box className="MuiStepIcon-root">
          <Check />
        </Box>
      );
    }

    return null;
  };
  const handleSelectStep = (step: number) => () => onSelectStep(step);

  const currentStep = validStep(activeStep) && steps[activeStep];
  const prevStep = validStep(activeStep - 1) && steps[activeStep - 1];
  const nextStep = validStep(activeStep + 1) && steps[activeStep + 1];

  return (
    <>
      <Stack
        sx={{
          position: 'relative',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
          py: 2,
          px: 3,
          width: '100%',
        }}
      >
        {(title || titleRightComponent || onClose) && (
          <Stack
            sx={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: 2,
              position: 'absolute',
              left: theme.spacing(3),
            }}
          >
            {onClose && (
              <Tooltip title={closeLabel}>
                <IconButton
                  onClick={onClose}
                  aria-label={closeLabel}
                >
                  <Close fontSize="small" />
                </IconButton>
              </Tooltip>
            )}
            {title && (
              <Typography
                variant="h5"
                sx={{
                  [theme.breakpoints.down('xl')]: {
                    display: 'none',
                  },
                }}
              >
                {title}
              </Typography>
            )}
            <Stack
              sx={{
                [theme.breakpoints.down('xl')]: {
                  display: 'none',
                },
              }}
            >
              {titleRightComponent}
            </Stack>
          </Stack>
        )}
        <Stack
          component={Stepper}
          activeStep={activeStep}
          connector={null}
          nonLinear={nonLinear}
          sx={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 7,
            ...stepperProps?.sx,
          }}
          {...stepperProps}
        >
          {steps.map((step, index) => {
            const {
              id,
              label,
              completed,
              disabled: stepDisabled,
              stepProps = {},
              stepLabelProps = {},
              stepButtonProps = {},
            } = step;

            const labelComponent = (
              <>
                <Typography
                  className="state"
                  variant="caption"
                  component="span"
                >
                  {getStepState(index, completed)}
                </Typography>
                <Typography
                  className="label"
                  variant="subtitle2"
                  component="span"
                >
                  {label}
                </Typography>
              </>
            );

            return (
              <Step
                key={id}
                completed={index !== activeStep && completed}
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
                    '& .MuiStepLabel-label': {
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                    },
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
                    color: theme.palette.text.secondary,
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
                  [theme.breakpoints.down('lg')]: {
                    '& .MuiStepIcon-root': {
                      display: 'none',
                    },
                  },
                }}
              >
                {clickable && (
                  <StepButton
                    icon={getStepIcon(index, completed)}
                    disabled={disabled || stepDisabled}
                    onClick={handleSelectStep(index)}
                    {...stepButtonProps}
                  >
                    {labelComponent}
                  </StepButton>
                )}
                {!clickable && (
                  <StepLabel
                    icon={getStepIcon(index, completed)}
                    {...stepLabelProps}
                  >
                    {labelComponent}
                  </StepLabel>
                )}
              </Step>
            );
          })}
        </Stack>
        {actions && (
          <Stack
            sx={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: 2,
              position: 'absolute',
              right: theme.spacing(3),
            }}
          >
            {actions}
          </Stack>
        )}
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
