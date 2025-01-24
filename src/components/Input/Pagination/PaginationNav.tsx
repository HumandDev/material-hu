import { FC } from 'react';
import { Stack } from '@mui/material';
import Skeleton from '../../Skeleton/Skeleton';
import PaginationItem from './PaginationItem';
import { UsePaginationItem } from '@mui/material/usePagination';

export type PaginationNavProps = {
  loading?: boolean;
  disabled?: boolean;
  items?: UsePaginationItem[];
  page?: number;
};

export const PaginationNav: FC<PaginationNavProps> = ({
  loading = false,
  disabled = false,
  items,
  page,
}) => (
  <>
    {loading &&
      [1, 2, 3, 4].map(item => (
        <Skeleton
          key={item}
          width={24}
          height={24}
        />
      ))}
    {!loading && (
      <Stack component="nav">
        <Stack
          component="ul"
          sx={{
            flexDirection: 'row',
            gap: 1,
            alignItems: 'center',
            m: 0,
            p: 0,
          }}
        >
          {items?.map((item, index) => (
            <PaginationItem
              key={index}
              {...item}
              selected={item.page === page}
              disabled={disabled || item.disabled}
            />
          ))}
        </Stack>
      </Stack>
    )}
  </>
);

export default PaginationNav;
