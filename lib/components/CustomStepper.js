import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Step, StepConnector, StepContent, StepLabel, Stepper } from '@mui/material';
import { Check as CheckIcon } from '@mui/icons-material';
const CUSTOM_STEP_ICON_SIZE = 24;
const CustomStepIcon = ({ active, completed }) => (_jsx(Box, { sx: {
        borderRadius: 3,
        width: CUSTOM_STEP_ICON_SIZE,
        height: CUSTOM_STEP_ICON_SIZE,
        border: '2px solid',
        borderColor: active || completed ? 'primary.main' : 'text.disabled',
        backgroundColor: completed ? 'primary.main' : 'none',
        mr: 3
    }, children: completed && (_jsx(CheckIcon, { sx: { color: 'primary.contrastText' }, fontSize: "small" })) }));
const CustomStepConnector = () => (_jsx(StepConnector, { sx: { '.MuiStepConnector-line': { borderColor: 'transparent' } } }));
const CustomStepper = ({ steps, stepperProps, onStepClick }) => (_jsx(Stepper, Object.assign({ connector: _jsx(CustomStepConnector, {}), orientation: "vertical", nonLinear: !!onStepClick }, stepperProps, { children: steps.map((step, index) => (_jsxs(Step, { completed: step.completed, onClick: () => (onStepClick ? onStepClick(index) : null), sx: { cursor: onStepClick ? 'pointer' : 'default' }, children: [_jsx(StepLabel, { StepIconComponent: CustomStepIcon, children: step.label }), step.content && _jsx(StepContent, { children: step.content })] }, step.label))) })));
export default CustomStepper;
