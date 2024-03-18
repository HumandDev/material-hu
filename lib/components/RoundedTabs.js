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
import { jsx as _jsx } from "react/jsx-runtime";
import { Box, Tab, Tabs, Typography, alpha } from '@mui/material';
const RoundedTabs = (_a) => {
    var { tabs, tabIndex, disabled = false } = _a, tabsProps = __rest(_a, ["tabs", "tabIndex", "disabled"]);
    return (_jsx(Box, { sx: {
            mt: 2,
            width: '100%',
            border: '1px solid',
            borderColor: disabled ? '#11192761' : 'primary.main',
            borderRadius: '12px',
            height: '37px',
        }, children: _jsx(Tabs, Object.assign({ value: tabIndex, textColor: "primary", variant: "fullWidth" }, tabsProps, { sx: Object.assign({ minHeight: '37px', '& .MuiTabs-indicator': {
                    width: '500px',
                    backgroundColor: 'transparent',
                    minHeight: '30px',
                    height: '30px',
                } }, tabsProps.sx), children: tabs.map((tab, index) => (_jsx(Tab, { label: _jsx(Typography, { sx: { fontWeight: 'bold', fontSize: '13px', color: 'primary' }, children: tab.label }), disabled: disabled, sx: {
                    minHeight: '35px',
                    height: '35px',
                    borderRight: index === tabs.length - 1 ? 'none' : '1px solid',
                    borderRadius: () => {
                        if (index === 0)
                            return '12px 0px 0px 12px';
                        if (index === tabs.length - 1)
                            return '0px 12px 12px 0px';
                        return '0px';
                    },
                    marginLeft: '0 !important',
                    borderColor: disabled ? '#11192761' : 'primary.main',
                    bgcolor: theme => {
                        if (tabIndex === index) {
                            if (disabled)
                                return '#F8F9FA';
                            return alpha(theme.palette.primary.main, 0.1);
                        }
                        return 'transparent';
                    },
                } }, tab.label))) })) }));
};
export default RoundedTabs;
