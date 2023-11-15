var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Stepper, Step, StepLabel, Divider, Button, Stack, Box, Typography, Container, useTheme, alpha, } from '@mui/material';
import { Check } from '@mui/icons-material';
export const HorizontalStepper = (props) => {
    const { steps, activeStep = 0, disabled = false, finishButton, backButton, nextButton, stateLabels = {
        active: '',
        completed: '',
        pending: '',
    } } = props, stepperProps = __rest(props, ["steps", "activeStep", "disabled", "finishButton", "backButton", "nextButton", "stateLabels"]);
    const theme = useTheme();
    const validStep = (step) => (step >= 0 && step < steps.length);
    const getStepState = (step) => {
        if (!validStep(step))
            return null;
        if (step === activeStep)
            return stateLabels.active;
        if (step < activeStep)
            return stateLabels.completed;
        return stateLabels.pending;
    };
    const getStepIcon = (step) => {
        if (!validStep(step))
            return null;
        if (step < activeStep) {
            return (_jsx(Box, { className: "MuiStepIcon-root", children: _jsx(Check, {}) }));
        }
        return null;
    };
    const currentStep = validStep(activeStep) && steps[activeStep];
    const prevStep = validStep(activeStep - 1) && steps[activeStep - 1];
    const nextStep = validStep(activeStep + 1) && steps[activeStep + 1];
    return (_jsxs(_Fragment, { children: [_jsx(Stack, Object.assign({ component: Stepper, activeStep: activeStep, connector: null, flexDirection: "row", justifyContent: "space-around", alignItems: "center", spacing: 1, p: 3 }, stepperProps, { children: steps.map((step, index) => {
                    const { id, label, stepProps = {}, stepLabelProps = {}, } = step;
                    return (_jsx(Step, Object.assign({}, stepProps, { sx: {
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
                        }, children: _jsx(StepLabel, Object.assign({ icon: getStepIcon(index) }, stepLabelProps, { children: _jsxs(Stack, { children: [_jsx(Typography, { className: "state", variant: "body2", component: "span", children: getStepState(index) }), _jsx(Typography, { className: "label", variant: "h6", component: "span", children: label })] }) })) }), id));
                }) })), _jsx(Divider, {}), !!currentStep && (currentStep.content({ activeStep, id: currentStep.id })), _jsxs(Stack, { component: Container, maxWidth: "md", flexDirection: "row", py: 2, sx: { backgroundColor: 'background.default' }, children: [!!prevStep && !!backButton && (_jsx(Button, { id: "horizontal-stepper-back-button", onClick: backButton.onClick, disabled: disabled || backButton.disabled, children: backButton.getLabel && backButton.getLabel(prevStep) })), !!nextStep && !!nextButton && (_jsx(Button, { id: "horizontal-stepper-next-button", variant: "contained", onClick: nextButton.onClick, disabled: disabled || nextButton.disabled, sx: { ml: 'auto' }, children: nextButton.getLabel && nextButton.getLabel(nextStep) })), !nextStep && !!finishButton && (_jsx(Button, { id: "horizontal-stepper-finish-button", variant: "contained", onClick: finishButton.onClick, disabled: disabled || finishButton.disabled, sx: { ml: 'auto' }, children: finishButton.label }))] })] }));
};
export default HorizontalStepper;
