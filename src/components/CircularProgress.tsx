import { Stack, CircularProgress, CircularProgressProps } from '@mui/material';

type Props = CircularProgressProps & {
  centered?: boolean;
  onDark?: boolean;
};

const CenteredCircularProgress = ({
  centered = false,
  // dark = false,
  ...props
}: Props) => {
  const circularProgress = (
    <CircularProgress
      {...props}
      // dark
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
