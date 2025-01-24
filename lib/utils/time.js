import { formatDistanceToNowStrict } from 'date-fns';
import { getCurrentLocale } from './languages';
export const getDistanceToNow = (date) => formatDistanceToNowStrict(new Date(date), {
    locale: getCurrentLocale(),
});
