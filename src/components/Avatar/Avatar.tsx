import {
  Avatar as AvatarMui,
  AvatarProps as MuiAvatarProps,
  Palette,
  useTheme,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';
import Badge, { BadgeProps } from '../Badge/Badge';
import { IconUser, TablerIcon } from '@tabler/icons-react';

export type AvatarProps = Pick<
  MuiAvatarProps,
  'sx' | 'variant' | 'src' | 'alt'
> & {
  size?: 'small' | 'medium' | 'large';
  color?: 'default' | 'primary' | 'highlight' | 'success' | 'error' | 'warning';
  withBadge?: boolean;
  badgeProps?: BadgeProps;
  text?: string;
  Icon?: TablerIcon;
};

export const getSizeInPixels = (size: AvatarProps['size']): string => {
  switch (size) {
    case 'small':
      return '32px';
    case 'large':
      return '60px';
    default:
      return '40px';
  }
};

export const getIconSize = (size: AvatarProps['size']) => {
  switch (size) {
    case 'small':
      return 24;
    case 'large':
      return 32;
    default:
      return 24;
  }
};

export const getColorsVariant = (
  color: AvatarProps['color'],
  palette: Palette,
): { backgroundColor: string; color: string } => {
  switch (color) {
    case 'primary':
      return {
        backgroundColor: palette.base?.blueBrand[100]!,
        color: palette.base?.blueBrand[800]!,
      };
    case 'highlight':
      return {
        backgroundColor: palette.base?.lilac[100]!,
        color: palette.base?.lilac[800]!,
      };
    case 'success':
      return {
        backgroundColor: palette.base?.green[100]!,
        color: palette.base?.green[800]!,
      };
    case 'error':
      return {
        backgroundColor: palette.base?.red[100]!,
        color: palette.base?.red[800]!,
      };
    case 'warning':
      return {
        backgroundColor: palette.base?.yellow[100]!,
        color: palette.base?.yellow[800]!,
      };
    default:
      return {
        backgroundColor: palette.grey[200],
        color: palette.grey[800],
      };
  }
};

const getOffset = (
  size: AvatarProps['size'],
  variant: BadgeProps['variant'],
): SxProps<Theme> => {
  if (variant === 'dot') {
    const dotLarge = '-4px';
    const dotSmallMedium = '-0.5px';
    const translateOffset =
      size === 'medium' || size === 'small' ? dotSmallMedium : dotLarge;
    return {
      '& .MuiBadge-badge': {
        transform: `translate(${translateOffset}, ${translateOffset})`,
      },
    };
  } else if (variant === 'standard') {
    const standardLarge = '0px';
    const standardMedium = '6px';
    const translateOffset = size === 'large' ? standardLarge : standardMedium;
    return {
      '& .MuiBadge-badge': {
        transform: `translate(${translateOffset}, ${translateOffset})`,
      },
    };
  }
  return {};
};

// shows src then text then icon
export const Avatar = ({
  size = 'medium',
  color = 'default',
  withBadge = false,
  badgeProps = { variant: 'standard', color: 'primary' },
  text,
  Icon = IconUser,
  sx,
  ...props
}: AvatarProps) => {
  const theme = useTheme();
  const sizeInPixels = getSizeInPixels(size);
  const colorsVariant = getColorsVariant(color, theme.palette);
  const roundedBorderRadius = theme.shape.borderRadius;

  const avatar = (
    <AvatarMui
      sx={{
        ...sx,
        ...colorsVariant,
        height: sizeInPixels,
        width: sizeInPixels,
        ...(props.variant === 'rounded' && {
          borderRadius: roundedBorderRadius,
        }),
        ...(props.variant === 'square' && {
          borderRadius: 1,
        }),
      }}
      {...props}
    >
      {!props.src && (
        <Typography
          variant="globalXS"
          fontWeight="semiBold"
        >
          {text}
        </Typography>
      )}
      {!props.src && !text && Icon && <Icon size={getIconSize(size)} />}
    </AvatarMui>
  );
  const forcedVariant =
    size === 'small' || !badgeProps.badgeContent ? 'dot' : badgeProps?.variant;
  return withBadge ? (
    <Badge
      {...badgeProps}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      sx={getOffset(size, forcedVariant)}
      // On DS3 the standard variant can be used with large and medium size
      variant={forcedVariant}
      badgeContent={badgeProps.badgeContent}
    >
      {avatar}
    </Badge>
  ) : (
    avatar
  );
};

export default Avatar;
