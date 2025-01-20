import { Stack, StackProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

const TableToolbarHu: FC<PropsWithChildren<StackProps>> = ({
  children,
  sx = {},
  ...props
}) => {
  return (
    <Stack
      sx={{
        px: 2,
        py: 3,
        color: theme => theme.palette.textColors?.neutralTextLighter,
        backgroundColor: theme =>
          theme.palette.hugoBackground?.neutralBgTerciary,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Stack>
  );
};

export default TableToolbarHu;
