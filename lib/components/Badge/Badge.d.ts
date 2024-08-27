import { BadgeProps as MuiBadgeProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
export type BadgeProps = Pick<MuiBadgeProps, 'color' | 'invisible' | 'variant' | 'children' | 'anchorOrigin' | 'title' | 'sx'> & {
    badgeContent?: number;
};
declare const Badge: FC<PropsWithChildren<BadgeProps>>;
export default Badge;
