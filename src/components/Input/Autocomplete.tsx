import { Fragment, ReactNode, RefObject } from 'react';
import {
  IconChevronDown,
  IconExclamationCircle,
  IconX,
} from '@tabler/icons-react';
import {
  autocompleteClasses,
  FormControl,
  Autocomplete as MUIAutocomplete,
  AutocompleteProps as MUIAutocompleteProps,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import CustomLabel from './CustomLabel';
import CustomHelperText from './CustomHelperText';
import Title from '../Title/Title';
import { useTranslation } from './i18n';

const normalizeText = (text: string) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};

export const isEqualText = (textA: string, textB: string) => {
  return normalizeText(textA) === normalizeText(textB);
};

type ExtraProps<TValue> = {
  noOptionsTitle?: string;
  noOptionsDescription?: string;
  hasError?: boolean;
  helperText?: string;
  placeholder?: string;
  label?: string;
  fieldRef?: any;
  onCreate?: (inputValue: string) => void;
  getCreatableOption?: (input: string) => TValue;
  loadMoreElem?: ReactNode;
};

const ErrorIcon = IconExclamationCircle;

export type AutocompleteProps<
  TValue extends Record<string, unknown>,
  TMultiple extends boolean | undefined = false,
> = Omit<
  MUIAutocompleteProps<TValue, TMultiple, boolean, false>,
  | 'ref'
  | 'renderInput'
  | 'onChange'
  | 'value'
  | 'getOptionLabel'
  | 'getOptionKey'
  | 'filterOptions'
> &
  Required<
    Pick<
      MUIAutocompleteProps<TValue, TMultiple, boolean, false>,
      'onChange' | 'value' | 'getOptionLabel' | 'getOptionKey'
    >
  > &
  ExtraProps<TValue>;

const Autocomplete = <
  TValue extends Record<string, unknown>,
  TMultiple extends boolean | undefined = false,
>(
  props: AutocompleteProps<TValue, TMultiple>,
) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const {
    noOptionsTitle = t('NO_RESULTS_FOUND') as string,
    noOptionsDescription = t('SELECT_OPTION_IN_LIST') as string,
    hasError,
    helperText,
    placeholder,
    label,
    fieldRef,
    getCreatableOption,
    onCreate,
    onChange,
    loadMoreElem,
    getOptionLabel: fieldGetOptionLabel,
    ...fieldProps
  } = props;

  const getStatusTextColor = () => {
    if (fieldProps.disabled) {
      return theme.palette.textColors?.neutralTextDisabled;
    }
    return hasError
      ? theme.palette.textColors?.errorText
      : theme.palette.textColors?.neutralTextLighter;
  };

  const statusTextColor = getStatusTextColor();
  const hasCreatableFeat = onCreate;

  return (
    <FormControl
      error={hasError}
      fullWidth={fieldProps.fullWidth ?? true}
      disabled={fieldProps.disabled}
    >
      {label && <CustomLabel label={label} />}
      <MUIAutocomplete
        fullWidth
        selectOnFocus
        handleHomeEndKeys
        clearOnBlur
        ListboxProps={{
          sx: { maxHeight: 240 },
        }}
        popupIcon={<IconChevronDown size={20} />}
        clearIcon={<IconX size={20} />}
        filterOptions={(options, params) => {
          const filtered = Array.from(options);

          if (hasCreatableFeat) {
            const { inputValue, getOptionLabel } = params;
            const trimmedInput = inputValue.trim();

            const isExisting = filtered.some(option =>
              isEqualText(inputValue, getOptionLabel(option)),
            );

            if (!isExisting && trimmedInput) {
              filtered.unshift({
                ...(getCreatableOption?.(trimmedInput) as any),
                isCreatable: true,
                inputValue: trimmedInput,
              } as any);
            }
          }

          return filtered;
        }}
        renderOption={({ key, ...optionProps }, option, state) => {
          const { index } = state;

          const content = [
            <Stack
              key={key}
              component="li"
              {...optionProps}
              sx={{
                flexDirection: 'row',
                [`&.${autocompleteClasses.option}`]: {
                  padding: theme.spacing(2),
                },
              }}
            >
              <Typography variant="globalS">
                {fieldGetOptionLabel(option)}
              </Typography>
            </Stack>,
          ];

          const optionsLen = onCreate
            ? fieldProps.options.length
            : fieldProps.options.length - 1;

          const shouldRenderTrigger = index === optionsLen && loadMoreElem;

          if (shouldRenderTrigger) {
            content.push(
              <Stack
                component="li"
                {...optionProps}
              >
                {loadMoreElem}
              </Stack>,
            );
          }
          return content;
        }}
        disableCloseOnSelect={fieldProps.multiple}
        onChange={(event, nextValue, reason) => {
          if (reason === 'selectOption' && (nextValue as any).isCreatable) {
            onCreate?.((nextValue as any).inputValue);
          } else {
            onChange(event, nextValue, reason);
          }
        }}
        getOptionLabel={option => {
          return (option.inputValue ?? fieldGetOptionLabel(option)) as string;
        }}
        {...fieldProps}
        ref={fieldRef}
        renderInput={params => (
          <TextField
            {...params}
            error={hasError}
            helperText={
              <CustomHelperText
                helperText={helperText}
                value=""
                hasCounter={false}
              />
            }
            placeholder={placeholder}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <Fragment>
                  {params.InputProps.endAdornment}
                  {hasError && (
                    <ErrorIcon
                      size={20}
                      style={{
                        color: statusTextColor,
                      }}
                    />
                  )}
                </Fragment>
              ),
              sx: {
                ...(fieldProps.disabled && {
                  bgcolor: theme.palette.base?.greyTransparent['300p50'],
                  border: `1px solid ${theme.palette.border?.neutralBorder}`,
                }),
                color: theme.palette.textColors?.neutralText,
                fontSize: 'globalS',
              },
            }}
            InputLabelProps={{
              shrink:
                (params.inputProps.ref as RefObject<HTMLInputElement>)
                  .current === document.activeElement ||
                !!params.inputProps.value ||
                fieldProps.loading,
            }}
          />
        )}
        noOptionsText={
          <Title
            variant="S"
            title={noOptionsTitle}
            description={noOptionsDescription}
          />
        }
      />
    </FormControl>
  );
};

export default Autocomplete;
