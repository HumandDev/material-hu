export type TransformNumberToCurrencyOptions = Intl.NumberFormatOptions & {
    locale: Intl.UnicodeBCP47LocaleIdentifier;
    currencySymbol?: string;
    fractionSeparator?: '.' | ',';
    groupingSeparator?: '.' | ',';
};
export declare const esCONumberToCurrencyOptions: TransformNumberToCurrencyOptions;
export declare const defaultTransformNumberToCurrencyOptions: TransformNumberToCurrencyOptions;
export declare const transformNumberToCurrency: (value: number | string, options?: TransformNumberToCurrencyOptions) => string;
export declare const transformCurrencyToNumber: (value: string, options?: TransformNumberToCurrencyOptions) => string;
