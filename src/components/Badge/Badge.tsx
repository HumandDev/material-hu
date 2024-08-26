import { Badge as MuiBadge, BadgeProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

type Props = Pick<
  BadgeProps,
  | 'color'
  | 'invisible'
  | 'variant'
  | 'children'
  | 'anchorOrigin'
  | 'title'
  | 'sx'
> & {
  badgeContent: number;
};

const Badge: FC<PropsWithChildren<Props>> = ({ ...badgeProps }) => {
  return <MuiBadge {...badgeProps} />;
};

export default Badge;
