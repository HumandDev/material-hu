import {
  AvatarGroup as AvatarGroupMui,
  AvatarGroupProps,
  useTheme,
} from '@mui/material';

import {
  Props as AvatarProps,
  getColorsVariant,
  getSizeInPixels,
} from './Avatar';

const MAX_AVATARS = 4;

export const formatSurplus = (surplus: number) => {
  const thousandFraction = surplus / 1000;
  if (surplus > 9999 || surplus % 1000 === 0) {
    return `+${Math.trunc(thousandFraction).toString()}K`;
  }
  return surplus > 999
    ? `+${(Math.trunc(thousandFraction * 10) / 10).toString()}K`
    : `+${surplus}`;
};

export type Props = Omit<AvatarGroupProps, 'spacing'> & {
  size?: AvatarProps['size'];
  spacing?: 'medium' | 'small';
};

const AvatarGroup = ({
  size = 'medium',
  spacing = 'medium',
  max = MAX_AVATARS,
  ...props
}: Props) => {
  const theme = useTheme();
  const sizeInPixels = getSizeInPixels(size);
  const colorsVariant = getColorsVariant('default', theme.palette);

  return (
    <AvatarGroupMui
      {...props}
      sx={{
        ...props.sx,
        '& .MuiAvatar-root': {
          ...colorsVariant,
          height: sizeInPixels,
          width: sizeInPixels,
          position: 'static',
        },
      }}
      slotProps={{
        additionalAvatar: {
          sx: {
            height: sizeInPixels,
            width: sizeInPixels,
            ...colorsVariant,
          },
        },
      }}
      max={max}
      spacing={spacing}
      renderSurplus={formatSurplus}
    />
  );
};

export default AvatarGroup;
