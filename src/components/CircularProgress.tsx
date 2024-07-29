import React from 'react';
import { Stack, CircularProgress, CircularProgressProps } from '@mui/material';
import { styled } from '@mui/system';

type Props = CircularProgressProps & {
  centered?: boolean;
  onDark?: boolean;
};

const StyledCircularProgress = styled(CircularProgress)<{ onDark?: boolean }>(
  ({ theme, onDark }) => ({
    color: onDark
      ? theme.palette.base?.white
      : theme.palette.base?.blueBrand[400],
  }),
);

const CenteredCircularProgress = ({
  centered = false,
  onDark = false,
  ...props
}: Props) => {
  const circularProgress = (
    <StyledCircularProgress
      {...props}
      onDark={onDark}
    />
  );

  return centered ? (
    <Stack
      direction="row"
      sx={{ justifyContent: 'center', alignItems: 'center' }}
    >
      {circularProgress}
    </Stack>
  ) : (
    circularProgress
  );
};

export default CenteredCircularProgress;
