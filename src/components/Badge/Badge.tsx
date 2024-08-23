import {
  Badge as MuiBadge,
  BadgeProps,
  useTheme,
  Palette,
} from '@mui/material';
import { FC, PropsWithChildren } from 'react';

const getColor = (color: BadgeProps['color'], palette: Palette) => {
  switch (color) {
    case 'primary':
      return palette.base?.blueBrand[400];
    case 'success':
      return palette.base?.green[400];
    case 'warning':
      return palette.base?.yellow[400];
    case 'error':
      return palette.base?.red[400];
    default:
      return color;
  }
};

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

const Badge: FC<PropsWithChildren<Props>> = ({ color, ...badgeProps }) => {
  const theme = useTheme();

  return (
    <MuiBadge
      sx={{
        '& .MuiBadge-badge': {
          backgroundColor: getColor(color, theme.palette),
        },
      }}
      {...badgeProps}
    />
  );
};

export default Badge;
