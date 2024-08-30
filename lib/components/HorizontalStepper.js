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
import { Stepper, Step, StepLabel, StepButton, Divider, Button, Stack, Box, Typography, IconButton, Tooltip, Container, useTheme, alpha, } from '@mui/material';
import { IconCheck as CheckIcon, IconX as CloseIcon, } from '@tabler/icons-react';
export const HorizontalStepper = props => {
    var _a, _b;
    const { steps, activeStep = 0, disabled = false, clickable = false, nonLinear = false, onSelectStep = () => null, onClose, closeLabel, title, titleRightComponent, actions, finishButton, backButton, nextButton, stateLabels = {
        active: '',
        completed: '',
        pending: '',
    } } = props, stepperProps = __rest(props, ["steps", "activeStep", "disabled", "clickable", "nonLinear", "onSelectStep", "onClose", "closeLabel", "title", "titleRightComponent", "actions", "finishButton", "backButton", "nextButton", "stateLabels"]);
    const theme = useTheme();
    const validStep = (step) => step >= 0 && step < steps.length;
    const getStepState = (step, completed) => {
        if (!validStep(step))
            return null;
        if (step === activeStep)
            return stateLabels.active;
        if (nonLinear ? completed : step < activeStep)
            return stateLabels.completed;
        return stateLabels.pending;
    };
    const getStepIcon = (step, completed) => {
        if (!validStep(step))
            return null;
        if (step === activeStep)
            return null;
        if (nonLinear ? completed : step < activeStep) {
            return (_jsx(Box, { className: "MuiStepIcon-root", children: _jsx(CheckIcon, {}) }));
        }
        return null;
    };
    const handleSelectStep = (step) => () => onSelectStep(step);
    const currentStep = validStep(activeStep) && steps[activeStep];
    const prevStep = validStep(activeStep - 1) && steps[activeStep - 1];
    const nextStep = validStep(activeStep + 1) && steps[activeStep + 1];
    return (_jsxs(_Fragment, { children: [_jsxs(Stack, { sx: {
                    position: 'relative',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 1,
                    py: 2,
                    px: 3,
                    width: '100%',
                }, children: [(title || titleRightComponent || onClose) && (_jsxs(Stack, { sx: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            gap: 2,
                            position: 'absolute',
                            left: theme.spacing(3),
                        }, children: [onClose && (_jsx(Tooltip, { title: closeLabel, children: _jsx(IconButton, { onClick: onClose, "aria-label": closeLabel, children: _jsx(CloseIcon, { fontSize: "small" }) }) })), title && (_jsx(Typography, { variant: "h5", sx: {
                                    [theme.breakpoints.down('xl')]: {
                                        display: 'none',
                                    },
                                }, children: title })), _jsx(Stack, { sx: {
                                    [theme.breakpoints.down('xl')]: {
                                        display: 'none',
                                    },
                                }, children: titleRightComponent })] })), _jsx(Stack, Object.assign({ component: Stepper, activeStep: activeStep, connector: null, nonLinear: nonLinear, sx: Object.assign({ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 7 }, stepperProps === null || stepperProps === void 0 ? void 0 : stepperProps.sx) }, stepperProps, { children: steps.map((step, index) => {
                            const { id, label, completed, disabled: stepDisabled, stepProps = {}, stepLabelProps = {}, stepButtonProps = {}, } = step;
                            const labelComponent = (_jsxs(_Fragment, { children: [_jsx(Typography, { className: "state", variant: "caption", component: "span", children: getStepState(index, completed) }), _jsx(Typography, { className: "label", variant: "subtitle2", component: "span", children: label })] }));
                            return (_jsxs(Step, Object.assign({ completed: index !== activeStep && completed }, stepProps, { sx: {
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
                                }, children: [clickable && (_jsx(StepButton, Object.assign({ icon: getStepIcon(index, completed), disabled: disabled || stepDisabled, onClick: handleSelectStep(index) }, stepButtonProps, { children: labelComponent }))), !clickable && (_jsx(StepLabel, Object.assign({ icon: getStepIcon(index, completed) }, stepLabelProps, { children: labelComponent })))] }), id));
                        }) })), actions && (_jsx(Stack, { sx: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            gap: 2,
                            position: 'absolute',
                            right: theme.spacing(3),
                        }, children: actions }))] }), _jsx(Divider, {}), !!currentStep && currentStep.content({ activeStep, id: currentStep.id }), _jsxs(Stack, { component: Container, maxWidth: "md", flexDirection: "row", py: 2, sx: { backgroundColor: 'background.default' }, children: [!!prevStep && !!backButton && (_jsx(Button, { id: "horizontal-stepper-back-button", onClick: backButton.onClick, disabled: disabled || backButton.disabled, children: (_a = backButton.getLabel) === null || _a === void 0 ? void 0 : _a.call(backButton, prevStep) })), !!nextStep && !!nextButton && (_jsx(Button, { id: "horizontal-stepper-next-button", variant: "contained", onClick: nextButton.onClick, disabled: disabled || nextButton.disabled, sx: { ml: 'auto' }, children: (_b = nextButton.getLabel) === null || _b === void 0 ? void 0 : _b.call(nextButton, nextStep) })), !nextStep && !!finishButton && (_jsx(Button, { id: "horizontal-stepper-finish-button", variant: "contained", onClick: finishButton.onClick, disabled: disabled || finishButton.disabled, sx: { ml: 'auto' }, children: finishButton.label }))] })] }));
};
export default HorizontalStepper;
