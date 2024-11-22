import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import Drawer from '../components/Drawer/Drawer';
function useDrawer(DrawerContentComponent, drawerProps, extraProps) {
    const [open, setOpen] = useState(false);
    const closeDrawer = () => setOpen(false);
    const [drawerContentProps, setDrawerContentProps] = useState();
    return {
        drawer: (_jsx(Drawer, Object.assign({ open: open, onClose: closeDrawer }, drawerProps, { children: _jsx(DrawerContentComponent, Object.assign({ onClose: closeDrawer }, drawerContentProps, extraProps)) }))),
        closeDrawer,
        showDrawer: (props = {}) => {
            setDrawerContentProps(props);
            setOpen(true);
        },
    };
}
export { useDrawer };
