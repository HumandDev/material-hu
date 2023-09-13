import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Step, StepConnector, StepContent, StepLabel, Stepper } from '@mui/material';
const CUSTOM_STEP_ICON_SIZE = 24;
const CustomStepIcon = ({ active }) => (_jsx(Box, { sx: {
        borderRadius: 3,
        width: CUSTOM_STEP_ICON_SIZE,
        height: CUSTOM_STEP_ICON_SIZE,
        border: '2px solid',
        borderColor: active ? 'primary.main' : 'text.disabled',
        mr: 3
    } }));
const CustomStepConnector = () => (_jsx(StepConnector, { sx: { '.MuiStepConnector-line': { borderColor: 'transparent' } } }));
const CustomStepper = ({ steps, stepperProps }) => (_jsx(Stepper, Object.assign({ connector: _jsx(CustomStepConnector, {}) }, stepperProps, { children: steps.map((step) => (_jsxs(Step, { children: [_jsx(StepLabel, { StepIconComponent: CustomStepIcon, children: step.label }), step.content && _jsx(StepContent, { children: step.content })] }, step.label))) })));
export default CustomStepper;
