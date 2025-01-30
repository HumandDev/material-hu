import { FC, PropsWithChildren } from 'react';
import { Stack, StackProps } from '@mui/material';

const HuTableToolbar: FC<PropsWithChildren<StackProps>> = ({
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

export default HuTableToolbar;
