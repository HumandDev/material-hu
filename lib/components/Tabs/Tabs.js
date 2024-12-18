import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tabs as MuiTabs, Tab, Divider, Stack, Typography, } from '@mui/material';
import { useState } from 'react';
const Tabs = ({ tabs, sx, onTabChange, defaultValue, value }) => {
    var _a;
    const [currentTab, setCurrentTab] = useState(defaultValue || ((_a = tabs === null || tabs === void 0 ? void 0 : tabs[0]) === null || _a === void 0 ? void 0 : _a.value));
    return (_jsxs(Stack, { sx: sx, children: [_jsx(MuiTabs, { sx: {
                    '.MuiTabs-indicator': {
                        backgroundColor: theme => { var _a; return (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.blueBrand[400]; },
                        borderRadius: '4px 4px 0px 0px',
                    },
                }, value: value || currentTab, onChange: (e, v) => {
                    onTabChange === null || onTabChange === void 0 ? void 0 : onTabChange(v, tabs.findIndex(tab => tab.value === v));
                    setCurrentTab(v);
                }, children: tabs === null || tabs === void 0 ? void 0 : tabs.map(tab => (_jsx(Tab, { label: _jsx(Typography, { variant: "globalXS", fontWeight: 'fontWeightSemiBold', children: tab.label }), value: tab.value, sx: {
                        px: 1,
                        minWidth: 0,
                        textTransform: 'none',
                        color: theme => { var _a; return (_a = theme.palette.textColors) === null || _a === void 0 ? void 0 : _a.neutralText; },
                        '&.Mui-selected': {
                            color: theme => { var _a; return (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.blueBrand[400]; },
                        },
                    } }, tab.value))) }), _jsx(Divider, {})] }));
};
export default Tabs;
