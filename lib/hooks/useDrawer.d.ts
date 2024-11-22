import { FC } from 'react';
import { DrawerProps } from '../components/Drawer/Drawer';
declare function useDrawer<T>(DrawerContentComponent: FC<T>, drawerProps?: Partial<DrawerProps>, extraProps?: Partial<T>): {
    drawer: import("react/jsx-runtime").JSX.Element;
    closeDrawer: () => void;
    showDrawer: (props?: Partial<T>) => void;
};
export { useDrawer };
