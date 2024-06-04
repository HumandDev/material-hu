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
import { createContext, useContext } from 'react';
import { Stack } from '@mui/material';
const TabPanelContext = createContext(0);
const useTab = () => {
    const context = useContext(TabPanelContext);
    if (context === undefined) {
        throw new Error('useTab must be used within a <TabPanel />');
    }
    return context;
};
export const TabPanel = ({ children, value }) => (_jsx(TabPanelContext.Provider, { value: value, children: children }));
export const TabPanelItem = (_a) => {
    var { children, index } = _a, other = __rest(_a, ["children", "index"]);
    const currentTab = useTab();
    return (_jsx(Stack, Object.assign({ role: "tabpanel", hidden: currentTab !== index, display: currentTab !== index ? 'none' : undefined, id: `tabpanel-${index}`, "aria-labelledby": `tab-${index}` }, other, { sx: Object.assign({ height: '100%', overflowY: 'auto' }, other.sx), children: currentTab === index && children })));
};
