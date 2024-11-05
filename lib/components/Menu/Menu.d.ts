import { ReactNode } from 'react';
import { MenuProps as MuiMenuProps } from '@mui/material';
export type MenuProps = Pick<MuiMenuProps, 'id' | 'anchorEl' | 'open' | 'onClose' | 'children' | 'sx'> & {
    'aria-labelledby'?: string;
    footer?: ReactNode;
    position?: 'left' | 'right' | 'center';
    fixedDimensions?: boolean;
};
export declare const Menu: ({ id, anchorEl, open, onClose, children, sx, position, fixedDimensions, "aria-labelledby": labelledby, footer, }: MenuProps) => import("react/jsx-runtime").JSX.Element;
export default Menu;
