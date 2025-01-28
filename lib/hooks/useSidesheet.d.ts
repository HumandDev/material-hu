import { FC } from 'react';
import { DrawerProps } from '../components/Drawer/Drawer';
declare function useSidesheet<T>(DrawerContentComponent: FC<T>, drawerProps?: Partial<DrawerProps & {
    drawerWidth: number;
}>, extraProps?: Partial<T>): {
    containerStyles: {
        display: string;
        height: string;
        marginRight: string;
    };
    drawer: import("react/jsx-runtime").JSX.Element;
    closeDrawer: () => void;
    showDrawer: (props?: Partial<T>) => void;
};
export { useSidesheet };
