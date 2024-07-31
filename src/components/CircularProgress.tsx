import { Stack, CircularProgress, CircularProgressProps } from '@mui/material';

type Props = CircularProgressProps & {
  centered?: boolean;
  darkBackground?: boolean;
  size?: 'small' | 'medium';
};

const CenteredCircularProgress = ({
  centered = true,
  darkBackground = false,
  size = 'medium',
  ...props
}: Props) => {
  const circularProgress = (
    <CircularProgress
      sx={{
        ...props.sx,
        color: theme =>
          darkBackground
            ? theme.palette.base?.white
            : theme.palette.base?.blueBrand[400],
      }}
      size={size === 'small' ? 24 : 32}
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
