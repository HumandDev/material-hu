import { ReactNode } from 'react';
import { MenuProps as MuiMenuProps } from '@mui/material';
export type MenuProps = Pick<MuiMenuProps, 'id' | 'anchorEl' | 'open' | 'onClose' | 'children' | 'sx'> & {
    'aria-labelledby': string;
    footer?: ReactNode;
};
export declare const Menu: ({ id, anchorEl, open, onClose, children, sx, "aria-labelledby": labelledby, footer, }: MenuProps) => import("react/jsx-runtime").JSX.Element;
export default Menu;
