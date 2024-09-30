import { TabsProps } from '@mui/material';
type Props = Pick<TabsProps, 'sx' | 'defaultValue'> & {
    tabs: {
        label: string;
        value: string;
    }[];
    onTabChange?: (value: string, index: number) => void;
};
declare const Tabs: ({ tabs, sx, onTabChange, defaultValue }: Props) => import("react/jsx-runtime").JSX.Element;
export default Tabs;
