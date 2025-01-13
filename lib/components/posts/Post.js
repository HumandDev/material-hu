import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, Typography } from '@mui/material';
import CardContainer from '../CardContainer/CardContainer';
import Avatar from '../Avatar/Avatar';
import { getInitials } from '../../utils/user';
import SeeMoreText from '../SeeMoreText/SeeMoreText';
export const Post = ({ profilePicture, fullName, text }) => (_jsx(CardContainer, { fullWidth: true, padding: 24, children: _jsxs(Stack, { sx: { gap: 2 }, children: [_jsxs(Stack, { sx: { flexDirection: 'row', alignItems: 'center', gap: 1 }, children: [_jsx(Avatar, { src: profilePicture, text: getInitials(fullName) }), _jsx(Typography, { sx: { flex: 1 }, children: fullName })] }), _jsx(SeeMoreText, { text: text, lines: 6 })] }) }));
export default Post;
