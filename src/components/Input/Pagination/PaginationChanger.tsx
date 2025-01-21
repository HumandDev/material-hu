import { FC, useState } from 'react';
import { useTranslation } from '../i18n';
import { Button, Typography } from '@mui/material';
import Skeleton from '../../Skeleton/Skeleton';
import Menu from '../../Menu/Menu';
import MenuItem from '../../Menu/MenuItem';
import { IconChevronDown } from '@tabler/icons-react';

export type PaginationChangerProps = {
  loading?: boolean;
  limit?: number;
  limitOptions?: number[];
  onChange?: (newLimit: number) => void;
  disabled?: boolean;
};

export const PaginationChanger: FC<PaginationChangerProps> = ({
  loading = false,
  limit = 10,
  limitOptions = [10, 20, 30],
  onChange = () => null,
  disabled = false,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const { t } = useTranslation();

  const open = Boolean(anchorEl);

  const handleOpen = (event: any) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleSelect = (option: number) => {
    onChange(option);
    handleClose();
  };

  return (
    <>
      {loading && (
        <Skeleton
          width={115}
          height={36}
        />
      )}
      {!loading && (
        <>
          <Button
            variant="secondary"
            size="small"
            onClick={handleOpen}
            disabled={disabled}
            endIcon={<IconChevronDown size={16} />}
          >
            {t('LIMIT_LABEL', { limit })}
          </Button>
          <Menu
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            fixedDimensions={false}
          >
            {limitOptions.map(option => (
              <MenuItem
                key={option}
                selected={option === limit}
                onClick={() => handleSelect(option)}
              >
                <Typography
                  variant="inherit"
                  noWrap
                >
                  {t('LIMIT_LABEL', { limit: option })}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </>
  );
};

export default PaginationChanger;
