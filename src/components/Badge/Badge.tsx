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
  | 'badgeContent'
>;

const Badge: FC<PropsWithChildren<Props>> = ({ ...badgeProps }) => {
  return <MuiBadge {...badgeProps} />;
};

export default Badge;
