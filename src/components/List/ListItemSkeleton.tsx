import { FC } from 'react';
import { Stack, useTheme } from '@mui/material';
import Skeleton from '../Skeleton/Skeleton';

export const ListItemSkeleton: FC = () => {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        gap: 0.5,
        p: 2,
      }}
    >
      <Skeleton
        variant="circular"
        width={40}
        height={40}
      />
      <Stack
        sx={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: 0.5,
          width: `calc(100% - 40px - ${theme.spacing(0.5)} - 2 * ${theme.spacing(2)})`,
        }}
      >
        <Skeleton
          width="100%"
          height="24px"
        />
        <Skeleton
          width="14%"
          height="12px"
        />
      </Stack>
    </Stack>
  );
};

export default ListItemSkeleton;
