import { ReactNode, useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  ListItem,
  ListItemButton,
  ListItemText,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
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
};

const Misc = ({ total, partial }: MiscProps) => {
  const { t } = useTranslation();

  if (total === 0) {
    return (
      <Typography
        variant="body1"
        color="secondary"
      >
        {t('NOT_ENOUGH_PARTICIPANTS')}
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
        {t('EMPLOYEES_RATIO', { partial, total })}
      </Typography>
    </Stack>
  );
};

export type ParticipationItemProps = {
  primary: string;
  secondary?: string | null;
  partial: number;
  total: number;
};

export const ParticipationItem = ({
  primary,
  secondary,
  partial,
  total,
}: ParticipationItemProps) => (
  <ListItem>
    <ListItemText
      primary={primary}
      secondary={secondary}
    />
    <Misc
      partial={partial}
      total={total}
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
          {expanded ? (
            <ExpandLess color="secondary" />
          ) : (
            <ExpandMore color="secondary" />
          )}
        </Stack>
        <Misc
          partial={partial}
          total={total}
        />
      </ListItemButton>
      {children(expanded)}
    </>
  );
};
