import { ComponentType, ReactNode } from 'react';
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
    layout?: ComponentType<{
        children: ReactNode;
    }>;
};
declare const SideTabNavigation: ({ selectedIndex, onChangeIndex, tabs, title, layout: Layout, }: TabSidebarProps) => import("react/jsx-runtime").JSX.Element;
export default SideTabNavigation;
