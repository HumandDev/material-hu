import { FC } from 'react';
import {
  InputAdornment,
  MenuItem,
  Select,
  SelectProps,
  useFormControl,
  useTheme,
} from '@mui/material';
import { IconAlertCircle, IconChevronDown } from '@tabler/icons-react';
import { getBorderColor } from './utils';
import { useTranslation } from './i18n';

export type CustomSelectProps = Pick<
  SelectProps,
  'placeholder' | 'inputRef'
> & {
  value: string;
  success?: boolean;
  onChange: (value: string) => void;
  options: { label: string; value: string | number }[];
  allowClear?: boolean;
};

const CustomSelect: FC<CustomSelectProps> = ({
  value,
  onChange,
  inputRef,
  placeholder,
  options,
  allowClear,
}) => {
  const { focused, error } = useFormControl() || {};
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Select
      value={value || ''}
      onChange={e => onChange(e.target.value)}
      inputRef={inputRef}
      displayEmpty={true}
      renderValue={v => options.find(o => o.value === v)?.label || placeholder}
      IconComponent={IconChevronDown}
      endAdornment={
        error && (
          <InputAdornment position="end">
            <IconAlertCircle
              size={20}
              color={theme.palette.textColors?.errorText}
            />
          </InputAdornment>
        )
      }
      sx={{
        color: !value
          ? theme.palette.textColors?.neutralTextLighter
          : theme.palette.textColors?.neutralText,
        '.MuiSelect-icon': {
          mr: error ? 5 : 'unset',
        },
        '& fieldset': {
          borderColor: getBorderColor(theme, focused, error, false),
          borderWidth: '1px !important',
        },
      }}
    >
      {allowClear && (
        <MenuItem
          key="clear"
          value=""
        >
          <em>{t('SELECT')}</em>
        </MenuItem>
      )}
      {options.map(option => (
        <MenuItem
          key={option.value}
          value={option.value}
        >
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default CustomSelect;
