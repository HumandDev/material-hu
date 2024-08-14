import { ComponentType, ReactNode } from 'react';
import { StackProps } from '@mui/material';
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
    slotProps?: Partial<{
        tabs: StackProps;
    }>;
};
declare const SideTabNavigation: ({ selectedIndex, onChangeIndex, tabs, title, layout: Layout, slotProps, }: TabSidebarProps) => import("react/jsx-runtime").JSX.Element;
export default SideTabNavigation;
