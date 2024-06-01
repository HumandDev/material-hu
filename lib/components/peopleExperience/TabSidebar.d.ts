import { Key } from 'react-hook-form/dist/types/path/common';
export type Tab = {
    id: Key;
    title: string;
};
type TabSidebarProps = {
    selectedIndex: number;
    onChangeIndex: (nextIndex: number) => void;
    tabs: Tab[];
};
declare const TabSidebar: ({ selectedIndex, onChangeIndex, tabs, }: TabSidebarProps) => import("react/jsx-runtime").JSX.Element;
export default TabSidebar;
