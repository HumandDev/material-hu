import { FC, ReactNode, MouseEvent } from 'react';
import { StackProps, ListItemProps as MuiLisItemProps, IconButtonProps as MuiIconButtonProps } from '@mui/material';
import { TitleProps } from '../Title/Title';
import { AvatarProps } from '../Avatar/Avatar';
import { TablerIcon } from '@tabler/icons-react';
type ContainerProps = Pick<MuiLisItemProps, 'children' | 'divider' | 'sx'>;
export type ListItemProps = Omit<ContainerProps, 'children' | 'sx'> & Pick<StackProps, 'id' | 'sx'> & {
    loading?: boolean;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    text?: Pick<TitleProps, 'copetin' | 'title' | 'description'>;
    avatar?: Pick<AvatarProps, 'src' | 'alt' | 'text' | 'Icon' | 'color'>;
    action?: Pick<MuiIconButtonProps, 'id' | 'color' | 'disabled' | 'onClick' | 'aria-label'> & {
        Icon: TablerIcon;
    };
    actionMenuList?: ReactNode;
    sideContent?: ReactNode;
};
export declare const ListItem: FC<ListItemProps>;
export default ListItem;
