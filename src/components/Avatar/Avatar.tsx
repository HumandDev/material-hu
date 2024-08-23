import {
  Avatar as AvatarMui,
  AvatarProps,
  Palette,
  BadgeProps,
  useTheme,
  SxProps,
  Theme,
} from '@mui/material';
import Badge from '../Badge/Badge';
import React from 'react';

export type Props = Pick<AvatarProps, 'sx' | 'variant' | 'src' | 'alt'> & {
  size?: 'small' | 'medium' | 'large';
  color?: 'default' | 'primary' | 'highlight' | 'success' | 'error' | 'warning';
  withBadge?: boolean;
  badgeContent?: BadgeProps['badgeContent'];
  badgeProps?: Omit<BadgeProps, 'badgeContent'>;
};

const getSizeInPixels = (size: Props['size']): string => {
  switch (size) {
    case 'small':
      return '32px';
    case 'large':
      return '60px';
    default:
      return '40px';
  }
};

const getColorsVariant = (
  color: Props['color'],
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

const getDotOffset = (
  size: Props['size'],
  badgeContent: React.ReactNode,
): SxProps<Theme> => {
  if (badgeContent) {
    return {};
  }
  const translateOffset =
    size === 'medium' || size === 'small' ? '-0.5px' : '-4px';
  return {
    '& .MuiBadge-badge': {
      transform: `translate(${translateOffset}, ${translateOffset})`,
    },
  };
};

const Avatar = ({
  size = 'medium',
  color = 'default',
  withBadge = false,
  badgeContent,
  badgeProps = { variant: 'standard', color: 'primary' },
  ...props
}: Props) => {
  const theme = useTheme();
  const sizeInPixels = getSizeInPixels(size);
  const colorsVariant = getColorsVariant(color, theme.palette);
  const roundedBorderRadius = theme.shape.borderRadius;

  const avatar = (
    <AvatarMui
      sx={{
        ...props.sx,
        ...colorsVariant,
        height: sizeInPixels,
        width: sizeInPixels,
        ...(props.variant === 'rounded' && {
          borderRadius: roundedBorderRadius,
        }),
        ...(props.variant === 'square' && {
          borderRadius: theme.shape.squareBorderRadius,
        }),
        ...(!props.src && {
          // text style globalXS
          fontFamily: 'Roboto',
          fontSize: 14,
          lineHeight: '140%',
          fontWeight: 600,
          letterSpacing: 0.2,
        }),
      }}
      {...props}
    />
  );
  const isDotVariant = size === 'small' || !badgeContent;
  return withBadge ? (
    <Badge
      {...badgeProps}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      sx={getDotOffset(size, badgeContent)}
      // On DS3 the standard variant can be used with large and medium size
      variant={isDotVariant ? 'dot' : badgeProps?.variant}
      badgeContent={badgeContent}
    >
      {avatar}
    </Badge>
  ) : (
    avatar
  );
};

export default Avatar;
