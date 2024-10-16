import { MenuItemProps as MuiMenuItemProps } from '@mui/material';
export type MenuItemProps = Pick<MuiMenuItemProps, 'id' | 'selected' | 'disabled' | 'onClick' | 'sx' | 'children'>;
export declare const MenuItem: ({ id, selected, disabled, onClick, sx, children, }: MenuItemProps) => import("react/jsx-runtime").JSX.Element;
export default MenuItem;
