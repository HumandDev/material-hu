import { Stack, CircularProgress, CircularProgressProps } from '@mui/material';

type Props = CircularProgressProps & {
  centered?: boolean;
  dark?: boolean;
  sizes?: string;
};

const CenteredCircularProgress = ({
  centered = false,
  dark = false,
  sizes = 'medium',
  ...props
}: Props) => {
  const circularProgress = (
    <CircularProgress
      dark={dark}
      sizes={sizes}
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
