import { InfoOutlined } from '@mui/icons-material';
import {
  Skeleton,
  Stack,
  StackProps,
  Tooltip,
  TooltipProps,
  Typography,
} from '@mui/material';
import { merge } from 'lodash';

type ValueIndicatorProps = {
  value: number | string;
  label: string;
  loading?: boolean;
  description?: string;
  slotProps?: Partial<{
    container: StackProps;
    description: Partial<TooltipProps>;
  }>;
};

const ValueIndicator = ({
  value,
  label,
  loading = false,
  description,
  slotProps = {},
}: ValueIndicatorProps) => {
  const { container } = slotProps;
  return (
    <Stack
      {...container}
      sx={{ alignItems: 'center', gap: 0.5, ...container?.sx }}
    >
      {loading && (
        <Skeleton
          variant="text"
          width="2rem"
        />
      )}
      {!loading && (
        <Typography
          variant="h5"
          component="p"
        >
          {value}
        </Typography>
      )}
      <Stack sx={{ flexDirection: 'row', gap: 0.5, alignItems: 'center' }}>
        <Typography
          variant="overline"
          sx={{ color: theme => theme.palette.secondary.main }}
        >
          {label}
        </Typography>
        {description && (
          <Tooltip
            {...merge(
              {
                title: description,
                placement: 'right-end',
                slotProps: { tooltip: { sx: { maxWidth: '135px' } } },
              },
              slotProps.description,
            )}
          >
            <InfoOutlined
              fontSize="small"
              color="secondary"
            />
          </Tooltip>
        )}
      </Stack>
    </Stack>
  );
};

export default ValueIndicator;
