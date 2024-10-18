import { jsx as _jsx } from "react/jsx-runtime";
import { Button, ButtonGroup as MUIButtonGroup, useTheme } from '@mui/material';
import { IconCheck } from '@tabler/icons-react';
import { useState } from 'react';
const ButtonGroup = ({ labels, onChange }) => {
    const [selectedButton, setSelectedButton] = useState(0);
    const buttonSelection = (index) => {
        setSelectedButton(prevSelected => (prevSelected === index ? null : index));
        onChange === null || onChange === void 0 ? void 0 : onChange(index);
    };
    const { palette: { base }, } = useTheme();
    return (_jsx(MUIButtonGroup, { variant: "outlined", children: labels.map((label, index) => (_jsx(Button, { onClick: () => buttonSelection(index), sx: {
                backgroundColor: selectedButton === index ? base === null || base === void 0 ? void 0 : base.blueBrand[100] : 'none',
                borderColor: base === null || base === void 0 ? void 0 : base.blueBrand[200],
                borderWidth: 1,
                py: 1,
                px: 1.5,
            }, startIcon: selectedButton === index ? _jsx(IconCheck, { size: 16 }) : null, children: label }, index))) }));
};
export default ButtonGroup;
