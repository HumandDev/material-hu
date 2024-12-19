import { Stack, LinearProgress, Typography, StackProps } from '@mui/material';
import Title from '../Title/Title';

type Props = {
  current?: number;
  total?: number;
  title?: string;
  description?: string;
  helper?: string;
  hasPercentage?: boolean;
  variant?: 'determinate' | 'indeterminate';
  progressHeight?: number;
  sx?: StackProps['sx'];
};

const ProgressBar = ({
  title = '',
  description = '',
  helper = '',
  variant = 'indeterminate',
  current = 0,
  total = 100,
  hasPercentage = false,
  progressHeight = 4,
  sx,
}: Props) => {
  const progress = (100 * current) / total;
  return (
    <Stack sx={{ gap: 0.5, ...sx }}>
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
            my: 1,
            height: progressHeight,
          }}
          variant={variant}
          value={Math.min(progress, 100)}
        />
        {hasPercentage && (
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
