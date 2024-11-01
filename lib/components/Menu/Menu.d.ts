import { ReactNode } from 'react';
import { MenuProps as MuiMenuProps } from '@mui/material';
export type MenuProps = Pick<MuiMenuProps, 'id' | 'anchorEl' | 'open' | 'onClose' | 'children' | 'sx'> & {
    'aria-labelledby': string;
    footer?: ReactNode;
    header?: ReactNode;
    width?: number;
    height?: number;
};
export declare const Menu: ({ id, anchorEl, open, onClose, children, sx, "aria-labelledby": labelledby, footer, header, width, height, }: MenuProps) => import("react/jsx-runtime").JSX.Element;
export default Menu;
