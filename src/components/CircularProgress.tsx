import { Stack, CircularProgress, CircularProgressProps } from '@mui/material';

type Props = CircularProgressProps & {
  centered?: boolean;
  dark?: boolean;
  width?: string;
};

const CenteredCircularProgress = ({
  centered = false,
  dark = false,
  width = 'medium',
  ...props
}: Props) => {
  const dimension = width === 'small' ? 24 : 32;
  const circularProgress = (
    <CircularProgress
      dark={dark}
      size={dimension}
      {...props}
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
