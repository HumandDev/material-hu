import { FC, MouseEvent } from 'react';
import { SxProps } from '@mui/material';
export type Option = {
    onClick: () => void;
    label: string;
    icon?: React.ReactNode;
    divider?: boolean;
    textProps?: SxProps;
    color?: string;
    disabled?: boolean;
    arrow?: boolean;
};
export type IconsMenuProps = {
    options: Option[];
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    onClose?: (event: MouseEvent) => void;
    disabled?: boolean;
    arrow?: boolean;
};
export declare const IconsMenu: FC<IconsMenuProps>;
export default IconsMenu;
