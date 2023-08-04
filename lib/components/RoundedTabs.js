import { jsx as _jsx } from "react/jsx-runtime";
import { Box, Tab, Tabs, Typography, alpha } from '@mui/material';
const RoundedTabs = ({ tabs, tabIndex, onChange }) => (_jsx(Box, { sx: { mt: 2, width: '100%', border: '1px solid', borderColor: 'primary.main', borderRadius: '12px', height: '36px' }, children: _jsx(Tabs, { value: tabIndex, onChange: (event, value) => onChange(event, value), TabIndicatorProps: { sx: { width: '500px', backgroundColor: 'transparent', minHeight: '30px', height: '30px' } }, textColor: "primary", variant: "fullWidth", children: tabs.map((tab, index) => (_jsx(Tab, { label: (_jsx(Typography, { sx: { fontWeight: 'bold', fontSize: '13px', color: 'primary' }, children: tab.label })), sx: {
                minHeight: '35px',
                height: '35px',
                borderRight: index === tabs.length - 1 ? 'none' : '1px solid',
                marginLeft: '0 !important',
                borderColor: 'primary.main',
                bgcolor: (theme) => (tabIndex === index ? alpha(theme.palette.primary.main, 0.1) : 'transparent')
            } }, tab.label))) }) }));
export default RoundedTabs;
