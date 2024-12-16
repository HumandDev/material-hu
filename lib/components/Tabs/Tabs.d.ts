import { TabsProps } from '@mui/material';
type Props = Pick<TabsProps, 'sx' | 'defaultValue' | 'value'> & {
    tabs: {
        label: string;
        value: string;
    }[];
    onTabChange?: (value: string, index: number) => void;
};
declare const Tabs: ({ tabs, sx, onTabChange, defaultValue, value }: Props) => import("react/jsx-runtime").JSX.Element;
export default Tabs;
