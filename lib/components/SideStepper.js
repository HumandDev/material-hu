import { jsx as _jsx } from "react/jsx-runtime";
import { Card, CardContent } from '@mui/material';
import CustomStepper from './CustomStepper';
const SiteStepper = (props) => (_jsx(Card, { variant: "outlined", elevation: 0, sx: { width: '20%', alignSelf: 'flex-start', pr: 0 }, children: _jsx(CardContent, { children: _jsx(CustomStepper, Object.assign({}, props)) }) }));
export default SiteStepper;
