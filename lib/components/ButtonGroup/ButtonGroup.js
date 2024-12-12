import { jsx as _jsx } from "react/jsx-runtime";
import { Button, ButtonGroup as MUIButtonGroup, useTheme } from '@mui/material';
import { IconCheck } from '@tabler/icons-react';
import { useState } from 'react';
const ButtonGroup = ({ labels, onChange, fullWidth = false, disableUnselect = false, fixedCheck = false, }) => {
    const [selectedButton, setSelectedButton] = useState(0);
    const buttonSelection = (index) => {
        const newIndex = selectedButton === index ? null : index;
        const newSelected = disableUnselect ? index : newIndex;
        setSelectedButton(newSelected);
        // Execute onChange if its enabled Unselect or if its a different button
        if (!disableUnselect ||
            (disableUnselect && newSelected !== selectedButton)) {
            onChange === null || onChange === void 0 ? void 0 : onChange(index);
        }
    };
    const { palette: { base }, } = useTheme();
    const noIcon = fixedCheck ? (_jsx(IconCheck, { size: 16, style: { stroke: 'transparent' } })) : null;
    return (_jsx(MUIButtonGroup, { variant: "outlined", sx: { display: 'flex', width: fullWidth ? '100%' : 'auto' }, children: labels.map((label, index) => (_jsx(Button, { onClick: () => buttonSelection(index), sx: {
                backgroundColor: selectedButton === index ? base === null || base === void 0 ? void 0 : base.blueBrand[100] : 'none',
                borderColor: base === null || base === void 0 ? void 0 : base.blueBrand[200],
                borderWidth: 1,
                py: 1,
                px: 1.5,
                flexGrow: fullWidth ? 1 : 'initial',
                flexBasis: fullWidth ? 1 : 'auto',
                textTransform: 'none',
            }, startIcon: selectedButton === index ? _jsx(IconCheck, { size: 16 }) : noIcon, endIcon: noIcon, children: label }, index))) }));
};
export default ButtonGroup;
