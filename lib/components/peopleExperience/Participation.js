import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { IconChevronUp as ExpandLessIcon, IconChevronDown as ExpandMoreIcon, } from '@tabler/icons-react';
import { ListItem, ListItemButton, ListItemText, Skeleton, Stack, Typography, } from '@mui/material';
import LinearProgressWithLabel from './LinearProgressWithLabel';
export const ParticipationItemSkeleton = () => (_jsxs(Stack, { sx: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 2,
        py: 1,
    }, children: [_jsx(Skeleton, { variant: "text", width: 200, height: 16 }), _jsxs(Stack, { sx: { alignItems: 'flex-end' }, children: [_jsx(Skeleton, { variant: "text", width: 130, height: 14 }), _jsx(Skeleton, { variant: "text", width: 100, height: 12 })] })] }));
const Misc = ({ total, partial, noDataMessage, label }) => {
    if (total === 0) {
        return (_jsx(Typography, { variant: "body1", color: "secondary", children: noDataMessage }));
    }
    return (_jsxs(Stack, { sx: { minWidth: '130px', alignItems: 'flex-end' }, children: [_jsx(LinearProgressWithLabel, { value: total ? partial / total : 0, sx: { flexDirection: 'row' } }), _jsx(Typography, { variant: "body2", color: "secondary", children: label })] }));
};
export const ParticipationItem = ({ primary, secondary, partial, total, slotProps, }) => (_jsxs(ListItem, { children: [_jsx(ListItemText, { primary: primary, secondary: secondary }), _jsx(Misc, Object.assign({ partial: partial, total: total }, slotProps.misc))] }));
export const ParticipationExpandableItem = ({ children, primary, secondary, partial, total, slotProps, }) => {
    const [expanded, setExpanded] = useState(false);
    const handleToggle = () => setExpanded(prev => !prev);
    return (_jsxs(_Fragment, { children: [_jsxs(ListItemButton, { sx: { gap: 2 }, onClick: handleToggle, children: [_jsxs(Stack, { sx: {
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: 2,
                            flex: 1,
                        }, children: [_jsx(ListItemText, { primary: primary, secondary: secondary, sx: { flexGrow: 0 } }), expanded ? _jsx(ExpandLessIcon, {}) : _jsx(ExpandMoreIcon, {})] }), _jsx(Misc, Object.assign({ partial: partial, total: total }, slotProps.misc))] }), children(expanded)] }));
};
