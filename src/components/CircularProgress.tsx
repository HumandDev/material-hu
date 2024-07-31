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
      {...props}
      dark={dark}
      sizes={sizes}
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
