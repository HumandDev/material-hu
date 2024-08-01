import { Stack, CircularProgress, CircularProgressProps } from '@mui/material';

type Props = CircularProgressProps & {
  centered?: boolean;
  darkBackground?: boolean;
  size?: string;
};

const CenteredCircularProgress = ({
  centered = true,
  darkBackground = false,
  size = 'medium',
  ...props
}: Props) => {
  const auxSize = size === 'small' ? 24 : 32;
  const circularProgress = (
    <CircularProgress
      sx={{
        color: theme =>
          darkBackground
            ? theme.palette.base?.white
            : theme.palette.base?.blueBrand[400],
      }}
      {...props}
      size={auxSize}
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
