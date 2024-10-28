import { FC, MouseEvent } from 'react';
import { TablerIcon } from '@tabler/icons-react';
export type Option = {
    id: string;
    onClick: (event: MouseEvent) => void;
    title: string;
    description?: string;
    Icon?: TablerIcon;
};
export type IconsMenuProps = {
    options: Option[];
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    onClose?: (event: MouseEvent) => void;
    disabled?: boolean;
};
export declare const IconsMenu: FC<IconsMenuProps>;
export default IconsMenu;
