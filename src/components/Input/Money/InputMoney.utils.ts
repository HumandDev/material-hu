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
  const fractionDigitsLength = `${fraction || ''}`.length;
  // This regex leaves the formatted number with the grouping and fraction separators based on the provided options.
  const integerRegex = new RegExp(`\\D(?<!\\${groupingSeparator})(?<!\\${fractionSeparator})`, 'g');

  const formattedInteger = Intl.NumberFormat(locale, {
    currency,
    style: 'currency',
    maximumFractionDigits: 0,
    signDisplay: 'never',
    unitDisplay: 'short',
    ...rest,
  }).format(BigInt(integer.replace(/\D/g, ''))).replace(integerRegex, '');

  // This condition allows to show the fraction separator when user is still typing it.
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
