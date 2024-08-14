import { InfoOutlined } from '@mui/icons-material';
import {
  Skeleton,
  Stack,
  StackProps,
  Tooltip,
  Typography,
} from '@mui/material';

type ValueIndicatorProps = {
  value: number | string;
  label: string;
  loading?: boolean;
  description?: string;
  slotProps?: Partial<{
    container: StackProps;
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
      sx={{ alignItems: 'center', gap: 1, ...container?.sx }}
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
          {value.toLocaleString()}
        </Typography>
      )}
      <Stack sx={{ flexDirection: 'row', gap: 1, alignItems: 'center' }}>
        <Typography
          variant="overline"
          sx={{ color: theme => theme.palette.secondary.main }}
        >
          {label}
        </Typography>
        {description && (
          <Tooltip
            title={description}
            placement="right-end"
            slotProps={{ tooltip: { sx: { maxWidth: '135px' } } }}
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
