import { Badge as MuiBadge, BadgeProps as MuiBadgeProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

export type BadgeProps = Pick<
  MuiBadgeProps,
  | 'color'
  | 'invisible'
  | 'variant'
  | 'children'
  | 'anchorOrigin'
  | 'title'
  | 'sx'
> & {
  badgeContent?: number;
};

const Badge: FC<PropsWithChildren<BadgeProps>> = ({ ...badgeProps }) => {
  return <MuiBadge {...badgeProps} />;
};

export default Badge;
