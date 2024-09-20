import { TabsProps } from '@mui/material';
type Props = Pick<TabsProps, 'sx' | 'defaultValue'> & {
    tabs?: {
        label: string;
    }[];
    onTabChange?: (value: string) => void;
};
declare const Tabs: ({ tabs, sx, onTabChange, defaultValue }: Props) => import("react/jsx-runtime").JSX.Element;
export default Tabs;
