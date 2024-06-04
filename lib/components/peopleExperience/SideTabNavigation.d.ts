import { ReactNode } from 'react';
import { Key } from 'react-hook-form/dist/types/path/common';
export type Tab = {
    id: Key;
    title: string;
    element: ReactNode;
};
type TabSidebarProps = {
    title: string;
    selectedIndex: number;
    onChangeIndex: (nextIndex: number) => void;
    tabs: Tab[];
};
declare const TabSidebar: ({ selectedIndex, onChangeIndex, tabs, title, }: TabSidebarProps) => import("react/jsx-runtime").JSX.Element;
export default TabSidebar;
