import { ReactNode, useState } from 'react';
import {
  IconChevronUp as ExpandLessIcon,
  IconChevronDown as ExpandMoreIcon,
} from '@tabler/icons-react';
import {
  ListItem,
  ListItemButton,
  ListItemText,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import LinearProgressWithLabel from './LinearProgressWithLabel';

export const ParticipationItemSkeleton = () => (
  <Stack
    sx={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      px: 2,
      py: 1,
    }}
  >
    <Skeleton
      variant="text"
      width={200}
      height={16}
    />
    <Stack sx={{ alignItems: 'flex-end' }}>
      <Skeleton
        variant="text"
        width={130}
        height={14}
      />
      <Skeleton
        variant="text"
        width={100}
        height={12}
      />
    </Stack>
  </Stack>
);

type MiscProps = {
  total: number;
  partial: number;
  noDataMessage?: ReactNode;
  label: string;
};

const Misc = ({ total, partial, noDataMessage, label }: MiscProps) => {
  if (total === 0) {
    return (
      <Typography
        variant="body1"
        color="secondary"
      >
        {noDataMessage}
      </Typography>
    );
  }

  return (
    <Stack sx={{ minWidth: '130px', alignItems: 'flex-end' }}>
      <LinearProgressWithLabel
        value={total ? partial / total : 0}
        sx={{ flexDirection: 'row' }}
      />
      <Typography
        variant="body2"
        color="secondary"
      >
        {label}
      </Typography>
    </Stack>
  );
};

export type ParticipationItemProps = {
  primary: string;
  secondary?: string | null;
  partial: number;
  total: number;
  slotProps: {
    misc: Omit<MiscProps, 'partial' | 'total'>;
  };
};

export const ParticipationItem = ({
  primary,
  secondary,
  partial,
  total,
  slotProps,
}: ParticipationItemProps) => (
  <ListItem>
    <ListItemText
      primary={primary}
      secondary={secondary}
    />
    <Misc
      partial={partial}
      total={total}
      {...slotProps.misc}
    />
  </ListItem>
);

export type ParticipationExpandableItemProps = ParticipationItemProps & {
  children: (expandable: boolean) => ReactNode;
};

export const ParticipationExpandableItem = ({
  children,
  primary,
  secondary,
  partial,
  total,
  slotProps,
}: ParticipationExpandableItemProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(prev => !prev);

  return (
    <>
      <ListItemButton
        sx={{ gap: 2 }}
        onClick={handleToggle}
      >
        <Stack
          sx={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 2,
            flex: 1,
          }}
        >
          <ListItemText
            primary={primary}
            secondary={secondary}
            sx={{ flexGrow: 0 }}
          />
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Stack>
        <Misc
          partial={partial}
          total={total}
          {...slotProps.misc}
        />
      </ListItemButton>
      {children(expanded)}
    </>
  );
};
