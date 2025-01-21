import esLocale from 'date-fns/locale/es';
import enLocale from 'date-fns/locale/en-US';
import ptLocale from 'date-fns/locale/pt';
import deLocale from 'date-fns/locale/de';
import i18next from 'i18next';
export const LOCALE = {
    es: esLocale,
    en: enLocale,
    pt: ptLocale,
    de: deLocale,
};
// a function because i18next.language isn't loaded on the first render
export const getCurrentLocale = () => LOCALE[i18next.language] || esLocale;
