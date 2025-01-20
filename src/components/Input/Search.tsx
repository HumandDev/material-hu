import { FC } from 'react';
import { useTranslation } from './i18n';
import InputClassic, { InputProps } from './InputClassic';
import { IconSearch } from '@tabler/icons-react';

export type SearchProps = Omit<InputProps, 'startAdornment' | 'hasCounter'> & {
  variant?: 'classic' | 'custom';
};

export const Search: FC<SearchProps> = ({
  variant = 'classic',
  ...inputProps
}) => {
  const { t } = useTranslation();

  return (
    <InputClassic
      placeholder={t('SEARCH_PLACEHOLDER')}
      startAdornment={<IconSearch />}
      hasCounter={false}
      {...inputProps}
      sx={{
        '& .MuiInputBase-root': {
          backgroundColor: theme =>
            variant === 'custom'
              ? theme.palette.hugoBackground?.neutralBgSecondary
              : undefined,
        },
        ...inputProps?.sx,
      }}
    />
  );
};

export default Search;
