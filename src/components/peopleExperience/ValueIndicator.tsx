import { InfoOutlined } from '@mui/icons-material';
import {
  Skeleton,
  Stack,
  StackProps,
  Theme,
  Tooltip,
  TooltipProps,
  Typography,
  TypographyProps,
} from '@mui/material';
import { merge, omit } from 'lodash';
import { ReactNode } from 'react';

type ValueIndicatorProps = {
  value: number | string;
  label: string;
  loading?: boolean;
  description?: string;
  slotProps?: Partial<{
    container: StackProps;
    description: Partial<TooltipProps>;
    value: Partial<
      TypographyProps & {
        endAdornment: ReactNode;
      }
    >;
    label: Partial<TypographyProps>;
  }>;
};

const ValueIndicator = ({
  value,
  label,
  loading = false,
  description,
  slotProps = {},
}: ValueIndicatorProps) => {
  const {
    container,
    value: valueProps,
    label: labelProps,
    description: descriptionProps,
  } = slotProps;

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
        <Stack sx={{ gap: 1, flexDirection: 'row' }}>
          <Typography
            variant="h5"
            component="p"
            {...omit(valueProps, 'endAdornment')}
          >
            {value}
          </Typography>
          {valueProps?.endAdornment}
        </Stack>
      )}
      <Stack sx={{ flexDirection: 'row', gap: 0.5, alignItems: 'center' }}>
        <Typography
          variant="overline"
          {...merge(
            {
              sx: { color: (theme: Theme) => theme.palette.secondary.main },
            },
            labelProps,
          )}
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
              descriptionProps,
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
