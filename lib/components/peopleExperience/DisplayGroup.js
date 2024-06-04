import { jsx as _jsx } from "react/jsx-runtime";
import { Stack } from '@mui/material';
import { Fragment } from 'react';
const DisplayGroup = ({ items, renderItem, }) => (_jsx(Stack, { sx: { flexDirection: 'row', width: '100%' }, children: items.map((item, index) => {
        return _jsx(Fragment, { children: renderItem(item, index) }, item.id);
    }) }));
export default DisplayGroup;
