export const getBorderColor = (
  theme: any,
  focused?: boolean,
  error?: boolean,
  success?: boolean,
) => {
  if (focused) {
    return theme.palette.base?.blueBrand[400];
  }
  if (error) {
    return theme.palette.graphics?.errorText;
  }
  if (success) {
    return theme.palette.graphics?.successText;
  }
  return theme.palette.border?.neutralBorder;
};

export type TransformNumberToCurrencyOptions = Intl.NumberFormatOptions & {
  locale: Intl.LocalesArgument,
  currencySymbol?: string,
  fractionSeparator?: '.' | ',',
  groupingSeparator?: '.' | ',',
};

// TODO: Move these to a constants file or pull from the backend.
export const esCONumberToCurrencyOptions: TransformNumberToCurrencyOptions = {
  locale: 'es-CO',
  currency: 'COP',
  currencySymbol: '$',
  fractionSeparator: ',',
  groupingSeparator: '.',
}

export const defaultTransformNumberToCurrencyOptions: TransformNumberToCurrencyOptions = {
  locale: 'en-US',
  currency: 'USD',
  currencySymbol: '$',
  fractionSeparator: '.',
  groupingSeparator: ',',
}

export const transformNumberToCurrency = (
  value: number | string,
  options?: TransformNumberToCurrencyOptions
) => {
  if (!value) return '';

  const {
    currency,
    locale,
    fractionSeparator = '.',
    groupingSeparator = ',',
    ...rest
  } = options || defaultTransformNumberToCurrencyOptions;

  const [integer, fraction] = value.toString().split('.');
  const hasFractionDigits = value.toString().includes('.');
  const fractionDigitsLength = `${fraction || ''}`.split('').length;
  const integerRegex = new RegExp(`\\D(?<!\\${groupingSeparator})(?<!\\${fractionSeparator})`, 'g');

  const formattedInteger = Intl.NumberFormat(locale, {
    currency,
    style: 'currency',
    maximumFractionDigits: 0,
    signDisplay: 'never',
    unitDisplay: 'short',
    ...rest,
  }).format(BigInt(integer.replace(/\D/g, ''))).replace(integerRegex, '');

  if (hasFractionDigits && fractionDigitsLength < 1) return `${formattedInteger}${fractionSeparator}`;

  return [formattedInteger, fraction].filter(Boolean).join(fractionSeparator);
}

export const transformCurrencyToNumber = (
  value: string,
  options?: TransformNumberToCurrencyOptions
) => {
  const {
    groupingSeparator = ',',
    fractionSeparator = '.',
  } = options || defaultTransformNumberToCurrencyOptions;
  if (!value) return '';
  const regex = new RegExp(`\\D(?!\\${groupingSeparator})(?<!\\${fractionSeparator})`, 'g');
  const newValue = value.replace(regex, '').replace(fractionSeparator, '.');
  return newValue;
}
