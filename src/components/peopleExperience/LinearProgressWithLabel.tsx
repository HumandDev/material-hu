import {
  LinearProgress,
  LinearProgressProps,
  Stack,
  StackProps,
  Typography,
} from '@mui/material';

export type LinearProgressWithLabelProps = StackProps & {
  value: LinearProgressProps['value'];
  linearProgressProps?: LinearProgressProps;
};

const LinearProgressWithLabel = ({
  linearProgressProps,
  value = 0,
  ...other
}: LinearProgressWithLabelProps) => {
  const mappedValue = value * 100;

  return (
    <Stack
      {...other}
      sx={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        gap: 1,
        ...other.sx,
      }}
    >
      <LinearProgress
        sx={{ width: '100%' }}
        variant="determinate"
        {...linearProgressProps}
        value={mappedValue}
      />
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ flexShrink: 0 }}
      >
        {`${Math.round(mappedValue)}%`}
      </Typography>
    </Stack>
  );
};

export default LinearProgressWithLabel;
