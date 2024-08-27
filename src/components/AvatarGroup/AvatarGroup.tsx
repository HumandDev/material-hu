import { AvatarGroup as AvatarGroupMui, useTheme } from '@mui/material';

import Avatar, {
  Props as AvatarProps,
  getColorsVariant,
  getSizeInPixels,
} from '../Avatar/Avatar';

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

export type Props = {
  size?: AvatarProps['size'];
  avatars: Pick<AvatarProps, 'src' | 'color' | 'alt' | 'text'>[];
};

const AvatarGroup = ({ size = 'medium', avatars }: Props) => {
  const theme = useTheme();
  const sizeInPixels = getSizeInPixels(size);
  const colorsVariant = getColorsVariant('default', theme.palette);

  return (
    <AvatarGroupMui
      sx={{
        justifyContent: 'start',
        '& .MuiAvatar-root': {
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
      max={MAX_AVATARS}
      renderSurplus={formatSurplus}
    >
      {avatars.map((a, index) => (
        <Avatar
          key={index}
          {...a}
        />
      ))}
    </AvatarGroupMui>
  );
};

export default AvatarGroup;
