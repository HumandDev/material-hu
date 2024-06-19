import { ReactNode } from 'react';
import { MenuItemProps } from '@mui/material';
type RenderTriggerProps = {
    ariaProps: object;
    handleOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
    open: boolean;
};
type MenuProps = {
    children: ReactNode;
    renderTrigger: (props: RenderTriggerProps) => JSX.Element;
    closeOnSelect?: boolean;
};
export declare const ActionsMenuItem: ({ onClick, sx, ...props }: MenuItemProps) => import("react/jsx-runtime").JSX.Element;
declare const ActionsMenu: ({ children, renderTrigger, closeOnSelect }: MenuProps) => import("react/jsx-runtime").JSX.Element;
export default ActionsMenu;
