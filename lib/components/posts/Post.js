import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack } from '@mui/material';
import CardContainer from '../CardContainer/CardContainer';
import { getInitials } from '../../utils/user';
import SeeMoreText from '../SeeMoreText/SeeMoreText';
import ListItem from '../List/ListItem';
import { getDistanceToNow } from '../../utils/time';
import { useTranslation } from './i18n';
import { IconDots, IconEdit, IconTrash } from '@tabler/icons-react';
import { MenuList } from '../Menu/MenuList';
export const Post = ({ profilePicture, fullName, body, publicationDatetime, sx, actions, }) => {
    const { t } = useTranslation();
    const editAction = {
        title: t('EDIT'),
        Icon: IconEdit,
        onClick: actions === null || actions === void 0 ? void 0 : actions.onEdit,
    };
    const deleteAction = {
        title: t('DELETE'),
        Icon: IconTrash,
        onClick: actions === null || actions === void 0 ? void 0 : actions.onDelete,
    };
    return (_jsx(CardContainer, { fullWidth: true, padding: 24, sx: sx, children: _jsxs(Stack, { sx: { gap: 2 }, children: [_jsx(ListItem, { avatar: { src: profilePicture, text: getInitials(fullName) }, text: {
                        title: fullName,
                        description: t('TIME_DISTANCE', {
                            distance: getDistanceToNow(publicationDatetime),
                        }),
                    }, actionMenuList: actions ? (_jsx(MenuList, { Icon: IconDots, options: [editAction, deleteAction] })) : undefined, sx: { '.MuiListItem-root': { p: 0 } } }), _jsx(SeeMoreText, { text: body, lines: 6 })] }) }));
};
export default Post;
