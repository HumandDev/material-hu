import { ReactNode } from 'react';
import { StackProps } from '@mui/material';
type ResultContainerProps = {
    title: string;
    subtitle?: string;
    children: ReactNode;
    actions?: ReactNode;
    sx?: StackProps['sx'];
};
declare const ResultContainer: ({ title, children, subtitle, actions, sx, }: ResultContainerProps) => import("react/jsx-runtime").JSX.Element;
export default ResultContainer;
