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

export type Props = Omit<AvatarGroupProps, 'max' | 'spacing'> & {
  size?: AvatarProps['size'];
  spacing?: 'medium' | 'small';
};

const AvatarGroup = ({
  size = 'medium',
  spacing = 'medium',
  ...props
}: Props) => {
  const theme = useTheme();
  const sizeInPixels = getSizeInPixels(size);
  const colorsVariant = getColorsVariant('default', theme.palette);

  return (
    <AvatarGroupMui
      slotProps={{
        additionalAvatar: {
          sx: {
            height: sizeInPixels,
            width: sizeInPixels,
            ...colorsVariant,
          },
        },
      }}
      max={MAX_AVATARS}
      spacing={spacing}
      renderSurplus={formatSurplus}
      {...props}
      sx={{
        ...props.sx,
        ...colorsVariant,
        height: sizeInPixels,
        width: sizeInPixels,
        '& .MuiAvatarGroup-root': {
          backgroundColor: 'yellow',
          color: 'blue',
          position: 'static',
        },
        // position: 'static',
      }}
    />
  );
};

export default AvatarGroup;
