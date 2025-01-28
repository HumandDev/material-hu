import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo } from 'react';
import Drawer from '../components/Drawer/Drawer';
function useSidesheet(DrawerContentComponent, drawerProps, extraProps) {
    const [open, setOpen] = useState(false);
    const closeDrawer = () => setOpen(false);
    const [drawerContentProps, setDrawerContentProps] = useState();
    const drawerWidth = (drawerProps === null || drawerProps === void 0 ? void 0 : drawerProps.drawerWidth) || 200;
    const containerStyles = useMemo(() => ({
        display: 'flex',
        height: '100%',
        marginRight: open ? `${drawerWidth}px` : '0px',
    }), [open, drawerWidth]);
    return {
        containerStyles,
        drawer: (_jsxs(_Fragment, { children: [open && (_jsx("div", { onClick: closeDrawer, style: {
                        top: 0,
                        left: 0,
                        zIndex: 999,
                        width: '100vw',
                        height: '100vh',
                        position: 'fixed',
                        background: 'transparent',
                    } })), _jsx(Drawer, Object.assign({ open: open, variant: "persistent", onClose: () => closeDrawer(), PaperProps: { sx: { width: drawerWidth, mt: 8 } } }, drawerProps, { children: _jsx(DrawerContentComponent, Object.assign({ onClose: closeDrawer }, drawerContentProps, extraProps)) }))] })),
        closeDrawer,
        showDrawer: (props = {}) => {
            setDrawerContentProps(props);
            setOpen(true);
        },
    };
}
export { useSidesheet };
