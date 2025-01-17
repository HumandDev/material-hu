import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack } from '@mui/material';
import CardContainer from '../CardContainer/CardContainer';
import { getInitials } from '../../utils/user';
import SeeMoreText from '../SeeMoreText/SeeMoreText';
import ListItem from '../List/ListItem';
import { getDistanceToNow } from '../../utils/time';
import { useTranslation } from './i18n';
export const Post = ({ profilePicture, fullName, text, publicationDatetime, sx, }) => {
    const { t } = useTranslation();
    return (_jsx(CardContainer, { fullWidth: true, padding: 24, sx: sx, children: _jsxs(Stack, { sx: { gap: 2 }, children: [_jsx(ListItem, { avatar: { src: profilePicture, text: getInitials(fullName) }, text: {
                        title: fullName,
                        description: t('TIME_DISTANCE', {
                            distance: getDistanceToNow(publicationDatetime),
                        }),
                    }, sx: { '.MuiListItem-root': { p: 0 } } }), _jsx(SeeMoreText, { text: text, lines: 6 })] }) }));
};
export default Post;
