var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// TODO: Move these to a constants file or pull from the backend.
export const esCONumberToCurrencyOptions = {
    locale: 'es-CO',
    currency: 'COP',
    currencySymbol: '$',
    fractionSeparator: ',',
    groupingSeparator: '.',
};
export const defaultTransformNumberToCurrencyOptions = {
    locale: 'en-US',
    currency: 'USD',
    currencySymbol: '$',
    fractionSeparator: '.',
    groupingSeparator: ',',
};
export const transformNumberToCurrency = (value, options) => {
    if (!value)
        return '';
    const _a = options || defaultTransformNumberToCurrencyOptions, { currency, locale, fractionSeparator = '.', groupingSeparator = ',' } = _a, rest = __rest(_a, ["currency", "locale", "fractionSeparator", "groupingSeparator"]);
    const [integer, fraction] = value.toString().split('.');
    const hasFractionDigits = value.toString().includes('.');
    const fractionDigitsLength = `${fraction || ''}`.length;
    // This regex leaves the formatted number with the grouping and fraction separators based on the provided options.
    const integerRegex = new RegExp(`\\D(?<!\\${groupingSeparator})(?<!\\${fractionSeparator})`, 'g');
    const formattedInteger = Intl.NumberFormat(locale, Object.assign({ currency, style: 'currency', maximumFractionDigits: 0, signDisplay: 'never', unitDisplay: 'short' }, rest))
        .format(BigInt(integer.replace(/\D/g, '')))
        .replace(integerRegex, '');
    // This condition allows to show the fraction separator when user is still typing it.
    if (hasFractionDigits && fractionDigitsLength < 1)
        return `${formattedInteger}${fractionSeparator}`;
    return [formattedInteger, fraction].filter(Boolean).join(fractionSeparator);
};
export const transformCurrencyToNumber = (value, options) => {
    const { groupingSeparator = ',', fractionSeparator = '.' } = options || defaultTransformNumberToCurrencyOptions;
    if (!value)
        return '';
    // This regex removes the grouping separator to parse the number correctly.
    const regex = new RegExp(`\\D(?!\\${groupingSeparator})(?<!\\${fractionSeparator})`, 'g');
    const newValue = value.replace(regex, '').replace(fractionSeparator, '.');
    return newValue;
};
