import * as React from 'react';
import { SxProps } from '@mui/material';
type Props = {
    options: {
        onClick: () => void;
        label: string;
        icon?: React.ReactNode;
        divider?: boolean;
        textProps?: SxProps;
        color?: string;
    }[];
};
declare const IconsMenu: ({ options }: Props) => import("react/jsx-runtime").JSX.Element;
export default IconsMenu;
