import { FC } from 'react';
import usePagination from '@mui/material/usePagination';
import { Paper, PaperProps } from '@mui/material';
import PaginationNav from './PaginationNav';
import PaginationChanger from './PaginationChanger';

export type PaginationProps = Pick<PaperProps, 'sx'> & {
  loading?: boolean;
  disabled?: boolean;
  type?: 'basic' | 'changer';
  limit?: number;
  limitOptions?: number[];
  onChangeLimit?: (newLimit: number) => void;
  page?: number;
  onChangePage?: (newPage: number) => void;
  totalPages?: number;
};

export const Pagination: FC<PaginationProps> = ({
  loading = false,
  disabled = false,
  type = 'changer',
  totalPages,
  page,
  onChangePage = () => null,
  limit,
  limitOptions,
  onChangeLimit = () => null,
}) => {
  const { items } = usePagination({
    count: totalPages,
    disabled,
    page,
    onChange: (_, newPage) => onChangePage(newPage),
  });

  return (
    <Paper
      variant="outlined"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 1.5,
        gap: 3,
      }}
    >
      <PaginationNav
        loading={loading}
        items={items}
        page={page}
      />
      {type === 'changer' && (
        <PaginationChanger
          limit={limit}
          limitOptions={limitOptions}
          onChange={onChangeLimit}
          loading={loading}
          disabled={disabled}
        />
      )}
    </Paper>
  );
};

export default Pagination;
