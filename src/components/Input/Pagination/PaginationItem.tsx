import { FC } from 'react';
import { useTranslation } from '../i18n';
import { Button, Stack, IconButton } from '@mui/material';
import { UsePaginationItem } from '@mui/material/usePagination';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

export type PaginationItemProps = UsePaginationItem & {
  disabled?: boolean;
};

export const PaginationItem: FC<PaginationItemProps> = ({
  page,
  type,
  selected,
  disabled = false,
  ...item
}) => {
  const { t } = useTranslation();

  let children = null;

  if (type.includes('ellipsis')) {
    children = (
      <Button
        {...item}
        variant="tertiary"
        disabled
        size="small"
        sx={{
          minWidth: '36px',
        }}
      >
        {'...'}
      </Button>
    );
  }

  if (type === 'page') {
    children = (
      <Button
        {...item}
        variant={selected ? 'secondary' : 'tertiary'}
        size="small"
        disabled={disabled}
        sx={{
          minWidth: '36px',
        }}
      >
        {page}
      </Button>
    );
  }

  if (type === 'previous') {
    children = (
      <IconButton
        {...item}
        aria-label={t('PREVIOUS')}
        size="small"
        disabled={disabled}
      >
        <IconChevronLeft />
      </IconButton>
    );
  }

  if (type === 'next') {
    children = (
      <IconButton
        {...item}
        aria-label={t('NEXT')}
        size="small"
        disabled={disabled}
      >
        <IconChevronRight />
      </IconButton>
    );
  }

  return (
    <Stack
      component="li"
      sx={{ listStyle: 'none' }}
    >
      {children}
    </Stack>
  );
};

export default PaginationItem;
