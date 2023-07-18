import * as React from 'react';
type Props = {
    options: {
        onClick: (e?: any) => void;
        label: string;
        icon?: React.ReactNode;
        divider?: boolean;
    }[];
};
declare const IconsMenu: ({ options }: Props) => import("react/jsx-runtime").JSX.Element;
export default IconsMenu;
