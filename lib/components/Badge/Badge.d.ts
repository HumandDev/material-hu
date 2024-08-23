import { BadgeProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
type Props = Pick<BadgeProps, 'color' | 'invisible' | 'variant' | 'children' | 'anchorOrigin' | 'title' | 'badgeContent' | 'sx'>;
declare const Badge: FC<PropsWithChildren<Props>>;
export default Badge;
