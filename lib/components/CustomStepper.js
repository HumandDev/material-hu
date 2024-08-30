import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, ListItemButton, Step, StepConnector, StepContent, StepLabel, Stepper, Typography, } from '@mui/material';
import { IconCheck as CheckIcon } from '@tabler/icons-react';
const CUSTOM_STEP_ICON_SIZE = 24;
const CustomStepIcon = ({ active, completed }) => (_jsx(Box, { sx: {
        borderRadius: 3,
        width: CUSTOM_STEP_ICON_SIZE,
        height: CUSTOM_STEP_ICON_SIZE,
        border: '2px solid',
        borderColor: active || completed ? 'primary.main' : 'text.disabled',
        backgroundColor: completed ? 'primary.main' : 'none',
        mr: 3,
    }, children: completed && _jsx(CheckIcon, { fontSize: "small" }) }));
const CustomStepConnector = () => (_jsx(StepConnector, { sx: { '.MuiStepConnector-line': { borderColor: 'transparent' } } }));
const CustomStepper = ({ steps, stepperProps, onStepClick, activeSubstep, }) => (_jsx(Stepper, Object.assign({ connector: _jsx(CustomStepConnector, {}), orientation: "vertical", nonLinear: !!onStepClick }, stepperProps, { children: steps.map((step, index) => (_jsxs(Step, { completed: step.completed, expanded: step.expanded, onClick: () => (onStepClick ? onStepClick(index) : null), sx: { cursor: onStepClick ? 'pointer' : 'default' }, children: [_jsx(StepLabel, { StepIconComponent: CustomStepIcon, children: step.label }), step.content && _jsx(StepContent, { children: step.content }), step.substeps &&
                (stepperProps === null || stepperProps === void 0 ? void 0 : stepperProps.activeStep) === index &&
                step.substeps.map((sub, i) => (_jsxs(ListItemButton, { sx: { pl: 1 }, children: [_jsx("p", { style: {
                                visibility: activeSubstep === i ? 'inherit' : 'hidden',
                                fontSize: '16px',
                                marginRight: '42px',
                                color: 'primary',
                            }, children: "\u2022" }), _jsx(Typography, { variant: "body2", color: activeSubstep === i ? 'text.primary' : 'text.secondary', children: sub.label })] }, sub.label)))] }, step.label))) })));
export default CustomStepper;
