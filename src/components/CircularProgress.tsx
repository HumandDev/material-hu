import { Stack, CircularProgress, CircularProgressProps } from '@mui/material';

type Props = CircularProgressProps & {
  centered?: boolean;
  darkBackground?: boolean;
  width?: string;
};

const CenteredCircularProgress = ({
  centered = true,
  darkBackground = false,
  width = 'medium',
  ...props
}: Props) => {
  const size = width === 'small' ? 24 : 32;

  const circularProgress = (
    <CircularProgress
      sx={{
        ...props.sx,
        color: theme =>
          darkBackground
            ? theme.palette.base?.white
            : theme.palette.base?.blueBrand[400],
      }}
      size={size}
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
