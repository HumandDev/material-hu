import { Stack, LinearProgress, Typography, StackProps } from '@mui/material';
import Title from '../Title/Title';

type Props = {
  current: number;
  total: number;
  title?: string;
  description?: string;
  helper?: string;
  variant?: 'determinate' | 'indeterminate';
  sx?: StackProps['sx'];
};

const ProgressBar = ({
  title = '',
  description = '',
  helper = '',
  variant = 'indeterminate',
  current = 0,
  total = 100,
  sx,
}: Props) => {
  const progress = (100 * current) / total;
  return (
    <Stack sx={sx}>
      {(title || description) && (
        <Title
          variant="S"
          title={title}
          description={description}
        />
      )}
      <Stack sx={{ flexDirection: 'row', alignItems: 'center' }}>
        <LinearProgress
          sx={{
            color: theme => theme.palette.base?.blueBrand[400],
            backgroundColor: theme => theme.palette.border?.neutralDivider,
            width: '100%',
            borderRadius: 1,
          }}
          variant={variant}
          value={Math.min(progress, 100)}
        />
        {variant === 'determinate' && (
          <Typography
            variant="globalXS"
            sx={{
              color: theme => theme.palette.textColors?.neutralTextLighter,
              ml: 0.5,
            }}
          >
            {`${Math.round(progress)}%`}
          </Typography>
        )}
      </Stack>
      {helper && (
        <Typography
          variant="globalXXS"
          sx={{ color: theme => theme.palette.textColors?.neutralTextLighter }}
        >
          {helper}
        </Typography>
      )}
    </Stack>
  );
};

export default ProgressBar;
