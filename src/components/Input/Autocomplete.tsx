import { forwardRef, Fragment } from 'react';
import { assign, concat, merge } from 'lodash';
import {
  IconChevronDown,
  IconExclamationCircle,
  IconX,
} from '@tabler/icons-react';
import {
  createFilterOptions,
  FilterOptionsState,
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

type BaseProps<TValue> = MUIAutocompleteProps<
  TValue,
  boolean,
  boolean,
  boolean
>;

type BaseOption = Record<string, unknown> & {
  isCreatable?: boolean;
};

type AutocompleteProps<TValue = unknown> = BaseProps<TValue> & {
  noOptionsPrimary: string;
  noOptionsSecondary: string;
  error?: boolean;
  helperText?: string;
  canCreate?: boolean;
  renderCreatableOption?: BaseProps<TValue>['renderOption'];
  onCreate?: BaseProps<TValue>['onChange'];
  renderLoadElementTrigger?: BaseProps<TValue>['renderOption'];
  getCreatableOption?: (
    options: TValue[],
    state: FilterOptionsState<TValue>,
  ) => TValue;
  placeholder?: string;
  label?: string;
};

const defaultProps: Partial<AutocompleteProps> = {
  selectOnFocus: true,
  handleHomeEndKeys: true,
  clearOnBlur: true,
  ListboxProps: {
    sx: { maxHeight: 240 },
  },
  popupIcon: <IconChevronDown size={20} />,
  clearIcon: <IconX size={20} />,
  fullWidth: true,
};

const ErrorIcon = IconExclamationCircle;

const Autocomplete = <TValue extends BaseOption = {}>(
  {
    error: hasError,
    noOptionsPrimary,
    noOptionsSecondary,
    canCreate,
    placeholder,
    label,
    helperText = '',
    getCreatableOption,
    renderCreatableOption,
    onCreate,
    renderLoadElementTrigger,
    filterOptions = createFilterOptions(),
    ...props
  }: AutocompleteProps<TValue>,
  ref: AutocompleteProps['ref'],
) => {
  const theme = useTheme();

  const getStatusTextColor = () => {
    if (props.disabled) {
      return theme.palette.textColors?.neutralTextDisabled;
    }
    return hasError
      ? theme.palette.textColors?.errorText
      : theme.palette.textColors?.neutralTextLighter;
  };

  const statusTextColor = getStatusTextColor();

  const hasExtendedFeatures = canCreate || onCreate;

  const extendedFeaturesProps: Partial<AutocompleteProps<TValue>> = {
    filterOptions: (options, state) => {
      const filteredOptions = filterOptions(options, state);
      const creatableOption = assign(getCreatableOption?.(options, state), {
        isCreatable: true,
      });

      return concat(
        canCreate ? creatableOption : [],
        filteredOptions,
      ) as TValue[];
    },
    renderOption: (...args) => {
      const [, option] = args;

      return [
        option.isCreatable
          ? renderCreatableOption?.(...args)
          : props.renderOption?.(...args),
        renderLoadElementTrigger?.(...args),
      ];
    },
    onChange: onCreate
      ? (...args) => {
          const [, nextValue] = args;

          if ((nextValue as TValue)?.isCreatable) {
            onCreate(...args);
          } else {
            props.onChange?.(...args);
          }
        }
      : props.onChange,
  };

  const baseProps = merge(
    defaultProps,
    hasExtendedFeatures && extendedFeaturesProps,
    props,
  );

  return (
    <FormControl
      error={hasError}
      fullWidth={baseProps.fullWidth}
      disabled={baseProps.disabled}
    >
      {label && <CustomLabel label={label} />}
      <MUIAutocomplete
        {...baseProps}
        ref={ref}
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
                ...(props.disabled && {
                  bgcolor: theme.palette.base?.greyTransparent['300p50'],
                  border: `1px solid ${theme.palette.border?.neutralBorder}`,
                }),
                color: theme.palette.textColors?.neutralText,
                fontSize: 'globalS',
              },
            }}
          />
        )}
        noOptionsText={
          <Stack>
            <Typography
              variant="globalS"
              fontWeight="semiBold"
            >
              {noOptionsPrimary}
            </Typography>
            <Typography
              variant="globalXS"
              color="neutralTextLighter"
            >
              {noOptionsSecondary}
            </Typography>
          </Stack>
        }
      />
    </FormControl>
  );
};

export default forwardRef(Autocomplete);
