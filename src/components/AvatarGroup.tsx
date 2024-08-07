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

export type Props = Omit<AvatarGroupProps, 'max'> & {
  size?: AvatarProps['size'];
};

const AvatarGroup = ({ size = 'medium', ...props }: Props) => {
  const theme = useTheme();
  const sizeInPixels = getSizeInPixels(size);
  const colorsVariant = getColorsVariant('default', theme.palette);

  return (
    <AvatarGroupMui
      sx={{
        ...props.sx,
        ...colorsVariant,
        height: sizeInPixels,
        width: sizeInPixels,
        position: 'static',
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
      max={MAX_AVATARS}
      {...props}
    />
  );
};

export default AvatarGroup;
